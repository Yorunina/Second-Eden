// priority: 1000
const { $IColonyManager } = require("packages/com/minecolonies/api/colony/$IColonyManager")


/**
 * 通过实体获取colonyId进而获取colony
 * @param {$Entity_} target 
 * @returns {$IColony_}
 */
export function GetColonyByEntity(target) {
    let colonyId = target?.nbt.getInt('colony')
    if (!colonyId) return null
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, target.level.dimensionKey)
    if (!colony) return null
    return colony
}

/**
 * 通过实体获取citizen
 * @param {$Entity_} target 
 * @returns {$ICitizenData_}
 */
export function GetCitizenFromEntity(target) {
    let citizenId = target?.nbt.getInt('citizen')
    if (!citizenId) return null
    let colony = getColonyByEntity(target)
    if (!colony) return null
    return colony.getCitizenManager().getCivilian(citizenId)
}