// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ mod: 'dimpaintings'})
    event.remove({ mod: 'waystones'})
    event.remove({ mod: 'arcanelanterns'})
    event.remove({ mod: 'immersive_aircraft'})
})