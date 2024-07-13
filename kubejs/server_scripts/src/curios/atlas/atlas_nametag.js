// priority: 500
ServerEvents.recipes(event => {
    event.shapeless('kubejs:common_atlas', ['kubejs:atlas_theme_nametag', '#curios:atlas'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let nametag = grid.find('kubejs:atlas_theme_nametag', 0)
            let atlas = grid.find('#curios:atlas', 0)
            stack = Item.of('minecraft:air')
            if (!nametag.hasNBT() || !nametag.nbt.contains('itemId') || nametag.nbt.getString('itemId') == atlas.id.toString()) {
                let theme = (nametag.hasNBT() && nametag.nbt.contains('theme')) ? nametag.nbt.getString('theme') : 'random'
                stack = atlas
                stack.nbt.merge({ 'theme': theme })
            }
            return stack
        })
})