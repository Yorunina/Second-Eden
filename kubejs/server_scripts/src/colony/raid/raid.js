// priority: 100
const { $IRaiderManager$RaidSpawnResult } = require("packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager$RaidSpawnResult")
const { GetColonyByEntity, CheckColonyOwner } = require("../../utils/colony")

// 该书本逻辑仅用于展示，实际游戏内应当不会涉及
// 原因：袭击并不能定义相关奖励
ItemEvents.entityInteracted('kubejs:raid_book', event => {
    let {target, player} = event
    if (target.type != 'minecolonies:citizen') return
    let colony = GetColonyByEntity(target)
    if (!CheckColonyOwner(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    } 
    if (!colony) return
    let result = colony.raiderManager.raiderEvent('', true, true)
    if (result != $IRaiderManager$RaidSpawnResult.SUCCESS) return
    event.item.shrink(1)
})