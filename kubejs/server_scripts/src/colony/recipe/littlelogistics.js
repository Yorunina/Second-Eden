// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.recipes(event => {
    event.remove({ output: 'littlelogistics:chest_car' })
    event.remove({ output: 'littlelogistics:fishing_barge' })
    event.remove({ output: 'littlelogistics:tug_route' })
    event.remove({ output: 'littlelogistics:energy_tug' })
    event.remove({ output: 'littlelogistics:energy_locomotive' })
    event.remove({ output: 'littlelogistics:tug' })
    event.remove({ output: 'littlelogistics:fluid_barge' })
    event.remove({ output: 'littlelogistics:barge' })
    event.remove({ output: 'littlelogistics:seater_barge' })
    event.remove({ output: 'littlelogistics:fluid_car' })
    event.remove({ output: 'littlelogistics:seater_car' })
    event.remove({ output: 'littlelogistics:steam_locomotive' })
    event.remove({ output: 'littlelogistics:vessel_charger' })
})

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/mechanic/seater_car.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:seater_car'),
            [Item.of('minecraft:polished_deepslate', 12), Item.of('minecraft:iron_ingot', 4)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/fluid_barge.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:fluid_barge'),
            [Item.of('minecraft:polished_deepslate', 12), Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:glass', 6)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/fishing_barge.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:fishing_barge'),
            [Item.of('minecraft:polished_deepslate', 12), Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:fishing_rod', 3)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/barge.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:barge'),
            [Item.of('minecraft:polished_deepslate', 12), Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:chest', 3)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/seater_barge.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:seater_barge'),
            [Item.of('minecraft:polished_deepslate', 12), Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:composter', 3)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/tug.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:tug'),
            [Item.of('minecraft:polished_deepslate', 12), Item.of('minecraft:iron_ingot', 4), Item.of('minecraft:furnace', 1), Item.of('minecraft:piston', 2)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/chest_car.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:chest_car'),
            [Item.of('littlelogistics:seater_car', 1), Item.of('minecraft:chest', 1)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/fluid_car.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:fluid_car'),
            [Item.of('littlelogistics:seater_car', 1), Item.of('minecraft:glass', 3)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/steam_locomotive.json`,
        new ColonyCraftRecipes('mechanic_crafting',
            Item.of('littlelogistics:steam_locomotive'),
            [Item.of('littlelogistics:seater_car', 1), Item.of('minecraft:furnace', 1), Item.of('minecraft:piston', 2)])
            .setResearchId('kubejs:effects/littlelogisticsunlock', true))
})