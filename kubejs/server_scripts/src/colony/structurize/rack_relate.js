const { $IColonyManager } = require("packages/com/minecolonies/api/colony/$IColonyManager")
const { $BlockPos } = require("packages/net/minecraft/core/$BlockPos")

BlockEvents.rightClicked(event => {
    let { player, block, item, level } = event
    if (item.id != 'kubejs:rack_relate_wand') return
    if (player.cooldowns.isOnCooldown(item)) return

    if (block.id == 'minecolonies:blockminecoloniesrack') {
        if (!item.hasNBT() || !item.nbt.contains('building')) return
        let buildingPosNbt = item.nbt.getCompound('building')
        let targetBlockPos = new BlockPos(buildingPosNbt.getInt('x'), buildingPosNbt.getInt('y'), buildingPosNbt.getInt('z'))
        let targetBlock = level.getBlock(targetBlockPos)
        let colonyId = targetBlock.entityData.getInt('colony')
        if (!colonyId) return null
        let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, level.dimensionKey)
        if (!colony) return null
        let building = colony.getBuildingManager().getBuilding(targetBlockPos)
        if (!building) return null
        building.addContainerPosition(block.pos)
        player.addItemCooldown(item, 20 * 3)
    } else if (block.entityData.contains('blueprintDataProvider')) {
        let colonyId = block.entityData.getInt('colony')
        if (!colonyId) return null
        let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, level.dimensionKey)
        if (!colony) return null
        let building = colony.getBuildingManager().getBuilding(block.pos)
        if (!building) return null
        if (!item.hasNBT()) {
            item.setNbt({ 'building': { 'x': block.pos.x, 'y': block.pos.y, 'z': block.pos.z } })
        } else {
            item.nbt.merge({ 'building': { 'x': block.pos.x, 'y': block.pos.y, 'z': block.pos.z } })
        }
        player.addItemCooldown(item, 20 * 3)
    }
})

ItemEvents.rightClicked('kubejs:rack_relate_wand', event => {
    let { player, item, level } = event
    if (player.cooldowns.isOnCooldown(item)) return

    if (!item.hasNBT() || !item.nbt.contains('building')) return
    let buildingPosNbt = item.nbt.getCompound('building')
    let targetBlockPos = new BlockPos(buildingPosNbt.getInt('x'), buildingPosNbt.getInt('y'), buildingPosNbt.getInt('z'))
    let targetBlock = level.getBlock(targetBlockPos)
    let colonyId = targetBlock.entityData.getInt('colony')
    if (!colonyId) return null
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, level.dimensionKey)
    if (!colony) return null
    let building = colony.getBuildingManager().getBuilding(targetBlockPos)
    if (!building) return null
    let containsTextList = [Text.translatable('msg.building.related_racks.1')]
    let i = 1
    building.getContainers().forEach(/** @param {$BlockPos} container */container => {
        containsTextList.push(Text.translatable('msg.building.related_racks.2', i, container.x, container.y, container.z))
        i++
    })
    player.tell(containsTextList.join('\n'))

})