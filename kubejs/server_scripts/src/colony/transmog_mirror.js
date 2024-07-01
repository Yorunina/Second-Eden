const { GetColonyByEntity, CheckColonyOwner, GetCitizenFromEntity } = require("../utils/colony")

ItemEvents.entityInteracted('kubejs:transmog_mirror', event => {
    let { entity, item, target } = event
    if (!entity.isPlayer()) return
    if (entity.isShiftKeyDown()) return

    if (target.isPlayer()) {
        // 将玩家uuid刻入书本
        let targetUUID = target.uuid.toString()
        if (item.nbt) {
            item.nbt['uuid'] = targetUUID
        } else {
            item.setNbt({ 'uuid': NBT.stringTag(targetUUID) })
        }
    } else if (target.type == 'minecolonies:citizen') {
        if (!item.nbt || !item.nbt.getString('uuid')) return
        let citizen = GetCitizenFromEntity(target)
        let colony = GetColonyByEntity(target)
        citizen.setCustomTexture(item.nbt.getString('uuid'))
        if (!CheckColonyOwner(colony, entity)) {
            entity.status(Text.translatable('msg.player.common.not_colony_owner').gold())
            return
        }
    }
})

ItemEvents.rightClicked('kubejs:transmog_mirror', event => {
    let { entity, item } = event
    if (!entity.isPlayer()) return
    if (!entity.isShiftKeyDown()) return
    // 将玩家uuid刻入书本
    let targetUUID = entity.uuid.toString()
    if (item.nbt) {
        item.nbt['uuid'] = targetUUID
    } else {
        item.setNbt({ 'uuid': NBT.stringTag(targetUUID) })
    }
})