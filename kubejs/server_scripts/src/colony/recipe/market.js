// priority: 500
const { ColonyCraftRecipes } = require('../../model/citizen_recipes_model')

ServerEvents.recipes(event => {
    event.remove({ output: 'lightmanscurrency:coinmint' })

    event.remove({ output: 'lightmanscurrency:trading_core' })

    event.remove({ output: 'lightmanscurrency:auction_stand_dark_oak' })
    event.remove({ output: 'lightmanscurrency:auction_stand_bamboo' })
    event.remove({ output: 'lightmanscurrency:auction_stand_cherry' })
    event.remove({ output: 'lightmanscurrency:auction_stand_crimson' })
    event.remove({ output: 'lightmanscurrency:auction_stand_spruce' })
    event.remove({ output: 'lightmanscurrency:auction_stand_jungle' })
    event.remove({ output: 'lightmanscurrency:auction_stand_mangrove' })
    event.remove({ output: 'lightmanscurrency:auction_stand_oak' })
    event.remove({ output: 'lightmanscurrency:auction_stand_acacia' })
    event.remove({ output: 'lightmanscurrency:auction_stand_birch' })
    event.remove({ output: 'lightmanscurrency:auction_stand_warped' })

    event.remove({ output: 'lightmanscurrency:item_trader_server_sml' })
    event.remove({ output: 'lightmanscurrency:item_trader_server_med' })
    event.remove({ output: 'lightmanscurrency:item_trader_server_lrg' })
    event.remove({ output: 'lightmanscurrency:item_trader_server_xlrg' })
    event.remove({ output: 'lightmanscurrency:cash_register' })
    event.remove({ output: 'lightmanscurrency:portable_gem_terminal' })
    event.remove({ output: 'lightmanscurrency:gem_terminal' })
    event.remove({ output: 'lightmanscurrency:portable_terminal' })
    event.remove({ output: 'lightmanscurrency:item_trader_interface' })

    event.remove({ output: 'lightmanscurrency:paygate' })
    event.remove({ output: 'lightmanscurrency:tax_block' })
    event.remove({ output: 'lightmanscurrency:ticket_machine' })
    event.remove({ output: 'lightmanscurrency:slot_machine' })
    event.remove({ output: 'lightmanscurrency:ticket_kiosk' })

})


ServerEvents.highPriorityData(event => {
    // 初级经济学
    event.addJson(`kubejs:crafterrecipes/enchanter/trading_core.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('lightmanscurrency:trading_core'), [Item.of('minecraft:iron_ingot'), Item.of('minecraft:gold_ingot')])
            .setResearchId('kubejs:effects/introeconomics', true))

    // 铸币
    event.addJson(`kubejs:crafterrecipes/mechanic/coinmint.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:coinmint'), [Item.of('minecraft:iron_ingot'), Item.of('minecraft:gold_ingot')])
            .setResearchId('kubejs:effects/coinageunlock', true))

    // 中级经济学
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_dark_oak.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_dark_oak'), [Item.of('minecraft:dark_oak_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_bamboo.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_bamboo'), [Item.of('minecraft:bamboo_block', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_cherry.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_cherry'), [Item.of('minecraft:cherry_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_crimson.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_crimson'), [Item.of('minecraft:crimson_stem', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_spruce.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_spruce'), [Item.of('minecraft:spruce_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_jungle.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_jungle'), [Item.of('minecraft:jungle_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_mangrove.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_mangrove'), [Item.of('minecraft:mangrove_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_oak.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_oak'), [Item.of('minecraft:oak_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_acacia.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_acacia'), [Item.of('minecraft:acacia_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_birch.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_birch'), [Item.of('minecraft:birch_log', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
    event.addJson(`kubejs:crafterrecipes/mechanic/auction_stand_warped.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:auction_stand_warped'), [Item.of('minecraft:warped_stem', 3), Item.of('minecraft:glass', 8), Item.of('lightmanscurrency:trading_core')])
            .setResearchId('kubejs:effects/intermedeconomics', true))
})