// priority: 100
const { GetItemListFromPoolItems, GetThemePackFromPool, PopItemFromAirdrop } = require("../../utils/airdrop")

EntityEvents.death(event => {
    let { entity } = event
    if (entity.type.indexOf('airdrop') < 0) return
    let type = entity.persistentData.getString('type')
    if (!type) return
    if (!AirdropDeathStrategy[type]) return
    AirdropDeathStrategy[type](event)
})


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
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['newer'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'common': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['common'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'advanced': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['advanced'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'ultra': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['ultra'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'huge': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['huge'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'wood': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['wood'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'stone': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['stone'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'ore': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['ore'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
    'luxury': function (event) {
        let { level, entity } = event
        let fortune = entity.persistentData.getInt('fortune')
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['luxury'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
}