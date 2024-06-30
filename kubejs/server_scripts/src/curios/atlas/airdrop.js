// priority: 100
const { SliceChunkArray, RandomGet } = require("../../utils/common")
const { AirdropPoolItem } = require('../../model/airdrop_pool_model')

EntityEvents.death('kubejs:airdrop_balloon', event => {
    let { entity } = event
    let type = entity.persistentData.getString('type')
    if (!type) return
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
                console.log(item)
                entity.block.popItem(item)
            })
        })
        tickCounter = tickCounter + 10
    })
}


/**
 * @param {AirdropPoolItem[]} poolItems
 * @param {Number} fortune
 * @returns {$ItemStack_[]}
 */
function getItemListFromPoolItems(poolItems, fortune) {
    let itemStackList = []
    poolItems.forEach(poolItem => {
        if (Math.random() > poolItem.chance) return
        let randomCount = poolItem.minCount + Math.round(Math.random() * (poolItem.maxCount - poolItem.minCount))
        let realCount = randomCount + randomCount * fortune * poolItem.fortuneCoe
        // 数值安全范围
        if (realCount > 2048) realCount = 2048
        itemStackList.push(Item.of(poolItem.itemId, realCount))
    })
    return itemStackList
}

/**
 * @param {Map<string, AirdropPoolItem[]>} poolMap
 * @param {Number} fortune
 * @returns {$ItemStack_[]}
 */
function getRandomThemePackFromPool(poolMap) {
    let keys = Array.from(poolMap.keys())
    let randomKey = RandomGet(keys)
    return poolMap.get(randomKey)
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
        let itemPoolTheme = getRandomThemePackFromPool(global.AirdropPool['newer'])
        let itemList = getItemListFromPoolItems(itemPoolTheme, fortune)
        popItemFromAirdrop(level, entity, itemList)
    },
    'common': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let itemPoolTheme = getRandomThemePackFromPool(global.AirdropPool['common'])
        let itemList = getItemListFromPoolItems(itemPoolTheme, fortune)
        popItemFromAirdrop(level, entity, itemList)
    },
    'advanced': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let itemPoolTheme = getRandomThemePackFromPool(global.AirdropPool['common'])
        let itemList = getItemListFromPoolItems(itemPoolTheme, fortune)
        popItemFromAirdrop(level, entity, itemList)
    },
    'ultra': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let itemPoolTheme = getRandomThemePackFromPool(global.AirdropPool['common'])
        let itemList = getItemListFromPoolItems(itemPoolTheme, fortune)
        popItemFromAirdrop(level, entity, itemList)
    },
}