// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ output: 'splat:splatter' })
    event.shaped('splat:splatter', ['SSS', 'SSD', '  I'], { S: 'splat:splat_scale', I: 'minecraft:ink_sac', D: 'minecraft:diamond' })

    event.shapeless(Item.of('minecraft:string', 4), [Ingredient.of('#minecraft:wool'), Ingredient.of('#forge:tools/knives')]).damageIngredient('#forge:tools/knives', 1)

    event.shaped('kubejs:friend_to_the_end', ['IRI', 'I I', 'III'], {
        I: 'minecraft:iron_ingot',
        R: 'minecraft:redstone',
    })
    event.shaped('kubejs:trophy_sword', ['  C', ' C ', 'D  '], {
        C: 'minecraft:copper_ingot',
        D: 'minecraft:diamond',
    })
    event.shaped('kubejs:magic_mirror', ['III', 'IDI', 'III'], {
        I: 'minecraft:iron_ingot',
        D: 'minecraft:diamond',
    })

    event.smithing('kubejs:sociality_atlas', 'kubejs:common_atlas', 'kubejs:common_atlas', 'kubejs:common_atlas')

    event.shapeless(Item.of('minecraft:clay_ball', 4), [Item.of('minecraft:clay', 1)])

    event.shapeless(Item.of('minecraft:book', 1), [Ingredient.of('#curios:atlas')])

    event.shaped('kubejs:rack_relate_wand', ['  R', ' S ', 'S  '], {
        S: 'minecraft:stick',
        R: 'minecraft:redstone_block',
    })
})
