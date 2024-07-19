// priority: 1000
import { $IColony } from "packages/com/minecolonies/api/colony/$IColony"
import { $IBuilding } from "packages/com/minecolonies/api/colony/buildings/$IBuilding"
import { $ItemScrollGuardHelp } from "packages/com/minecolonies/core/items/$ItemScrollGuardHelp"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"
import { $ServerPlayer } from "packages/net/minecraft/server/level/$ServerPlayer"
import { $Level } from "packages/net/minecraft/world/level/$Level"

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
 * @param {$ServerPlayer} player 
 * @returns {boolean}
 */
export function CheckColonyMember(colony, player) {
    return colony.getPermissions().isColonyMember(player)
}

/**
 * 根据玩家获取可能的殖民地
 * @param {$Level} level 
 * @param {$ServerPlayer} player 
 * @returns {$IColony}
 */
export function GetColonyByPlayer(level, player) {
    return $IColonyManager.getInstance().getIColonyByOwner(level, player)
}


/**
 * 根据BlockPos获取建筑
 * @param {$IColony} colony 
 * @param {$BlockPos} blockPos 
 * @returns {$IBuilding}
 */
export function GetBuildingByPos(colony, blockPos) {
    return colony.getBuildingManager().getBuilding(blockPos)
}


/**
 * 召唤卫兵塔中的卫兵跟随玩家
 * @param {$Level} level 
 * @param {$ServerPlayer} player 
 * @param {$IBuilding} building 
 * @param {$IColony} colony 
 * @param {Number} ticks 
 */
export function SummonGuardFollowPlayer(level, player, building, colony, ticks) {
    $ItemScrollGuardHelp.summonGuardFollowPlayer(level, player, building, colony, ticks)
}