// priority: 1000
export const $ColonyResearchBranch_ = 'minecolonies:technology' || 'minecolonies:combat' || 'minecolonies:civilian'
export const $ColonyBuilding_ = 'archery' || 'baker' || 'barracks' || 'barrackstower' || 'blacksmith' || 'builder' || 'chickenherder' || 'combatacademy' || 'composter' || 'cook' || 'cowboy' || 'crusher' || 'deliveryman' || 'farmer' || 'fisherman' || 'guardtower' || 'residence' || 'library' || 'lumberjack' || 'miner' || 'sawmill' || 'shepherd' || 'sifter' || 'smeltery' || 'stonemason' || 'stonesmeltery' || 'swineherder' || 'townhall' || 'warehouse' || 'postbox' || 'florist' || 'enchanter' || 'university' || 'hospital' || 'stash' || 'school' || 'glassblower' || 'dyer' || 'fletcher' || 'mechanic' || 'plantation' || 'tavern' || 'concretemixer' || 'rabbithutch' || 'beekeeper' || 'mysticalsite' || 'graveyard' || 'netherworker' || 'simplequarry' || 'mediumquarry' || 'largequarry' || 'alchemist'


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
    this.researchLevel = researchLevel
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
     * @param {Boolean} hidden 
     * @returns {ColonyResearchModel}
     */
    setHidden(hidden) {
        this.hidden = hidden
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
        this.sortOrder = sortOrder
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
    this.quantity = quantity
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

