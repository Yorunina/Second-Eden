// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/mechanic/gauss_bullet.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:gauss_bullet', 16), [Item.of('kubejs:steel_ingot', 1), Item.of('minecraft:green_dye', 1)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/explosive_powder.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:explosive_powder', 16), [Item.of('minecraft:blaze_powder', 1), Item.of('minecraft:gunpowder', 1)])
            .setResearchId('kubejs:effects/kturrets', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/arrow_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:arrow_turret_item', 1), [Item.of('minecraft:dispenser', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:quartz_block', 3)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/brick_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:brick_turret_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:lapis_block', 3)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/cobble_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:cobble_turret_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:redstone_block', 3)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/firecharge_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:firecharge_turret_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:redstone_block', 3), Item.of('supplementaries:cog_block', 1)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/firecharge_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:firecharge_turret_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:redstone_block', 3), Item.of('supplementaries:cog_block', 1)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/bullet_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:bullet_turret_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:copper_block', 3)])
            .setResearchId('kubejs:effects/kturrets', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/gauss_turret_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:gauss_turret_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('minecraft:quartz_block', 3), Item.of('supplementaries:cog_block', 1)])
            .setResearchId('kubejs:effects/kturrets', true))


    event.addJson(`kubejs:crafterrecipes/mechanic/arrow_drone_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:arrow_drone_item', 1), [Item.of('minecraft:dropper', 1), Item.of('kubejs:steel_block', 1), Item.of('immersive_aircraft:quadrocopter', 1)])
            .setResearchId('kubejs:effects/kdrones', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/firecharge_drone_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:firecharge_drone_item', 1), [Item.of('minecraft:dropper', 1), Item.of('minecraft:redstone_block', 1), Item.of('immersive_aircraft:quadrocopter', 1)])
            .setResearchId('kubejs:effects/kdrones', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/cobble_drone_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:cobble_drone_item', 1), [Item.of('minecraft:dropper', 1), Item.of('minecraft:lapis_block', 1), Item.of('immersive_aircraft:quadrocopter', 1)])
            .setResearchId('kubejs:effects/kdrones', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/bullet_drone_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:bullet_drone_item', 1), [Item.of('minecraft:dropper', 1), Item.of('minecraft:copper_block', 1), Item.of('immersive_aircraft:quadrocopter', 1)])
            .setResearchId('kubejs:effects/kdrones', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/brick_drone_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:brick_drone_item', 1), [Item.of('minecraft:dropper', 1), Item.of('minecraft:bricks', 1), Item.of('immersive_aircraft:quadrocopter', 1)])
            .setResearchId('kubejs:effects/kdrones', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/gauss_drone_item.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('k_turrets:gauss_drone_item', 1), [Item.of('minecraft:dropper', 1), Item.of('supplementaries:cog_block', 1), Item.of('immersive_aircraft:quadrocopter', 1)])
            .setResearchId('kubejs:effects/kdrones', true))
})



ServerEvents.recipes(event => {
    event.remove({ output: 'k_turrets:gauss_bullet' })
    event.remove({ output: 'k_turrets:wrench' })
    event.remove({ output: 'k_turrets:cobble_turret_item' })
    event.remove({ output: 'k_turrets:cobble_drone_item' })
    event.remove({ output: 'k_turrets:firecharge_drone_item' })
    event.remove({ output: 'k_turrets:arrow_drone_item' })
    event.remove({ output: 'k_turrets:bullet_drone_item' })
    event.remove({ output: 'k_turrets:brick_drone_item' })
    event.remove({ output: 'k_turrets:gauss_drone_item' })
    event.remove({ output: 'k_turrets:firecharge_turret_item' })
    event.remove({ output: 'k_turrets:brick_turret_item' })
    event.remove({ output: 'k_turrets:bullet_turret_item' })
    event.remove({ output: 'k_turrets:gauss_turret_item' })
    event.remove({ output: 'k_turrets:arrow_turret_item' })
    event.remove({ output: 'k_turrets:explosive_powder' })

    event.shaped('k_turrets:wrench', ['S S', 'SSS', ' S '], { S: 'kubejs:steel_ingot' })
})

