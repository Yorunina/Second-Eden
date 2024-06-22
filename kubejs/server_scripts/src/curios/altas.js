// priority: 100
const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { $MapItem } = require("packages/net/minecraft/world/item/$MapItem")
const { $RandomizableContainerBlockEntity } = require("packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity")
const { $MapDecoration$Type } = require("packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type")
const { $MapItemSavedData } = require("packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData")
const { $Level } = require("packages/net/minecraft/world/level/$Level")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")

NetworkEvents.dataReceived(global.AtlasKeyPressed, event => {
    /**@type {$ServerPlayer_} */
    let player = event.player
    if (!player instanceof $ServerPlayer) return
    let lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curios = lazyOptCapability.resolve().get()

    let atlasStacksHandler = curios.getStacksHandler('atlas')
    if (!atlasStacksHandler.isPresent()) return
    let atlasStacks = atlasStacksHandler.get().getStacks()
    if (!atlasStacks) return
    let atlasItem = atlasStacks.getStackInSlot(0)
    if (!atlasItem || atlasItem.getDamageValue() + 1 > atlasItem.getMaxDamage()) return
    let level = event.level
    let mapItem = genAtlasLootMap(level, player, atlasItem)
    if (!mapItem) return
    player.give(mapItem)
    atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
})


/**
 * @param {$Level} level 
 * @param {$ServerPlayer_} player 
 * @param {$ItemStack_} atlasItem
 * @return {$ItemStack_}
 */
function genAtlasLootMap(level, player, atlasItem) {
    let treasureFortune = player.getAttribute('kubejs:treasure_fortune').getValue()
    let treasureDistance = player.getAttribute('kubejs:treasure_distance').getValue()
    let distance = treasureDistance * Math.random()

    let deltaDim = Math.floor(Math.random() * 4) + 1
    let deltaX = Math.pow(-1, Math.floor(deltaDim / 2)) * Math.random() * distance
    let deltaZ = Math.pow(-1, Math.floor((deltaDim + 1) / 2)) * Math.sqrt(Math.pow(distance, 2) - Math.pow(deltaX, 2))
    player.tell(deltaX)
    player.tell(deltaZ)
    let randomPosBlock = player.block.offset(deltaX, 0, deltaZ)
    let targetChunk = level.getChunk(randomPosBlock.x, randomPosBlock.z, $ChunkStatus.SURFACE, true)

    let y = Math.min(targetChunk.getHeight('world_surface', randomPosBlock.x, randomPosBlock.z) + 20 + Math.random() * 20, 255)

    let pos = new BlockPos(randomPosBlock.x, y, randomPosBlock.z)
    let airdropEntity = level.createEntity('kubejs:airdrop_balloon')
    airdropEntity.persistentData.putString('owner', player.stringUuid)
    airdropEntity.persistentData.putFloat('fortune', treasureFortune)
    airdropEntity.persistentData.putString('type', atlasItem.id)
    airdropEntity.setPosition(pos.x, pos.y, pos.z)
    airdropEntity.spawn()

    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecoration$Type.RED_X)
    mapItem = mapItem.withName({ "translate": "map.kubejs.lost_treasure" })

    return mapItem
}
