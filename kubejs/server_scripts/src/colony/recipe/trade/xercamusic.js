// priority: 500
const { ColonyCraftRecipes } = require("../../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    // 乐器
    ['xercamusic:french_horn', 'xercamusic:god', 'xercamusic:redstone_guitar', 'xercamusic:flute', 'xercamusic:cello', 'xercamusic:bass_guitar', 'xercamusic:saxophone', 'xercamusic:sansula', 'xercamusic:lyre', 'xercamusic:cymbal', 'xercamusic:banjo', 'xercamusic:guitar', 'xercamusic:piano', 'xercamusic:violin', 'xercamusic:xylophone', 'xercamusic:drum_kit', 'xercamusic:oboe', 'xercamusic:tubular_bell'].forEach(item => {
        event.remove({ output: item })
    })
})


ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/sawmill/tubular_bell.json`,
        new ColonyCraftRecipes('sawmill_custom',
            Item.of('xercamusic:tubular_bell'),
            [Item.of('minecraft:stick', 4), Item.of('minecraft:gold_ingot', 3), Item.of('minecraft:honeycomb', 8)])
        .setMinBuildingLevel(2))

    event.addJson(`kubejs:crafterrecipes/blacksmith/oboe.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('xercamusic:oboe'),
            [Item.of('minecraft:iron_ingot', 4), Item.of('graveyard:dark_iron_ingot', 1), Item.of('minecraft:stick', 2)]))

    event.addJson(`kubejs:crafterrecipes/sawmill/drum_kit.json`,
        new ColonyCraftRecipes('sawmill_custom',
            Item.of('xercamusic:drum_kit'),
            [Item.of('xercamusic:drum', 3), Item.of('xercamusic:cymbal', 2)]))
})

