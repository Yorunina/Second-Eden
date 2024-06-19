// priority: 100
const { $IRaiderManager$RaidSpawnResult } = require("packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager$RaidSpawnResult")
const { $IColonyManager } = require("packages/com/minecolonies/api/colony/$IColonyManager")

ItemEvents.entityInteracted('kubejs:item_x', event => {
    let {target, player} = event
    if (target.type != 'minecolonies:citizen') return
    let colony = getColonyByEntity(target)
    if (!colony) return
    let result = colony.raiderManager.raiderEvent('', true, true)
    if (result != $IRaiderManager$RaidSpawnResult.SUCCESS) return
    event.item.shrink(1)
})


/**
 * 通过实体获取colonyId进而获取colony
 * @param {$Entity_} target 
 * @returns {$IColony_}
 */
function getColonyByEntity(target) {
    let colonyId = target?.nbt.getInt('colony')
    if (!colonyId) return null
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, target.level.dimensionKey)
    if (!colony) return null
    return colony
}





//   /**
//   *
//   * @param {Internal.PathfinderMob} entity
//   */
//   global.ai = entity => {
//     let PathfinderMob = Java.loadClass("net.minecraft.world.entity.PathfinderMob")
//     if (entity instanceof PathfinderMob) {
//       if (entity.entityType.category.friendly) return
//       let Cow = Java.loadClass('net.minecraft.world.entity.animal.Cow')
//       const MeleeAttackGoal = Java.loadClass('net.minecraft.world.entity.ai.goal.MeleeAttackGoal')
//       const HurtByTargetGoal = Java.loadClass("net.minecraft.world.entity.ai.goal.target.HurtByTargetGoal")
//       entity.goalSelector.addGoal(1, new MeleeAttackGoal(entity, 1, true))
//       entity.targetSelector.addGoal(1, new HurtByTargetGoal(entity, Cow))
//       let Player = Java.loadClass('net.minecraft.world.entity.player.Player')
//       const NearestAttackableTargetGoal = Java.loadClass('net.minecraft.world.entity.ai.goal.target.NearestAttackableTargetGoal')
//       entity.targetSelector.addGoal(1, new NearestAttackableTargetGoal(entity, Player, true))
//     }
//   }