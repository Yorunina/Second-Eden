// priority: 1000
ServerEvents.recipes(event => {
    event.shaped('kubejs:infinity_ingot', ['NNN', 'NNN', 'NNN'], {
        N: 'kubejs:infinity_nugget'
    })
    event.shapeless(Item.of('kubejs:infinity_nugget', 9), ['kubejs:infinity_ingot'])


    event.shaped('kubejs:neutron_ingot', ['NNN', 'NNN', 'NNN'], {
        N: 'kubejs:neutron_nugget'
    })
    event.shapeless(Item.of('kubejs:neutron_nugget', 9), ['kubejs:neutron_ingot'])

    
    event.shaped('kubejs:neutron_nugget', ['PPP', 'PPP', 'PPP'], {
        P: 'kubejs:neutron_pile'
    })
    event.shapeless(Item.of('kubejs:neutron_pile', 9), ['kubejs:neutron_nugget'])
})