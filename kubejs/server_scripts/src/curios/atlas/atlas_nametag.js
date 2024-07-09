// priority: 500
ServerEvents.recipes(event => {
    event.shapeless('kubejs:common_atlas', ['kubejs:atlas_theme_nametag', '#curios:atlas'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let nametag = grid.find('kubejs:atlas_theme_nametag', 0)
            let atlas = grid.find('#curios:atlas', 0)
            console.log(atlas)
            stack = Item.of('minecraft:air')
            if (nametag.nbt?.getString('itemId') == String(atlas.id) || !nametag.hasNBT() || !nametag.nbt?.contains('itemId')) {
                let theme = (nametag.hasNBT() && nametag.nbt.contains('theme')) ? nametag.nbt.getString('theme') : 'random'
                stack = atlas
                stack.nbt.merge({ 'theme': theme })
            }
            return stack
        })
})