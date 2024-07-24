// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/blacksmith/emergency_evacuation_bell.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:emergency_evacuation_bell'),
            [Item.of('minecraft:copper_ingot', 4), Item.of('minecraft:bell', 1)])
            .setResearchId('kubejs:effects/eebunlock', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/force_work_alarm.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:force_work_alarm'),
            [Item.of('minecraft:redstone', 4), Item.of('minecraft:bell', 1)])
            .setResearchId('kubejs:effects/fwaunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/bind_armor_protocol.json`,
        new ColonyCraftRecipes('enchanter_custom',
            Item.of('kubejs:bind_armor_protocol'),
            [Item.of('minecraft:red_dye', 8), Item.of('minecraft:book', 1)])
            .setResearchId('kubejs:effects/bapunlock', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/force_work_bell.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:force_work_bell'),
            [Item.of('kubejs:steel_ingot', 4), Item.of('minecraft:red_dye', 1), Item.of('minecraft:bell', 1)])
            .setResearchId('kubejs:effects/fwbunlock', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/emotion_block_bell.json`,
        new ColonyCraftRecipes('blacksmith_crafting',
            Item.of('kubejs:emotion_block_bell'),
            [Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:gray_dye', 1), Item.of('minecraft:bell', 1)])
            .setResearchId('kubejs:effects/ebbunlock', true))
})