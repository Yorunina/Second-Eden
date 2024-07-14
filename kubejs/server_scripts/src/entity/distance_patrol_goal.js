// priority: 1000
const { $CustomGoal } = require("packages/net/liopyu/entityjs/util/ai/$CustomGoal")
const { $Vec3 } = require("packages/net/minecraft/world/phys/$Vec3")

/**
 * 
 * @param {$PathfinderMob_} entity 
 */
export function SetLongDistancePatrolGoal(entity) {
    entity.goalSelector.addGoal(3, new $CustomGoal(
        'long_distance_patrol',
        entity,
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 何时能够使用
            if (mob.persistentData.contains('patrolTarget') &&
                mob.persistentData.get('patrolTarget').getInt('patrolling') == 1) {
                return true
            }
            return false
        },
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 能否继续使用 
            let target = mob.persistentData.get('patrolTarget')
            let blockPos = new $Vec3(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'))
            if (mob.getPosition(1.0).distanceTo(blockPos) <= 10) {
                return false
            }
            return true
        },
        true, // 是否允许中断
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 开启时执行
            let target = mob.persistentData.get('patrolTarget')
            mob.getNavigation().moveTo(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'), 1.0)
        },
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 停止时执行
            let target = mob.persistentData.get('patrolTarget')
            target.putInt('patrolling', 0)
        },
        false, // 是否每个tick都需要更新
        /** @param {$PathfinderMob_} mob **/ mob => {
            // tick
            let target = mob.persistentData.get('patrolTarget')
            mob.getNavigation().moveTo(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'), 1.0)
        },
    ))
}