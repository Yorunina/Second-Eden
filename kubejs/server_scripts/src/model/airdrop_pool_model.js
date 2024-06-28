// priority: 1000
/**
 * 空投奖励池item
 * @param {$ItemStack_} itemId 
 */
export function AirdropPoolItem(itemId) {
    this.itemId = itemId
    this.minCount = 1
    this.maxCount = 1
    this.fortuneCoe = 0
    this.chance = 1
}
AirdropPoolItem.prototype = {
    /**
     * @param {Number} minCount 
     * @returns {AirdropPoolItem}
     */
    setMinCount: function (minCount) {
        this.minCount = minCount
        return this
    },
    /**
     * @param {Number} minCount 
     * @returns {AirdropPoolItem}
     */
    setMaxCount: function (maxCount) {
        this.maxCount = maxCount
        return this
    },
    /**
     * @param {Number} fortuneCoe 
     * @returns {AirdropPoolItem}
     */
    setFortuneCoe: function (fortuneCoe) {
        this.fortuneCoe = fortuneCoe
        return this
    },
    /**
     * @param {Number} chance 
     * @returns {AirdropPoolItem}
     */
    setChance: function (chance) {
        this.chance = chance
        return this
    }
}