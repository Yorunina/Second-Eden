// priority: 1000
import { $IColony } from "packages/com/minecolonies/api/colony/$IColony"

const { $IColonyManager } = require("packages/com/minecolonies/api/colony/$IColonyManager")

/**
 * 通过实体获取colonyId进而获取colony
 * @param {$Entity_} target 
 * @returns {$IColony}
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
    let colony = GetColonyByEntity(target)
    if (!colony) return null
    return colony.getCitizenManager().getCivilian(citizenId)
}

/**
 * 校验该玩家是否是殖民地的拥有者，这往往用于某些殖民地负面的设置上的校验，如强制的袭击
 * @param {$IColony_} colony 
 * @param {$ServerPlayer_} player 
 * @returns {boolean}
 */
export function CheckColonyOwner(colony, player) {
    let uuid = colony.getPermissions().getOwner().toString()
    return uuid == player.uuid.toString()
}