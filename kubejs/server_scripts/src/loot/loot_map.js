// priority: 100
NetworkEvents.dataReceived(global.AtlasKeyPressed, event => {
    /**@type {Internal.ServerPlayer} */
    let player = event.player
    if (!player instanceof $ServerPlayer) return
    player.modifyAttribute('minecraft:generic.attack_damage')
    let lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curios = lazyOptCapability.resolve().get()
    
    let atlasItemSlotResOpt = curios.findFirstCurio(item => {
        return item.hasTag('curios:atlas')
    })
    if (!atlasItemSlotResOpt.ifPresent()) return
    let atlasSlotRes = atlasItemSlotResOpt.get()
    let atlasItem = atlasSlotRes.stack()
    let level = event.level
    let mapItem = genAtlasLootMap(level, player)
    if (!mapItem) return
    player.give(mapItem)
    atlasItem.setDamageValue(atlasItem.getDamageValue() + 1)
})


/**
 * @param {Internal.Level} level 
 * @param {Internal.ServerPlayer} player 
 * @return {Internal.ItemStack}
 */
function genAtlasLootMap(level, player) {
    let randomPosBlock = player.block.offset((0.5 - Math.random()) * 1000, (128 - Math.random() * 32) - player.block.y, (0.5 - Math.random()) * 1000)
    
    let pos = randomPosBlock.getPos()
    let airdropEntity = level.createEntity('kubejs:airdrop_balloon')
    airdropEntity.persistentData.putString('owner', player.stringUuid)
    airdropEntity.persistentData.putFloat('fortune', player.getAttribute('kubejs:treasure_fortune').getValue())
    airdropEntity.setPosition(pos.x, pos.y, pos.z)
    airdropEntity.spawn()
    
    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecorationType.RED_X)
    mapItem = mapItem.withName({ "translate": "map.kubejs.lost_treasure" })
    let placementState = Blocks.CHEST.defaultBlockState();
    level.setBlock(pos, placementState, 2)
    $RandomizableContainerBlockEntity.setLootTable(level, level.getRandom(), pos, table)
    return mapItem
}