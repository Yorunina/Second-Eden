// priority: 100
const { $IRaiderManager$RaidSpawnResult } = require("packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager$RaidSpawnResult")
const { GetColonyByEntity, CheckColonyOwner } = require("../utils/colony")

ItemEvents.entityInteracted('kubejs:raid_book', event => {
    let {target, player} = event
    if (target.type != 'minecolonies:citizen') return
    let colony = GetColonyByEntity(target)
    if (!CheckColonyOwner(colony, player)) {
        player.status(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    } 
    if (!colony) return
    let result = colony.raiderManager.raiderEvent('', true, true)
    if (result != $IRaiderManager$RaidSpawnResult.SUCCESS) return
    event.item.shrink(1)
})