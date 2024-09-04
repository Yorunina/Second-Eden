const { $PotionBuilder } = require("packages/dev/latvian/mods/kubejs/misc/$PotionBuilder")

StartupEvents.registry('mob_effect', event => {
    event.create('creative_builder')
        .beneficial()
        .color(0xFB8A00)
})

StartupEvents.registry('potion', event => {
    event.createCustom('kubejs:creative_builder', () => new $PotionBuilder('kubejs:creative_builder').effect('kubejs:creative_builder', 6000).createObject())

    event.createCustom('kubejs:creative_builder_1', () => new $PotionBuilder('kubejs:creative_builder').effect('kubejs:creative_builder', 12000).createObject())

    event.createCustom('kubejs:creative_builder_2', () => new $PotionBuilder('kubejs:creative_builder').effect('kubejs:creative_builder', 24000).createObject())
});


MoreJSEvents.registerPotionBrewing(event => {
    event.addPotionBrewing('minecraft:sniffer_egg', 'kubejs:creative_builder', 'kubejs:creative_builder_1')
    event.addPotionBrewing('splat:splat_scale', 'kubejs:creative_builder_1', 'kubejs:creative_builder_2')
})