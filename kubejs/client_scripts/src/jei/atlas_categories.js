const SlotSideLength = 18

JEIAddedEvents.registerCategories((event) => {
    event.custom('kubejs:atlas', (category) => {
        let guiHelper = category.jeiHelpers.guiHelper
        category.title(Text.translatable('jei.category.kubejs.atlas.name'))
            .background(guiHelper.createBlankDrawable(150, 160))
            .icon(guiHelper.createDrawableItemStack(Item.of('kubejs:newer_atlas')))
            .handleLookup((builder, recipe, focuses) => {
                handleLookupAtlas(category.jeiHelpers, builder, recipe, focuses)
            })
            .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
                drawHandlerAtlas(category.jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY);
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
function handleLookupAtlas(jeiHelpers, builder, recipe, focuses) {
    let guiHelper = jeiHelpers.getGuiHelper()
    builder.addSlot('input', 70, 0).addItemStack(recipe.data.atlas).setSlotName('atlas').setBackground(guiHelper.getSlotDrawable(), -1, -1)
    for (let i = 0; i < recipe.data.outputs.length; i++) {
        if (i > 63) break
        let poolItem = recipe.data.outputs[i]
        builder.addSlot('output', i % 8 * SlotSideLength + 5, Math.floor(i / 8) * SlotSideLength + 35)
            .addItemStack(Item.of(poolItem.itemId).withCount(poolItem.maxCount).withChance(poolItem.chance))
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
function drawHandlerAtlas(jeiHelpers, recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) {
    guiGraphics.drawWordWrap(Client.font, Text.translatable('jei.category.kubejs.atlas.word.1', theme), 5, 20, 150, 0)
}

JEIAddedEvents.registerRecipes((event) => {
    // 遍历类型map
    global.AtlasTypeMapping.forEach((value, key, map) => {
        // 遍历主题map，不忽略报错，以排查问题
        global.AirdropPool[value].forEach((poolValue, poolKey, poolMap) => {
            event.custom('kubejs:atlas')
                .add({ outputs: poolValue, atlas: Item.of(key), theme: poolKey})
        })
    })
})