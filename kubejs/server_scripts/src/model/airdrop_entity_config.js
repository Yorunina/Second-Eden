// priority: 900

import { $ItemStack } from "packages/net/minecraft/world/item/$ItemStack"

global.AtlasTypeMapping = new Map()
    .set('kubejs:newer_atlas', 'newer')
    .set('kubejs:common_atlas', 'common')
    .set('kubejs:sociality_atlas', 'common')
    .set('kubejs:huge_atlas', 'advanced')
    .set('kubejs:advanced_atlas', 'advanced')
    // .set('kubejs:ultra_atlas', 'ultra')
    // .set('kubejs:wood_atlas', 'wood')
    // .set('kubejs:stone_atlas', 'stone')
    // .set('kubejs:ore_atlas', 'ore')
    // .set('kubejs:food_atlas', 'food')
    // .set('kubejs:luxury_atlas', 'luxury')
/**
 * 空投实体配置
 * @param {$ItemStack} atlasItem 
 */
export function AirdropEntityConfig(atlasItem) {
    this.type = global.AtlasTypeMapping.get(String(atlasItem.id))
    this.entityType = 'kubejs:airdrop_balloon'
    this.theme = (atlasItem.hasNBT() && atlasItem.nbt.contains('theme')) ? atlasItem.nbt.getString('theme') : 'random'
}
AirdropEntityConfig.prototype = {
    /**
     * @param {$EntityType_} entityType 
     * @returns {AirdropEntityConfig}
     */
    setEntityType: function (entityType) {
        this.entityType = entityType
        return this
    },
    /**
     * @param {string} theme 
     * @returns {AirdropEntityConfig}
     */
    setTheme: function (theme) {
        this.theme = theme
        return this
    },
    /**
     * @param {string} type 
     * @returns {AirdropEntityConfig}
     */
    setType: function (type) {
        this.type = type
        return this
    },
}