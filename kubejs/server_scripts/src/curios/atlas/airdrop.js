// priority: 100
const { GetItemListFromPoolItems, GetThemePackFromPool, PopItemFromAirdrop } = require("../../utils/airdrop")
const { SliceChunkArray } = require("../../utils/common")

EntityEvents.death(event => {
    let { entity, level, source } = event
    if (entity.type.indexOf('airdrop') < 0 || !source.getActual()) return
    let type = entity.persistentData.getString('type')
    if (!type) return
    if (!AirdropDeathStrategy[type]) return
    let itemList = AirdropDeathStrategy[type](entity)
    if (!itemList) return
    PopItemFromAirdrop(level, entity, itemList)
})

/**
 * 
 * @param {$Player_} player 
 * @param {$LivingEntity_} entity 
 * @returns 
 */
global.AirdropGetDrop = (player, entity) => {
    let type = entity.persistentData.getString('type')
    if (!type) return
    if (!AirdropDeathStrategy[type]) return
    let itemList = AirdropDeathStrategy[type](entity)
    if (!itemList) return
    /**@type {$ItemStack_[][]} */
    let itemChunks = SliceChunkArray(itemList, 10)
    let tickCounter = 5
    itemChunks.forEach(itemChunk => {
        entity.server.scheduleInTicks(tickCounter, callback => {
            itemChunk.forEach(item => {
                player.give(item)
            })
        })
        tickCounter = tickCounter + 10
    })
}


/**
 * 空投资源获取策略
 * @constant
 * @type {Object<string,function($LivingEntity):$ItemStack_[]>}
 */
const AirdropDeathStrategy = {
    'newer': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['newer'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'common': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['common'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'advanced': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['advanced'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'ultra': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['ultra'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'huge': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['huge'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'wood': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['wood'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'stone': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['stone'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'ore': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['ore'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
    'luxury': function (entity) {
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['luxury'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        return itemList
    },
}