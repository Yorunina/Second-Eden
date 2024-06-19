/**
 * 只有玩家能够装备
 * @param {$ItemStack_} item 
 * @param {$SlotContext_} slotContext 
 * @returns {boolean}
 */
function onlyPlayerCanEquip(item, slotContext) {
    let entity = slotContext.entity()
    if (slotContext.entity().level.isClientSide()) return true
    if (entity && entity.isPlayer()) return true
    return false
}