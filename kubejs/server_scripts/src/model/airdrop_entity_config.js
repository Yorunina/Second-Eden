// priority: 900
/**
 * 空投实体配置
 * @param {$ItemStack_} atlasItem 
 */
export function AirdropEntityConfig(atlasItem) {
    this.type = atlasItem.nbt?.getString('type') ? atlasItem.nbt?.getString('type') : global.AtlasTypeMapping.get(atlasItem.id)
    this.entityType = 'kubejs:airdrop_balloon'
    this.theme = atlasItem.nbt?.getString('theme') ? atlasItem.nbt?.getString('theme') : 'random'
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
}