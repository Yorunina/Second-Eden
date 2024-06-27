// priority: 100
const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { $MapItem } = require("packages/net/minecraft/world/item/$MapItem")
const { $MapDecoration$Type } = require("packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type")
const { $MapItemSavedData } = require("packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")

NetworkEvents.dataReceived(global.AtlasKeyPressed, event => {
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
    let airdropPos = AtlasActiveStrategy[atlasItem.id](event, atlasItem)
    if (!airdropPos) return
    player.addItemCooldown(atlasItem, 20 * 30)

    let encodeAbility = player.getAttribute('kubejs:encode_ability').getValue()

    // 监听戒指事件
    level.getPlayers().forEach(entityItem => {
        if (!entityItem instanceof $ServerPlayer) return
        /** @type {$ServerPlayer_} */
        let thisPlayer = entityItem
        let decodeAbility = thisPlayer.getAttribute('kubejs:decode_ability').getValue()
        let thisCurios = getCuriosHandler(thisPlayer)
        if (!thisCurios) return

        let isSpoon = thisCurios.isEquipped(item => {
            return item.hasTag('kubejs:snoop')
        })
        if (!isSpoon) return
        if (Math.random() * encodeAbility < decodeAbility - encodeAbility) {
            player.give(getMapItem(level, airdropPos))
        }
    })
})

/**
 * @param {$ServerPlayer_} player 
 * @returns {$ICuriosItemHandler_}
 */
function getCuriosHandler(player) {
    player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    return lazyOptCapability.resolve().get()
}

/**
 * @param {$Level_} level 
 * @param {$ServerPlayer_} player 
 * @return {$BlockPos_}
 */
function getSpawnLocation(level, player) {
    let treasureDistance = player.getAttribute('kubejs:treasure_distance').getValue()
    let distance = treasureDistance * Math.random()

    let deltaDim = Math.floor(Math.random() * 4) + 1
    let deltaX = Math.pow(-1, Math.floor(deltaDim / 2)) * Math.random() * distance
    let deltaZ = Math.pow(-1, Math.floor((deltaDim + 1) / 2)) * Math.sqrt(Math.pow(distance, 2) - Math.pow(deltaX, 2))
    let randomPosBlock = player.block.offset(deltaX, 0, deltaZ)
    let targetChunk = level.getChunk(randomPosBlock.x, randomPosBlock.z, $ChunkStatus.SURFACE, true)

    let y = Math.min(targetChunk.getHeight('world_surface', randomPosBlock.x, randomPosBlock.z) + 12 + Math.random() * 20, 255)

    return new BlockPos(randomPosBlock.x, y, randomPosBlock.z)
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
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecoration$Type.RED_X)
    mapItem = mapItem.withName({ "translate": "item.map.kubejs.airdrop" })
    return mapItem
}

/**
 * 空投实体配置
 * @param {string} type 
 */
function AirdropEntityConfig(type) {
    this.type = type
    this.entityType = 'kubejs:airdrop_balloon'
}
AirdropEntityConfig.prototype = {
    /**
     * @param {$EntityType_} entityType 
     * @returns {AirdropEntityConfig}
     */
    setEntityType: function (entityType) {
        this.entityType = entityType
        return this
    }
}

/**
 * 空投呼唤策略
 * @constant
 * @type {Object<string,function($NetworkEventJS_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const AtlasActiveStrategy = {
    'kubejs:newer_atlas': function (event, atlasItem) {
        let { level, player } = event

        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('newer'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
    'kubejs:common_atlas': function (event, atlasItem) {
        let { level, player } = event
        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('common'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
    'kubejs:uncommon_atlas': function (event, atlasItem) {
        let { level, player } = event
        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('uncommon'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
    'kubejs:wooden_atlas': function (event, atlasItem) {
        let { level, player } = event
        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('wooden'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
    'kubejs:huge_atlas': function (event, atlasItem) {
        let { level, player } = event
        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)

        let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('common').setEntityType('huge_airdrop_balloon'))
        airdropEntity.spawn()

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
    'kubejs:sociality_atlas': function (event, atlasItem) {
        let { level, player } = event
        if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return null

        let airdropPos = getSpawnLocation(level, player)
        for (let i = 0; i < 12; i++) {
            airdropPos.offset(Math.random() * 3, Math.random() * 2, Math.random() * 3)
            let airdropEntity = getAirdropEntity(level, player, airdropPos, new AirdropEntityConfig('common').setEntityType('huge_airdrop_balloon'))
            airdropEntity.spawn()
        }

        let mapItem = getMapItem(level, airdropPos)
        player.give(mapItem)

        atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
        return airdropPos
    },
}