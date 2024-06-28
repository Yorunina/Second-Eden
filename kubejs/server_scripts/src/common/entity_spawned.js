// priority: 500
EntityEvents.spawned(event => {
    let entity = event.entity
    if (entity.type == 'touhou_little_maid:fairy') {
        event.cancel()
    }
})