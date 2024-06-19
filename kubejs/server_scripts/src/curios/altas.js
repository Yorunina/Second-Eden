// priority: 100
const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { $MapItem } = require("packages/net/minecraft/world/item/$MapItem")
const { $Level } = require("packages/net/minecraft/world/level/$Level")
const { $RandomizableContainerBlockEntity } = require("packages/net/minecraft/world/level/block/entity/$RandomizableContainerBlockEntity")
const { $MapDecoration$Type } = require("packages/net/minecraft/world/level/saveddata/maps/$MapDecoration$Type")
const { $MapItemSavedData } = require("packages/net/minecraft/world/level/saveddata/maps/$MapItemSavedData")

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
    if (!atlasItem) return
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
    let randomPosBlock = player.block.offset((0.5 - Math.random()) * 300, 0, (0.5 - Math.random()) * 300)
    let y = level.getHeight('world_surface', randomPosBlock.x, randomPosBlock.z) + 12 + Math.random() * 20
    let pos = new BlockPos(randomPosBlock.x, y, randomPosBlock.z)

    let airdropEntity = level.createEntity('kubejs:airdrop_balloon')
    airdropEntity.persistentData.putString('owner', player.stringUuid)
    airdropEntity.persistentData.putFloat('fortune', player.getAttribute('kubejs:treasure_fortune').getValue())
    airdropEntity.persistentData.putFloat('type', atlasItem.id)
    airdropEntity.setPosition(pos.x, y, pos.z)
    airdropEntity.spawn()

    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecoration$Type.RED_X)
    mapItem = mapItem.withName({ "translate": "map.kubejs.lost_treasure" })
    // let placementState = Blocks.CHEST.defaultBlockState();
    // level.setBlock(pos, placementState, 2)
    // $RandomizableContainerBlockEntity.setLootTable(level, level.getRandom(), pos, table)
    return mapItem
}