// const { $Heightmap$Types } = require("packages/net/minecraft/world/level/levelgen/$Heightmap$Types")

// EntityJSEvents.addGoalSelectors('minecraft:zombie', entity => {
//     entity.customGoal('long_distance_patrol',
//         4,
//         /** @param {$PathfinderMob_} mob **/ mob => {
//             if (mob.persistentData.contains('patrol_target') &&
//                 mob.persistentData.getCompound('patrol_target').getBoolean('patrolling')) return true
//             return false
//         },
//         /** @param {$PathfinderMob_} mob **/ mob => {
//             if (mob.persistentData.contains('patrol_target') &&
//                 mob.persistentData.getCompound('patrol_target').getBoolean('patrolling')) return true
//             return false
//         },
//         true,
//         /** @param {$PathfinderMob_} mob **/ mob => {
//             let target = mob.persistentData.getCompound('patrol_target')
//             mob.getNavigation().moveTo(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'), 1.0)
//         },
//         /** @param {$PathfinderMob_} mob **/ mob => {
//             let random = mob.getRandom()
//             let blockPos = mob.level.getHeightmapPos($Heightmap$Types.MOTION_BLOCKING_NO_LEAVES, mob.blockPosition.offset(-8 + random.nextInt(16), 0, -8 + random.nextInt(16)))
//             mob.getNavigation().moveTo(blockPos.x, blockPos.y, blockPos.z, 1.0)
//         },
//         false,
//         /** @param {$PathfinderMob_} mob **/ mob => {
//             let target = mob.persistentData.getCompound('patrol_target')
//             let blockPos = new BlockPos(target.getFloat('x'), target.getFloat('y'), target.getFloat('z'))
//             if (blockPos.closerToCenterThan(mob.position(), 10)) {
//                 target.putBoolean('patrolling', false)
//                 return
//             }
//             mob.getNavigation().moveTo(blockPos.x, blockPos.y, blockPos.z, 1.0)
//         },
//     )
// })