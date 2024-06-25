const $ColonyCrafter_ = 'alchemist_crafting' || 'baker_crafting' || 'baker_smelting' || 'blacksmith_crafting' || 'concretemixer_custom' || 'crusher_custom' || 'dyer_crafting' || 'enchanter_custom' || 'farmer_crafting' || 'fletcher_crafting' || 'lumberjack_custom' || 'mechanic_crafting' || 'netherworker_custom' || 'sifter_custom' || 'stonemason_crafting'
/**
 * 
 * @param {$ColonyCrafter_} crafter 
 * @param {$ItemStack_} resultItem 
 * @param {$ItemStack_[]} inputItems 
 */
function ColonyCraftRecipes(crafter, resultItem, inputItems) {
    this.type = 'recipe'
    this.crafter = crafter
    let inputs = []
    inputItems.forEach(inputItem => {
        inputs.push({ item: inputItem.id, count: inputItem.count })
    })
    this.inputs = inputs
    this.result = resultItem.id
    this.count = resultItem.count
}

ColonyCraftRecipes.prototype = {
    setIntermediate(intermediate) {
        this.intermediate = intermediate
    },
    setMinBuildingLevel(minBuildingLevel) {
        this['min-building-level'] = minBuildingLevel
    },
    setMaxBuildingLevel(maxBuildingLevel) {
        this['max-building-level'] = maxBuildingLevel
    },
    setResearchId(researchId, showTooltips) {
        this['research-id'] = researchId
        this['show-tooltips'] = showTooltips
    },
    setNotResearchId(researchId) {
        this['not-research-id'] = researchId
    },
    setLootTable(lootTable) {
        this['loot-table'] = lootTable
    }
}


ServerEvents.highPriorityData(event => {
    event.addJson(`kubejs:crafterrecipes/enchanter/scroll_maid.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('kubejs:scroll_maid'), [Item.of('minecraft:heart_of_the_sea'), Item.of('minecraft:rotten_flesh', 16)])
            .setResearchId('minecolonies:effects/scrollmaidunlock', true))

    event.addJson(`kubejs:crafterrecipes/enchanter/life_lantern.json`,
        new ColonyCraftRecipes('enchanter_custom', Item.of('arcanelanterns:life_lantern'), [Item.of('minecraft:soul_lantern'), Item.of('minecraft:soul_sand', 16)])
            .setResearchId('minecolonies:effects/usefullanterns', true))
})

