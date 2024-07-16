const { GetColonyByEntity } = require("../../utils/colony")

ItemEvents.entityInteracted('kubejs:emergency_evacuation_bell', event => {
    let { target, player, item } = event
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)

    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    } 
    
    let raiderManager = colony.getRaiderManager()
    if (raiderManager.getPassThroughRaidTime() > player.level.getTime()) {
        player.setStatusMessage(Text.translatable('msg.emergency_evacuation_bell.stop.1').gold())
        colony.getRaiderManager().setPassThroughRaidTime(20 * 5)
    } else {
        player.setStatusMessage(Text.translatable('msg.emergency_evacuation_bell.start.1').gold())
        colony.getRaiderManager().setPassThroughRaidTime(20 * 60 * 20)
    }
    player.addItemCooldown(item, 20 * 30)
})