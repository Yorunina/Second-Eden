// priority: 500
// todo 测试主题tag是否有效
ServerEvents.recipes(event => {
    event.shapeless('kubejs:common_atlas', ['kubejs:atlas_theme_nametag', '#curios:atlas'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let nametag = grid.find('kubejs:atlas_theme_nametag', 0)
            let atlas = grid.find('#curios:atlas', 0)
            console.log(atlas)
            stack = Item.of('minecraft:air')
            // if (nametag.nbt?.itemId == String(atlas.id) && nametag.nbt?.theme) {
                stack = atlas
                stack.nbt.merge({ 'theme': nametag.nbt.getString('theme') })
            // }
            return stack
        })
})