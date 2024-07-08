// priority: 100
const { GetItemListFromPoolItems, GetThemePackFromPool, PopItemFromAirdrop } = require("../../utils/airdrop")

EntityEvents.death(event => {
    let { entity } = event
    if (!entity.type.contains('airdrop')) return
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
        let theme = entity.persistentData.getString('theme')
        let itemPoolTheme = GetThemePackFromPool(global.AirdropPool['ultra'], theme)
        let itemList = GetItemListFromPoolItems(itemPoolTheme, fortune)
        PopItemFromAirdrop(level, entity, itemList)
    },
}