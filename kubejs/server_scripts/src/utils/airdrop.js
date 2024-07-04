// priority: 950
const { RandomGet, SliceChunkArray } = require('./common')
const { AirdropPoolItem } = require('../model/airdrop_pool_model')

/**
 * @param {AirdropPoolItem[]} poolItems
 * @param {Number} fortune
 * @returns {$ItemStack_[]}
 */
export function GetItemListFromPoolItems(poolItems, fortune) {
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
 * @param {string} theme
 * @returns {$ItemStack_[]}
 */
export function GetThemePackFromPool(poolMap, theme) {  
    if (!theme || theme == 'random' || !poolMap.has(theme)) {
        let keys = Array.from(poolMap.keys())
        let randomKey = RandomGet(keys)
        return poolMap.get(randomKey)
    } else {
        return poolMap.get(theme)
    }
}


/**
 * @param {$Level_} level 
 * @param {$LivingEntity_} entity
 * @param {$ItemStack_} itemList 
 */
export function PopItemFromAirdrop(level, entity, itemList) {
    /**@type {$ItemStack_[][]} */
    let itemChunks = SliceChunkArray(itemList, 10)
    let tickCounter = 5
    itemChunks.forEach(itemChunk => {
        level.server.scheduleInTicks(tickCounter, callback => {
            itemChunk.forEach(item => {
                entity.block.popItem(item)
            })
        })
        tickCounter = tickCounter + 10
    })
}