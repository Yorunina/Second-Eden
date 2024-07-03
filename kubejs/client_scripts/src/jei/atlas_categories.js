const SlotSideLength = 18

JEIAddedEvents.registerCategories((event) => {
    event.custom('kubejs:atlas', (category) => {
        let guiHelper = category.jeiHelpers.guiHelper
        category.title(Text.translatable('jei.category.kubejs.atlas.name'))
            .background(guiHelper.createBlankDrawable(150, 160))
            .icon(guiHelper.createDrawableItemStack(Item.of('kubejs:newer_atlas')))
            .isRecipeHandled((recipe) => {
                return true
            })
            .handleLookup((builder, recipe, focuses) => {
                global.HandleLookupAtlasRecipe(category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                global.DrawHandlerAtlasRecipe(category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
            })
    })
})

/**
 * 定义JEI展示的信息
 * @param {$IJeiHelpers_} jeiHelpers 
 * @param {$IRecipeLayoutBuilder_} builder 
 * @param {$CustomJSRecipe_} recipe 
 * @param {$IFocusGroup_} focuses 
 */
global.HandleLookupAtlasRecipe = (jeiHelpers, builder, recipe, focuses) => {
    let guiHelper = jeiHelpers.getGuiHelper()
    builder.addSlot('input', 70, 0).setSlotName('atlas').addItemStack(Item.of(recipe.data.atlas)).setBackground(guiHelper.getSlotDrawable(), -1, -1)
    for (let i = 0; i < recipe.data.outputs.length; i++) {
        if (i > 63) break
        let poolItem = recipe.data.outputs[i]
        builder.addSlot('output', i % 8 * SlotSideLength + 5, Math.floor(i / 8) * SlotSideLength + 35)
            .addItemStack(Item.of(poolItem.itemId).withCount(poolItem.maxCount))
            .setBackground(guiHelper.getSlotDrawable(), -1, -1)
    }
}

/**
 * 界面额外渲染信息
 * @param {$IJeiHelpers_} jeiHelpers 
 * @param {$CustomJSRecipe_} recipe 
 * @param {$IRecipeSlotsView_} recipeSlotsView 
 * @param {$GuiGraphics_} guiGraphics 
 * @param {Number} mouseX 
 * @param {Number} mouseY 
 */
global.DrawHandlerAtlasRecipe = (jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
    guiGraphics.drawWordWrap(Client.font, Text.translatable('jei.category.kubejs.atlas.word.1', recipe.data.theme), 5, 20, 150, 0)
}

JEIAddedEvents.registerRecipes((event) => {
    // 遍历类型map
    global.AtlasTypeMapping.forEach((value, key, map) => {
        global.AirdropPool[value].forEach((poolValue, poolKey, poolMap) => {
            event.custom('kubejs:atlas').add({ outputs: poolValue, atlas: key, theme: poolKey })
        })
    })
})