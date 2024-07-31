// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/custom_raid_book.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('kubejs:custom_raid_book'), [Item.of('minecolonies:ancienttome', 1), Item.of('minecraft:glow_ink_sac', 8), Item.of('minecraft:echo_shard', 3)])
            .setResearchId('kubejs:effects/summonraid', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/zombie_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:zombie_orb'), [Item.of('minecraft:rotten_flesh', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/primarysouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/skeleton_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:skeleton_orb'), [Item.of('minecraft:bone', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/primarysouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/creeper_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:creeper_orb'), [Item.of('minecraft:gunpowder', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/primarysouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/cave_spider_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:cave_spider_orb'), [Item.of('minecraft:spider_eye', 4), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/advancedsouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/blaze_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:blaze_orb'), [Item.of('minecraft:blaze_rod', 4), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/advancedsouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/husk_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:husk_orb'), [Item.of('minecraft:rotten_flesh', 16), Item.of('minecraft:sand', 4), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/advancedsouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/wither_skeleton_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:wither_skeleton_orb'), [Item.of('minecraft:wither_rose', 1), Item.of('minecraft:coal', 4), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/advancedsouls', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/pillager_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:pillager_orb'), [Item.of('minecraft:crossbow', 1), Item.of('minecraft:emerald', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/ravager_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:ravager_orb'), [Item.of('minecraft:saddle', 1), Item.of('minecraft:emerald', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/evoker_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:evoker_orb'), [Item.of('minecraft:book', 1), Item.of('minecraft:emerald', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/vindicator_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:vindicator_orb'), [Item.of('minecraft:iron_axe', 1), Item.of('minecraft:emerald', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/archer_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:archer_orb'), [Item.of('minecraft:bow', 1), Item.of('minecraft:emerald', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/legioner_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:legioner_orb'), [Item.of('minecraft:shield', 1), Item.of('minecraft:emerald', 16), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/skirmisher_orb.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:skirmisher_orb'), [Item.of('minecraft:iron_axe', 1), Item.of('minecraft:emerald', 16), Item.of('minecraft:leather_boots', 1), Item.of('strawstatues:straw_statue', 1), Item.of('minecraft:slime_ball', 1)])
            .setResearchId('kubejs:effects/pillagersoul', true))

    event.addJson(`kubejs:crafterrecipes/alchemist/undead_raid_book.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:undead_raid_book'), [Item.of('kubejs:custom_raid_book'), Item.of('graveyard:corruption', 16)])
            .setResearchId('kubejs:effects/undeadraid', true))
})