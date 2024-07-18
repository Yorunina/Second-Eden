// priority: 100
const { GetCitizenFromEntity } = require("../utils/colony")

// todo更换材质
ItemEvents.entityInteracted('kubejs:force_work_alarm', event => {
    let { target, player, item } = event
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)

    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }

    let citizen = GetCitizenFromEntity(target)

    if (citizen.getForceStatus() == 'guardLike') {
        player.setStatusMessage(Text.translatable('msg.force_work_alarm.stop.1').gold())
        citizen.setForceStatus('none')
    } else {
        player.setStatusMessage(Text.translatable('msg.force_work_alarm.start.1').gold())
        citizen.setForceStatus('guardLike')
    }
    
    player.addItemCooldown(item, 20 * 30)
})

// todo 没做完
ItemEvents.entityInteracted('kubejs:bind_armor_protocol', event => {
    let { target, player, item } = event
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)

    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }

    let citizen = GetCitizenFromEntity(target)

    if (citizen.getDisableTakeOffArmor()) {
        player.setStatusMessage(Text.translatable('msg.bind_armor_protocol.stop.1').gold())
        citizen.setDisableTakeOffArmor(false)
    } else {
        player.setStatusMessage(Text.translatable('msg.bind_armor_protocol.start.1').gold())
        citizen.setDisableTakeOffArmor(true)
    }
    
    player.addItemCooldown(item, 20 * 30)
})