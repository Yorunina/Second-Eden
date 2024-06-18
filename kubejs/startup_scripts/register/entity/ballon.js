StartupEvents.registry('entity_type', event => {
    event.create('airdrop_balloon', 'entityjs:living')
        .mobCategory('misc')
        .setRenderType('cutout')
        .sized(0.5, 0.5)
        .modelSize(1.2, 2)
        .updateInterval(1)
        .repositionEntityAfterLoad(true)
        .modelResource('kubejs:geo/airdrop_balloon.geo.json')
        .textureResource('kubejs:textures/entity/airdrop_balloon.png')
})
EntityJSEvents.attributes(event => {
    event.modify('airdrop_balloon', attribute => {
        attribute.add('minecraft:generic.max_health', 10)
        attribute.add('minecraft:generic.movement_speed', 0.0)
        attribute.add('minecraft:generic.attack_damage', 0.0)
    })
})