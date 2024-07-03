// priority: 500
// todo 测试主题tag是否有效
ServerEvents.recipes(event => {
    event.shapeless('kubejs:common_atlas', ['kubejs:atlas_theme_nametag', '#kubejs:atlas'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let nametag = grid.find('kubejs:atlas_theme_nametag', 0)
            let atlas = grid.find('#kubejs:atlas', 0)
            stack = Item.of('minecraft:air')
            if (nametag.nbt?.itemId == atlas.id && nametag.nbt?.theme) {
                stack = atlas.nbt.merge({ 'theme': nametag.nbt.getString('theme') })
            }
            return stack
        })
})