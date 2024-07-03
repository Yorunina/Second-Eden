// priority: 1000
// 用于同步管理JEI中显示
export const AtlasTypeMapping = new Map()
AtlasTypeMapping.set('kubejs:newer_atlas', 'newer')
AtlasTypeMapping.set('kubejs:common_altas', 'common')
AtlasTypeMapping.set('kubejs:advanced_atlas', 'advanced')
AtlasTypeMapping.set('kubejs:ultra_atlas', 'ultra')
AtlasTypeMapping.set('kubejs:wood_atlas', 'wood')
AtlasTypeMapping.set('kubejs:stone_atlas', 'stone')
AtlasTypeMapping.set('kubejs:ore_atlas', 'ore')
AtlasTypeMapping.set('kubejs:food_atlas', 'food')
AtlasTypeMapping.set('kubejs:luxury_atlas', 'luxury')
AtlasTypeMapping.set('kubejs:huge_atlas', 'advanced')
AtlasTypeMapping.set('kubejs:sociality_atlas', 'common')


/**@type {Map} */
global.AtlasTypeMapping = AtlasTypeMapping