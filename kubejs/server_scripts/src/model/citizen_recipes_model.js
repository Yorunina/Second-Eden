// priority: 1000
export const $ColonyCrafter_ = 'alchemist_crafting' || 'baker_crafting' || 'baker_smelting' || 'blacksmith_crafting' || 'concretemixer_custom' || 'crusher_custom' || 'dyer_crafting' || 'enchanter_custom' || 'farmer_crafting' || 'fletcher_crafting' || 'lumberjack_custom' || 'mechanic_crafting' || 'netherworker_custom' || 'sifter_custom' || 'stonemason_crafting'
/**
 * 
 * @param {$ColonyCrafter_} crafter 
 * @param {$ItemStack_} resultItem 
 * @param {$ItemStack_[]} inputItems 
 */
export function ColonyCraftRecipes(crafter, resultItem, inputItems) {
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
    /**
     * @param {$Block_} intermediate 
     * @returns {ColonyCraftRecipes}
     */
    setIntermediate(intermediate) {
        this.intermediate = intermediate
        return this
    },
    /**
     * @param {Number} minBuildingLevel 
     * @returns {ColonyCraftRecipes}
     */
    setMinBuildingLevel(minBuildingLevel) {
        this['min-building-level'] = minBuildingLevel
        return this
    },
    /**
     * @param {Number} maxBuildingLevel 
     * @returns {ColonyCraftRecipes}
     */
    setMaxBuildingLevel(maxBuildingLevel) {
        this['max-building-level'] = maxBuildingLevel
        return this
    },
    /**
     * @param {Number} researchId 
     * @param {Boolean} showTooltips
     * @returns {ColonyCraftRecipes}
     */
    setResearchId(researchId, showTooltips) {
        this['research-id'] = researchId
        this['show-tooltips'] = showTooltips
        return this
    },
    /**
     * @param {Number} researchId 
     * @returns {ColonyCraftRecipes}
     */
    setNotResearchId(researchId) {
        this['not-research-id'] = researchId
        return this
    },
    /**
     * @param {$LootTable_} researchId 
     * @returns {ColonyCraftRecipes}
     */
    setLootTable(lootTable) {
        this['loot-table'] = lootTable
        return this
    }
}
