// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    // 奇点化
    event.addJson(`kubejs:crafterrecipes/alchemist/singulize_potion.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:singulize_potion'), [Item.of('graveyard:corruption', 24), Item.of('minecraft:nether_wart', 24), Item.of('minecraft:nether_star', 1)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_copper.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_copper'), [Item.of('minecraft:copper_ingot', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_iron.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_iron'), [Item.of('minecraft:iron_ingot', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_gold.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_gold'), [Item.of('minecraft:gold_ingot', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_netherite.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_netherite'), [Item.of('minecraft:netherite_ingot', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_diamond.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_diamond'), [Item.of('minecraft:diamond', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_emerald.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_emerald'), [Item.of('minecraft:emerald', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_amethyst.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_amethyst'), [Item.of('minecraft:amethyst_shard', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_prismarine.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_prismarine'), [Item.of('minecraft:prismarine_shard', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_quartz.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_quartz'), [Item.of('minecraft:quartz', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_lapis.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_lapis'), [Item.of('minecraft:lapis_lazuli', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_redstone.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_redstone'), [Item.of('minecraft:redstone', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_glowstone.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_glowstone'), [Item.of('minecraft:glowstone_dust', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    event.addJson(`kubejs:crafterrecipes/blacksmith/singularity_coal.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:singularity_coal'), [Item.of('minecraft:coal', 64)])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/singulize', true))

    // 无穷无尽多维理论
    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_disk', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('refinedstorage:silicon', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:storage_housing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_disk.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_disk', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('minecraft:glass', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:storage_housing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_storage_block.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_storage_block', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('refinedstorage:silicon', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:machine_casing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/creative_fluid_storage_block.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('refinedstorage:creative_fluid_storage_block', 1), [Item.of('refinedstorage:64k_storage_part', 64), Item.of('minecraft:glass', 64), Item.of('kubejs:echo_crystal', 16), Item.of('refinedstorage:machine_casing')])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/creativediskunlock', true))

    // 无限无线通讯协议
    event.addJson(`kubejs:crafterrecipes/enchanter/infinity_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:infinity_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:chorus_fruit', 64)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/dimension_card.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('rsinfinitybooster:dimension_card', 1), [Item.of('refinedstorage:network_card', 16), Item.of('kubejs:echo_crystal', 16), Item.of('minecraft:ender_eye', 32)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitywirelessaccess', true))

    // 中子素收集
    event.addJson(`kubejs:crafterrecipes/cursher/neutron_cobblestone.json`,
        new ColonyCraftRecipes('crusher_custom', Item.of('kubejs:neutron_pile', 1), [Item.of('minecraft:cobblestone', 32)])
            .setIntermediate('minecraft:air')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronpilesift', true))

    event.addJson(`kubejs:crafterrecipes/cursher/neutron_cobbled_deepslate.json`,
        new ColonyCraftRecipes('crusher_custom', Item.of('kubejs:neutron_pile', 1), [Item.of('minecraft:cobbled_deepslate', 16)])
            .setIntermediate('minecraft:air')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronpilesift', true))

    // 中子材料应用
    event.addJson(`kubejs:crafterrecipes/mechanic/neutron_sizing_machinery.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('kubejs:neutron_sizing_machinery'), [Item.of('kubejs:neutron_ingot', 1), Item.of('kubejs:iridium_ingot', 3), Item.of('immersive_aircraft:eco_engine', 8), Item.of('kubejs:singulize_potion', 1)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))


    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_helmet.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_helmet'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_chestplate.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_chestplate'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_leggings.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_leggings'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_boots.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_boots'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_sword.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_sword'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_pickaxe.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_pickaxe'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_axe.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_axe'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_hoe.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_hoe'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))
    event.addJson(`kubejs:crafterrecipes/blacksmith/neutron_shovel.json`,
        new ColonyCraftRecipes('blacksmith_crafting', Item.of('kubejs:neutron_shovel'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('sizing_machinery')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/neutronmaterialapplication', true))

    // 光速交易论坛
    event.addJson(`kubejs:crafterrecipes/mechanic/cash_register.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:cash_register'), [Item.of('minecraft:iron_ingot', 8), Item.of('kubejs:echo_crystal', 1), Item.of('lightmanscurrency:trading_core', 3)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/item_trader_server_sml.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:item_trader_server_sml'), [Item.of('minecraft:iron_ingot', 16), Item.of('kubejs:echo_crystal', 2), Item.of('minecraft:ender_chest', 1), Item.of('lightmanscurrency:trading_core', 3)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/item_trader_server_med.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:item_trader_server_med'), [Item.of('minecraft:iron_ingot', 16), Item.of('lightmanscurrency:item_trader_server_sml', 1), Item.of('kubejs:echo_crystal', 2), Item.of('minecraft:ender_chest', 1), Item.of('lightmanscurrency:trading_core', 3)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/item_trader_server_lrg.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:item_trader_server_lrg'), [Item.of('minecraft:iron_ingot', 32), Item.of('lightmanscurrency:item_trader_server_med', 1), Item.of('kubejs:echo_crystal', 4), Item.of('minecraft:ender_chest', 2), Item.of('lightmanscurrency:trading_core', 6)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/item_trader_server_lrg.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:item_trader_server_lrg'), [Item.of('minecraft:iron_ingot', 48), Item.of('lightmanscurrency:item_trader_server_med', 1), Item.of('kubejs:echo_crystal', 6), Item.of('minecraft:ender_chest', 3), Item.of('lightmanscurrency:trading_core', 9)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/item_trader_server_xlrg.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:item_trader_server_xlrg'), [Item.of('minecraft:iron_ingot', 64), Item.of('lightmanscurrency:item_trader_server_lrg', 1), Item.of('kubejs:echo_crystal', 8), Item.of('minecraft:ender_chest', 4), Item.of('lightmanscurrency:trading_core', 12)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/gem_terminal.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:gem_terminal'), [Item.of('amethyst_shard', 16), Item.of('kubejs:echo_crystal', 1), Item.of('lightmanscurrency:trading_core', 3)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/terminal.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:terminal'), [Item.of('minecraft:smooth_stone', 16), Item.of('kubejs:echo_crystal', 1), Item.of('lightmanscurrency:trading_core', 3)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    event.addJson(`kubejs:crafterrecipes/mechanic/item_trader_interface.json`,
        new ColonyCraftRecipes('mechanic_crafting', Item.of('lightmanscurrency:item_trader_interface'), [Item.of('lightmanscurrency:terminal', 1), Item.of('kubejs:echo_crystal', 4), Item.of('lightmanscurrency:trading_core', 9)])
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/lightspeedtradingforum', true))

    // 无尽催化剂
    event.addJson(`kubejs:crafterrecipes/alchemist/infinity_catalyst.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:infinity_catalyst'), [Item.of('kubejs:singularity_copper', 1), Item.of('kubejs:singularity_iron', 1), Item.of('kubejs:singularity_gold', 1), Item.of('kubejs:singularity_netherite', 1), Item.of('kubejs:singularity_diamond', 1), Item.of('kubejs:singularity_emerald', 1), Item.of('kubejs:singularity_amethyst', 1), Item.of('kubejs:singularity_prismarine', 1), Item.of('kubejs:singularity_quartz', 1), Item.of('kubejs:singularity_lapis', 1), Item.of('kubejs:singularity_redstone', 1), Item.of('kubejs:singularity_glowstone', 1), Item.of('kubejs:singularity_coal', 1),])
            .setTool('singulize_potion')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitycatalyst', true))

    // 无穷起源
    event.addJson(`kubejs:crafterrecipes/alchemist/item_trader_interface.json`,
        new ColonyCraftRecipes('alchemist_crafting', Item.of('kubejs:infinity_ingot'), [Item.of('kubejs:neutron_ingot', 1)])
            .setTool('infinity_catalyst')
            .setMinBuildingLevel(5)
            .setResearchId('kubejs:effects/infinitycatalyst', true))

})

