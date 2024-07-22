// priority: 100

const { $MapItem } = require("packages/net/minecraft/world/item/$MapItem")
const { $MapDecoration$Type } = require("packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type")
const { $MapItemSavedData } = require("packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")
const { AirdropEntityConfig } = require("../../model/airdrop_entity_config")
const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { $BlockPos } = require("packages/net/minecraft/core/$BlockPos")
const { CreateWaypoint } = require("../../utils/ftbchunk")

NetworkEvents.dataReceived(global.AtlasKeyPressedChannel, event => {
    let { level, player } = event
    if (!player instanceof $ServerPlayer) return
    let curios = getCuriosHandler(player)
    if (!curios) return

    let atlasStacksHandler = curios.getStacksHandler('atlas')
    if (!atlasStacksHandler.isPresent()) return
    let atlasStacks = atlasStacksHandler.get().getStacks()
    if (!atlasStacks) return
    let atlasItem = atlasStacks.getStackInSlot(0)

    if (!AtlasActiveStrategy[atlasItem.id]) return

    // if (player.cooldowns.isOnCooldown(atlasItem)) return

    if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return
    let airdropPos = AtlasActiveStrategy[atlasItem.id](event, atlasItem)
    if (!airdropPos) return

    // 标记地点
    if (curios.isEquipped('kubejs:waypointer_necklace')) {
        CreateWaypoint(player, airdropPos, new Date().toLocaleString(), 0xFAED34)
    }

    atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
    player.addItemCooldown(atlasItem, 20 * 30)

    let encodeAbility = player.getAttribute('kubejs:encode_ability').getValue()
    let mapItem = getMapItem(level, airdropPos)
    // 监听戒指事件
    level.getPlayers().forEach(entityItem => {
        if (!entityItem instanceof $ServerPlayer) return
        /** @type {$ServerPlayer_} */
        let thisPlayer = entityItem
        let decodeAbility = thisPlayer.getAttribute('kubejs:decode_ability').getValue()
        let thisCurios = getCuriosHandler(thisPlayer)
        if (!thisCurios) return
        let isSpoon = thisCurios.isEquipped('kubejs:snoop_ring')
        if (!isSpoon) return
        if (Math.random() * encodeAbility < decodeAbility - encodeAbility) {
            thisPlayer.give(mapItem)
        }
    })
})



/**
 * @param {$ServerPlayer_} player 
 * @returns {$ICuriosItemHandler_}
 */
function getCuriosHandler(player) {
    let lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    return lazyOptCapability.resolve().get()
}

/**
 * @param {$Level_} level 
 * @param {$ServerPlayer_} player 
 * @return {$BlockPos}
 */
function getSpawnLocation(level, player) {
    let treasureDistance = player.getAttribute('kubejs:treasure_distance').getValue()
    let distance = treasureDistance * Math.random()

    let deltaDim = Math.floor(Math.random() * 4) + 1
    let deltaX = Math.pow(-1, Math.floor(deltaDim / 2)) * Math.random() * distance
    let deltaZ = Math.pow(-1, Math.floor((deltaDim + 1) / 2)) * Math.sqrt(Math.pow(distance, 2) - Math.pow(deltaX, 2))
    let ranPosBlock = player.block.offset(deltaX, 0, deltaZ)

    let chunkX = Math.floor(ranPosBlock.x / 16)
    let chunkZ = Math.floor(ranPosBlock.z / 16)
    let blockX = ranPosBlock.x % 16
    let blockZ = ranPosBlock.z % 16

    let targetChunk = level.getChunk(chunkX, chunkZ, $ChunkStatus.SURFACE, true)
    let y = Math.min(targetChunk.getHeight('motion_blocking', blockX, blockZ), 255)
    y = y + 12 + Math.random() * 10
    return new BlockPos(ranPosBlock.x, y, ranPosBlock.z)
}

/**
 * @param {$Level_} level 
 * @param {$ServerPlayer_} player 
 * @param {$BlockPos_} pos
 * @param {AirdropEntityConfig} config
 * @return {$Entity_}
 */
function getAirdropEntity(level, player, pos, config) {
    let treasureFortune = player.getAttribute('kubejs:treasure_fortune').getValue()
    let airdropEntity = level.createEntity(config.entityType)
    airdropEntity.persistentData.putString('owner', player.stringUuid)
    airdropEntity.persistentData.putFloat('fortune', treasureFortune)
    airdropEntity.persistentData.putString('type', config.type)
    airdropEntity.persistentData.putString('theme', config.theme)
    airdropEntity.setPosition(pos.x, pos.y, pos.z)
    return airdropEntity
}

/**
 * @param {$Level_} level 
 * @param {$BlockPos_} pos
 * @return {$ItemStack_}
 */
function getMapItem(level, pos) {
    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, '+', $MapDecoration$Type.RED_X)
    mapItem = mapItem.withName(Text.translatable('item.map.kubejs.airdrop'))
    return mapItem
}


/**
 * 地图册策略，注册地图册物品之后需要实现其对应的策略，而后去注册AtlasTypeMapping中地图册对应的airdrop type
 * @constant
 * @type {Object<string,function($NetworkEventJS_, $ItemStack_):void>}
 * @returns {$BlockPos}
 */
const AtlasActiveStrategy = {
    'kubejs:newer_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:adv_airdrop_balloon'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:common_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:advanced_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:airdrop_balloon_blue'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:ultra_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:airdrop_balloon_yellow'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:wood_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:airdrop_balloon_red'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:stone_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:airdrop_balloon_red'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:ore_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:airdrop_balloon_red'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:luxury_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:airdrop_balloon_red'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:huge_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig(atlasItem).setEntityType('kubejs:adv_airdrop_balloon_blue'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
    'kubejs:sociality_atlas': function (event, atlasItem) {
        let { level, player } = event
        let airdropPos = getSpawnLocation(level, player)
        let entityConfig = new AirdropEntityConfig(atlasItem)
        let amount = Math.floor(Math.random() * 8) + 2
        for (let i = 0; i < amount; i++) {
            airdropPos = airdropPos.offset(Math.random() * 8 + 2, Math.random() * 3, Math.random() * 8 + 2)
            let airdropEntity = getAirdropEntity(level, player, airdropPos, entityConfig)
            airdropEntity.spawn()
        }

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)
        return airdropPos
    },
}