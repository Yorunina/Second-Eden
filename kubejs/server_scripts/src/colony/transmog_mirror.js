const { GetColonyByEntity, CheckColonyOwner, GetCitizenFromEntity } = require("../utils/colony")

ItemEvents.entityInteracted('kubejs:transmog_mirror', event => {
    let { entity, item, target } = event
    if (!entity.isPlayer()) return
    if (entity.isShiftKeyDown()) return

    if (target.isPlayer()) {
        let targetUUID = target.uuid.toString()
        let targetName = target.getUsername()
        if (item.nbt) {
            item.nbt['uuid'] = targetUUID
            item.nbt['name'] = targetName
        } else {
            item.setNbt({ 'uuid': NBT.stringTag(targetUUID) , 'name': NBT.stringTag(targetName)})
        }
    } else if (target.type == 'minecolonies:citizen') {
        if (!item.nbt || !item.nbt.getString('uuid')) return
        let citizen = GetCitizenFromEntity(target)
        let colony = GetColonyByEntity(target)
        if (!CheckColonyOwner(colony, entity)) {
            entity.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
            return
        }
        citizen.setCustomTexture(item.nbt.getString('uuid'))
    }
})

ItemEvents.rightClicked('kubejs:transmog_mirror', event => {
    let { entity, item } = event
    if (!entity.isPlayer()) return
    if (!entity.isShiftKeyDown()) return
    let targetUUID = entity.uuid.toString()
    let targetName = entity.getUsername()
    if (item.nbt) {
        item.nbt['uuid'] = targetUUID
        item.nbt['name'] = targetName
    } else {
        item.setNbt({ 'uuid': NBT.stringTag(targetUUID) , 'name': NBT.stringTag(targetName)})
    }
})

ItemEvents.firstLeftClicked('kubejs:transmog_mirror', event => {
    let { entity, item } = event
    if (!entity.isPlayer()) return
    if (!entity.isShiftKeyDown()) return
    if (item.nbt?.uuid) {
        item.nbt.remove('uuid')
    }
    if (item.nbt?.name) {
        item.nbt.remove('name')
    }
})