StartupEvents.registry('item', event => {
    event.create('echo_crystal', 'basic').texture('kubejs:item/echo_crystal')
    event.create('coal_coke', 'basic').burnTime(3200).texture('kubejs:item/coal_coke')
})