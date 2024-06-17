function identifyLootMap(event) {
    let level = event.level
    let player = event.player
    let randomPosBlock = player.block.offset((0.5 - Math.random()) * 1000, (128 - Math.random() * 32) - player.block.y, (0.5 - Math.random()) * 1000)
    
    let luck = Math.max(player.getLuck(), 0)
    let table = 'minecraft:chests/stronghold/base'
    let dimLootMap = treasureDetectorTableMap[level.dimensionKey.location()]
    
    if (dimLootMap) {
        let keys = Object.keys(dimLootMap)
        keys.forEach((a) => parseInt(a))
        keys = keys.sort((a, b) => {
            return a - b
        })
        for (let i = 1; i < keys.length; i++) {
            if (i + 1 >= keys.length) {
                table = dimLootMap['-1']
                break
            }
            if (luck < parseInt(keys[i + 1]) && luck >= parseInt(keys[i])) {
                table = dimLootMap[keys[i]]
                break
            }
        }
    }

    for (let i = 0; i < 16; i++) {
        if (!randomPosBlock.blockState.isAir()) {
            if (!randomPosBlock.offset(0, -1, 0).blockState.isAir()) {
                randomPosBlock = randomPosBlock.offset(0, -4, 0)
                break
            }
        }
        randomPosBlock = randomPosBlock.offset(0, -4, 0)
    }
    let pos = randomPosBlock.getPos()
    let mapItem = $MapItem.create(level, pos.x, pos.z, 1, true, true)
    $MapItem.renderBiomePreviewMap(level, mapItem)
    $MapItemSavedData.addTargetDecoration(mapItem, pos, "+", $MapDecorationType.RED_X)
    mapItem = mapItem.withName({ "translate": "map.kubejs.lost_treasure" })
    let placementState = Blocks.CHEST.defaultBlockState();
    level.setBlock(pos, placementState, 2)
    $RandomizableContainerBlockEntity.setLootTable(level, level.getRandom(), pos, table)
    player.give(mapItem)
}