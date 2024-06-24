const { SliceChunkArray, RandomGet } = require("../utils/common")
EntityEvents.death('kubejs:airdrop_balloon', event => {
    let { entity } = event
    let type = entity.persistentData.getString('type')
    if (!AirdropDeathStrategy[type]) return
    AirdropDeathStrategy[type](event)
})

/**
 * @param {$Level_} level 
 * @param {$LivingEntity_} entity
 * @param {$ItemStack_} itemList 
 */
function popItemFromAirdrop(level, entity, itemList) {
    /**@type {$ItemStack_[][]} */
    let itemChunks = SliceChunkArray(itemList, 10)
    let tickCounter = 5
    itemChunks.forEach(itemChunk => {
        level.server.scheduleInTicks(tickCounter, callback => {
            itemChunk.forEach(item => {
                entity.block.popItemFromFace(item, Direction.UP)
            })
        })
        tickCounter = tickCounter + 10
    })
}

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

/**
 * @param {AirdropPoolItem[]} poolItems
 * @param {Number} fortune
 * @returns {$ItemStack_[]}
 */
function getItemListFromPoolItems(poolItems, fortune) {
    let itemStackList = []
    poolItems.forEach(poolItem => {
        if (Math.random() < poolItem.chance) return
        let randomCount = poolItem.minCount + Math.round(Math.random() * (poolItem.maxCount - poolItem.minCount))
        let realCount = randomCount + randomCount * fortune * poolItem.fortuneCoe
        // 数值安全范围
        if (realCount > 2048) realCount = 2048
        itemStackList.push(Item.of(poolItem.itemId, realCount))
    })
    return itemStackList
}


/**
 * 空投资源获取策略
 * @constant
 * @type {Object<string,function($LivingEntityDeathEventJS_):void>}
 * @returns {boolean}
 */
const AirdropDeathStrategy = {
    'newer': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let itemPoolTheme = RandomGet(NewerAirdropPool)
        let itemList = getItemListFromPoolItems(itemPoolTheme, fortune)
        popItemFromAirdrop(level, entity, itemList)
    },
}


const NewerAirdropPool = [
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