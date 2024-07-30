// priority: 500

ItemEvents.rightClicked('trophymanager:trophy', event => {
    let { player, item, hand } = event
    player.tell(1)
    let anotherHand = hand == 'MAIN_HAND' ? 'OFF_HAND' : 'MAIN_HAND'
    let itemBase = player.getItemInHand(anotherHand)
    if (!itemBase || !itemBase.isBlock()) return
    player.tell(itemBase.id)
    if (item.hasNBT()) {
        item.nbt.merge({ 'BaseBlock': itemBase.id })
    }
})