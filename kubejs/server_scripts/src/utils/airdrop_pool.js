// priority: 1000
/**
 * 空投奖励池item
 * @param {$ItemStack_} itemId 
 */
function AirdropPoolItem(itemId) {
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

export const NewerAirdropPool = [
    [
        new AirdropPoolItem('minecolonies:supplycampdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    ],
    [
        new AirdropPoolItem('minecolonies:supplychestdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:sponge').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    ]
]


export const CommonAirdropPool = [
    [
        new AirdropPoolItem('minecolonies:supplycampdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    ],
    [
        new AirdropPoolItem('minecolonies:supplychestdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:sponge').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
        new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
        new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    ]
]

