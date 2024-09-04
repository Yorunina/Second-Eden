const { $PotionBuilder } = require("packages/dev/latvian/mods/kubejs/misc/$PotionBuilder")

StartupEvents.registry('mob_effect', event => {
    event.create('creative_builder')
        .beneficial()
        .color(0xFB8A00)
})


StartupEvents.registry('potion', event => {
    event.createCustom('kubejs:creative_builder', () => new $PotionBuilder('kubejs:my_potion').effect('kubejs:test', 300).createObject())
});
