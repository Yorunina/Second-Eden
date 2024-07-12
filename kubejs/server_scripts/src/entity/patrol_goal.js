const { $Heightmap$Types } = require("packages/net/minecraft/world/level/levelgen/$Heightmap$Types")

EntityJSEvents.addGoalSelectors('minecraft:zombie', entity => {
    entity.customGoal(
        'long_distance_patrol',
        1, // 优先级
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 何时能够使用
            if (mob.persistentData.contains('patrol_target') &&
                mob.persistentData.getCompound('patrol_target').getBoolean('patrolling')) return true
            return false
        },
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 能否继续使用 
            let target = mob.persistentData.getCompound('patrol_target')
            let blockPos = new BlockPos(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'))
            if (blockPos.closerToCenterThan(mob.position(), 10)) {
                return false
            }
            return true
        },
        true, // 是否允许中断
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 开启时执行
            let target = mob.persistentData.getCompound('patrol_target')
            mob.getNavigation().moveTo(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'), 1.0)
        },
        /** @param {$PathfinderMob_} mob **/ mob => {
            // 停止时执行
            let target = mob.persistentData.getCompound('patrol_target')
            target.putBoolean('patrolling', false)
            let random = mob.getRandom()
            let blockPos = mob.level.getHeightmapPos($Heightmap$Types.MOTION_BLOCKING_NO_LEAVES, mob.blockPosition.offset(-8 + random.nextInt(16), 0, -8 + random.nextInt(16)))
            // 随机寻路目标
            mob.getNavigation().moveTo(blockPos.x, blockPos.y, blockPos.z, 1.0)
        },
        false, // 是否每个tick都需要更新
        /** @param {$PathfinderMob_} mob **/ mob => {
            // tick
            let target = mob.persistentData.getCompound('patrol_target')
            mob.getNavigation().moveTo(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'), 1.0)
        },
    )
})