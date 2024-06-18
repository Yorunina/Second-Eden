/**
 * 只有玩家能够装备
 * @param {Internal.ItemStack} item 
 * @param {Internal.SlotContext} slotContext 
 */
function onlyPlayerCanEquip(item, slotContext) {
    let entity = slotContext.entity()
    if (slotContext.entity().level.isClientSide()) return
    if (entity && entity.isPlayer()) return true
    return false
}