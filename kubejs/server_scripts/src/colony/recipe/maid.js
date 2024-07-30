// priority: 500
const { ColonyCraftRecipes } = require("../../model/citizen_recipes_model")

ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/spawn_maid_box.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('kubejs:spawn_maid_box'), [Item.of('minecraft:totem_of_undying'), Item.of('minecraft:rotten_flesh', 16), Item.of('minecraft:armor_stand', 1)])
            .setResearchId('kubejs:effects/scrollmaidunlock', true))
})

ServerEvents.recipes(event => {
    // event.remove({ type: 'touhou_little_maid:altar_crafting' })

    event.shaped('touhou_little_maid:bookshelf', ['P P', 'PBP', 'PDP'], { P: Ingredient.of('#minecraft:planks'), B: Item.of('minecraft:book'), D: Item.of('minecraft:diamond') })

    event.shaped('touhou_little_maid:broom', ['H H', 'HEH', 'WWW'], { H: Item.of('minecraft:hay_block'), W: Ingredient.of('#forge:rods/wooden'), E: Item.of('minecraft:ender_eye') })

    event.shaped('touhou_little_maid:camera', ['QQQ', 'O O', 'QQQ'], { Q: Ingredient.of('#forge:storage_blocks/quartz'), O: Item.of('minecraft:obsidian') })

    event.shaped(Item.of('touhou_little_maid:chisel', 1, { Damage: 0 }), ['IWI', 'WYW', 'IWI'], { I: Ingredient.of('#forge:ingots/iron'), W: Ingredient.of('#forge:rods/wooden'), Y: Ingredient.of('#forge:dyes/yellow') })

    event.shaped('touhou_little_maid:computer', ['PPP', 'PDP', 'PNP'], { N: Item.of('minecraft:note_block'), P: Ingredient.of('#minecraft:planks'), D: Ingredient.of('#forge:gems/diamond') })

    event.shapeless('touhou_little_maid:crafting_table_backpack', ['touhou_little_maid:maid_backpack_middle', 'minecraft:crafting_table'])

    event.shapeless('touhou_little_maid:drown_protect_bauble', [Ingredient.of('#minecraft:fishes'), Ingredient.of('#forge:dyes/lime'), Ingredient.of('#forge:crops/nether_wart')])

    event.shapeless('touhou_little_maid:ender_chest_backpack', ['touhou_little_maid:maid_backpack_middle', 'minecraft:ender_chest'])

    event.shapeless(Item.of('touhou_little_maid:explosion_protect_bauble', 1, { Damage: 0 }), [Ingredient.of('#forge:obsidian'), Ingredient.of('#forge:obsidian'), Ingredient.of('#forge:dyes/orange'), Ingredient.of('#forge:crops/nether_wart')])

    event.shapeless(Item.of('touhou_little_maid:extinguisher', 1, { Damage: 0 }), [Ingredient.of('#forge:dyes/red'), Ingredient.of('#forge:ingots/iron'), Item.of('minecraft:clay_ball'), Item.of('minecraft:clay_ball')])

    event.shapeless(Item.of('touhou_little_maid:fall_protect_bauble', 1, { Damage: 0 }), [Ingredient.of('#forge:crops/nether_wart'), Ingredient.of('#forge:dyes/yellow'), Ingredient.of('#forge:feathers'), Ingredient.of('#forge:feathers')])

    event.shapeless(Item.of('touhou_little_maid:fire_protect_bauble', 1, { Damage: 0 }), [Ingredient.of('#forge:crops/nether_wart'), Ingredient.of('#forge:dyes/yellow'), Item.of('minecraft:blaze_powder'), Item.of('minecraft:blaze_powder')])

    event.shapeless(Item.of('touhou_little_maid:furnace_backpack', 1), [Item.of('touhou_little_maid:maid_backpack_middle'), Item.of('minecraft:furnace')])

    event.shaped('touhou_little_maid:gomoku', ['PPP', 'WDB', 'PPP'], { W: Ingredient.of('#forge:dyes/white'), P: Ingredient.of('#minecraft:planks'), B: Ingredient.of('#forge:dyes/black'), D: Ingredient.of('#forge:gems/diamond') })

    event.shapeless(Item.of('touhou_little_maid:item_magnet_bauble', 1), [Ingredient.of('#forge:dusts/redstone'), Ingredient.of('#forge:dusts/redstone'), Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:ingots/iron')])

    event.shapeless(Item.of('touhou_little_maid:kappa_compass', 1), [Ingredient.of('#forge:obsidian'), Ingredient.of('#forge:obsidian'), Ingredient.of('#forge:dyes/cyan'), Ingredient.of('#forge:dusts/redstone')])

    event.shaped('touhou_little_maid:keyboard', ['PDP', 'PNP', 'PDP'], { P: Ingredient.of('#minecraft:planks'), N: Item.of('minecraft:note_block'), D: Ingredient.of('#forge:gems/diamond') })

    event.shapeless(Item.of('touhou_little_maid:magic_protect_bauble', 1), [Ingredient.of('#forge:crops/nether_wart'), Ingredient.of('#forge:dyes/cyan'), Item.of('minecraft:sugar')])

    event.shaped('touhou_little_maid:maid_backpack_big', ['GGG', 'GDG', 'GGG'], { G: Item.of('minecraft:gray_wool'), D: Ingredient.of('#forge:gems/diamond') })

    event.shaped('touhou_little_maid:maid_backpack_middle', ['PPP', 'PDP', 'PPP'], { P: Item.of('minecraft:pink_wool'), D: Ingredient.of('#forge:gems/diamond') })

    event.shaped('touhou_little_maid:maid_backpack_small', ['RRR', 'RDR', 'RRR'], { R: Item.of('minecraft:red_wool'), D: Ingredient.of('#forge:gems/diamond') })

    event.shaped('touhou_little_maid:maid_beacon', ['POP', 'RDR', 'POP'], { P: Ingredient.of('#minecraft:planks'), R: Ingredient.of('#forge:dyes/red'), D: Ingredient.of('#forge:gems/diamond'), O: Ingredient.of('#forge:obsidian') })

    event.shaped('touhou_little_maid:maid_bed', ['   ', 'PPP', 'WWW'], { W: Item.of('minecraft:pink_wool'), P: Ingredient.of('#minecraft:planks') })

    event.shaped('touhou_little_maid:mute_bauble', ['   ', 'WWW', 'CCC'], { C: Item.of('minecraft:clay_ball'), W: Ingredient.of('#minecraft:wool') })

    event.shaped('touhou_little_maid:nimble_fabric', ['   ', 'WWW', 'EEE'], { E: Ingredient.of('#forge:ender_pearls'), W: Ingredient.of('#minecraft:wool') })

    event.shaped('touhou_little_maid:picnic_basket', [' W ', 'BCB', 'BBB'], { W: Ingredient.of('#minecraft:wool_carpets'), B: Item.of('minecraft:bamboo'), C: Ingredient.of('#forge:chests/wooden') })

    event.shapeless(Item.of('touhou_little_maid:projectile_protect_bauble', 1), [Ingredient.of('#forge:crops/nether_wart'), Ingredient.of('#forge:dyes/blue'), Item.of('minecraft:shield')])

    event.shapeless(Item.of('touhou_little_maid:red_fox_scroll', 1), [Ingredient.of('#forge:gems/diamond'), Ingredient.of('#forge:dyes/red'), Item.of('minecraft:paper')])

    event.shapeless(Item.of('touhou_little_maid:tank_backpack', 1), [Item.of('minecraft:bucket'), Item.of('touhou_little_maid:maid_backpack_middle')])

    event.shaped('touhou_little_maid:ultramarine_orb_elixir', ['CGC', 'GEG', 'CCC'], { C: Ingredient.of('#forge:dyes/cyan'), E: Ingredient.of('#forge:ender_pearls'), G: Ingredient.of('#forge:gems/emerald') })

    event.shapeless(Item.of('touhou_little_maid:white_fox_scroll', 1), [Ingredient.of('#forge:gems/diamond'), Ingredient.of('#forge:dyes/white'), Item.of('minecraft:paper')])

    event.shapeless(Item.of('touhou_little_maid:trumpet', 1), [Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:ingots/iron'), Ingredient.of('#forge:ingots/iron'), Item.of('minecraft:note_block')])

    event.shapeless(Item.of('touhou_little_maid:wireless_io', 1), [Ingredient.of('#forge:ender_pearls'), Ingredient.of('#forge:chests/wooden'), Item.of('minecraft:hopper')])

    event.shapeless(Item.of('touhou_little_maid:entity_placeholder', '{RecipeId:"touhou_little_maid:altar/spawn_lightning_bolt"}'), [Ingredient.of('#forge:gunpowder'), Item.of('minecraft:blaze_powder')])

    event.shapeless(Item.of('touhou_little_maid:photo'), [Item.of('touhou_little_maid:film'), Ingredient.of('#forge:gems/lapis'), Ingredient.of('#forge:ingots/gold'), Ingredient.of('#forge:dusts/redstone'), Ingredient.of('#forge:ingots/iron'), Item.of('minecraft:coal')])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let film = grid.find(`touhou_little_maid:film`, 0)
            if (!film.hasNBT()) return Item.of('minecraft:air')
            if (!film.nbt.contains('MaidInfo')) return Item.of('minecraft:air')
            let maidInfo = film.nbt.getCompound('MaidInfo')
            return Item.of('touhou_little_maid:photo', 1, { 'MaidInfo': maidInfo })
        })
})


