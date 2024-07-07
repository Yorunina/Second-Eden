// priority: 1000
LootJS.modifiers(event => {
    event.removeGlobalModifier("touhou_little_maid:power_point")
    event.removeGlobalModifier("touhou_little_maid:shrine")
})


ItemEvents.rightClicked('stick', event => {
    let {player, item} = event
    player.tell(item.id + (item.nbt ? item.nbtString : ''))
})