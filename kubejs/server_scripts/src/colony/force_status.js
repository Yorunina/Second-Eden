// priority: 100
const { GetCitizenFromEntity, GetColonyByEntity } = require("../utils/colony")

ItemEvents.entityInteracted('kubejs:force_work_alarm', event => {
    let { target, player, item } = event
    if (player.cooldowns.isOnCooldown(item)) return
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

    player.addItemCooldown(item, 20 * 10)
})


ItemEvents.entityInteracted('kubejs:emotion_block_bell', event => {
    let { target, player, item } = event
    if (player.cooldowns.isOnCooldown(item)) return
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)

    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }

    if (colony.getDisableMourn()) {
        player.setStatusMessage(Text.translatable('msg.emotion_block_bell.stop.1').gold())
        colony.setDisableMourn(false)
    } else {
        player.setStatusMessage(Text.translatable('msg.emotion_block_bell.start.1').gold())
        colony.setDisableMourn(true)
    }

    player.addItemCooldown(item, 20 * 10)
})


ItemEvents.entityInteracted('kubejs:force_work_bell', event => {
    let { target, player, item } = event
    if (player.cooldowns.isOnCooldown(item)) return
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)

    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }

    if (colony.getUnderEmergencyProtocol()) {
        player.setStatusMessage(Text.translatable('msg.force_work_bell.stop.1').gold())
        colony.setUnderEmergencyProtocol(false)
    } else {
        player.setStatusMessage(Text.translatable('msg.force_work_bell.start.1').gold())
        colony.setUnderEmergencyProtocol(true)
    }

    player.addItemCooldown(item, 20 * 10)
})

ItemEvents.entityInteracted('kubejs:bind_armor_protocol', event => {
    let { target, player, item } = event
    if (player.cooldowns.isOnCooldown(item)) return
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

    player.addItemCooldown(item, 20 * 10)
})