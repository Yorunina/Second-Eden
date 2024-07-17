const { GetCitizenFromEntity } = require("../utils/colony")

// priority: 100
ItemEvents.entityInteracted('kubejs:force_work_book', event => {
    let { target, player, item } = event
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)

    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }

    let citizen = GetCitizenFromEntity(target)

    if (citizen.getForceStatus() == 'guardLike') {
        player.setStatusMessage(Text.translatable('msg.force_work_book.stop.1').gold())
        citizen.setForceStatus('none')
    } else {
        player.setStatusMessage(Text.translatable('msg.force_work_book.start.1').gold())
        citizen.setForceStatus('guardLike')
    }
    
    player.addItemCooldown(item, 20 * 30)
})