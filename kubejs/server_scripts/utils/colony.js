/**
 * 通过村民目标获取colonyId进而获取colony
 * @param {Internal.Entity} target 
 * @returns {Internal.IColony}
 */
function getColonyByEntity(target) {
    let colonyId = target?.nbt.getInt('colony')
    if (!colonyId) return null
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, target.level.dimensionKey)
    if (!colony) return null
    return colony
}
