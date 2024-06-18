StartupEvents.registry('entity_type', event => {
    event.create('airdrop_balloon', 'entityjs:living')
        .mobCategory('misc')
        .setRenderType('cutout')
        .sized(1.2, 4.0)
        .updateInterval(1)
        .modelResource(() => 'kubejs:geo/airdrop_balloon.geo.json')
        .textureResource(() => 'kubejs:textures/entity/airdrop_balloon.png')
        .isPushable(true)
        .setSoundVolume(0)
        .onAddedToWorld(entity => {
            entity.setNoGravity(true)
        })
})

EntityJSEvents.attributes(event => {
    event.modify('airdrop_balloon', attribute => {
        attribute.add('minecraft:generic.max_health', 10)
        attribute.add('minecraft:generic.movement_speed', 0.0)
        attribute.add('minecraft:generic.attack_damage', 0.0)
    })
})