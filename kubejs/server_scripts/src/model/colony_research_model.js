// priority: 1000
export const $ColonyResearchBranch_ = 'minecolonies:technology' || 'minecolonies:combat' || 'minecolonies:civilian'
export const $ColonyBuilding_ = 'townhall' || 'library' || 'cook' || 'graveyard' || 'school' || 'residence' || 'deliveryman' || 'hospital' || 'guardtower' || 'archery' || 'combatacademy' || 'smeltery' || 'barracks' || 'miner' || 'sawmill' || 'plantation' || 'crusher' || 'composter' || 'netherworker' || 'beekeeper' || 'fletcher' || 'enchanter' || 'fisherman' || 'blacksmith' || 'stonemason' || 'lumberjack' || 'baker' || 'mechanic' || 'alchemist'

export const $ColonyResearchRequirement_ = ItemRequirementModel || BuildingRequirementModel
/**
 * 
 * @param {$ColonyResearchBranch_} branch 
 * @param {Number} researchLevel 
 * @param {$ColonyResearchRequirement_[]} requirements 
 */
export function ColonyResearchModel(branch, researchLevel, requirements) {
    this.branch = branch
    this.requirements = requirements
    this.researchLevel = researchLevel.toFixed()
}

ColonyResearchModel.prototype = {
    /**
     * @param {Object[]} effects 
     * @returns {ColonyResearchModel}
     */
    setEffects(effects) {
        this.effects = effects
        return this
    },
    /**
     * @param {$ResourceLocation_} icon 
     * @returns {ColonyResearchModel}
     */
    setIcon(icon) {
        this.icon = icon
        return this
    },
    /**
     * @param {$ResourceLocation_} parentResearch 
     * @returns {ColonyResearchModel}
     */
    setParentResearch(parentResearch) {
        this.parentResearch = parentResearch
        return this
    },
    /**
     * @param {String} subtitle 
     * @returns {ColonyResearchModel}
     */
    setSubtitle(subtitle) {
        this.subtitle = subtitle
        return this
    },
    /**
     * @param {Number} sortOrder 
     * @returns {ColonyResearchModel}
     */
    setSortOrder(sortOrder) {
        this.sortOrder = sortOrder.toFixed()
        return this
    }
}


/**
 * 
 * @param {$ItemStack_[]} items 
 * @param {Number} quantity 
 */
export function ItemRequirementModel(items, quantity) {
    this.type = 'minecolonies:item_list'
    this.item = {
        'items': items
    }
    this.quantity = quantity.toFixed()
}

/**
 * 
 * @param {$ColonyBuilding_} building 
 * @param {Number} level 
 */
export function BuildingRequirementModel(building, level) {
    this.building = building
    this.level = level
}

