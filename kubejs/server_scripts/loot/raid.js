// priority: 100
ItemEvents.entityInteracted('item_x', event => {
    let {target, player} = event
    if (target.type != 'minecolonies:citizen') return
    let colony = getColonyByEntity(target)
    if (!colony) return
    let result = colony.raiderManager.raiderEvent('', true, true)
    colony.raiderManager.setNightsSinceLastRaid
    if (result != $RaidSpawnResult.SUCCESS) return
    event.item.shrink(1)
})



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