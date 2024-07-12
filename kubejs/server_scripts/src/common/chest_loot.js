// priority: 10

const { SetLongDistancePatrolGoal } = require("../utils/custom_goal")
const { CreateWaypoint } = require("../utils/ftbchunk")

LootJS.modifiers(event => {
    event.removeGlobalModifier("touhou_little_maid:power_point")
    event.removeGlobalModifier("touhou_little_maid:shrine")
})





ItemEvents.rightClicked('stick', event => {
    let { player } = event
    CreateWaypoint(player, 'test', 0x3ac5cf)
    // target.persistentData.put('patrolTarget', { 'patrolling': NBT.intTag(1), 'x': NBT.floatTag(362), 'y': NBT.floatTag(82), 'z': NBT.floatTag(-116) })
    // SetLongDistancePatrolGoal(target)
})

