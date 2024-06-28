// priority: 1000
/**
 * 空投实体配置
 * @param {string} type 
 */
export function AirdropEntityConfig(type) {
    this.type = type
    this.entityType = 'kubejs:airdrop_balloon'
}
AirdropEntityConfig.prototype = {
    /**
     * @param {$EntityType_} entityType 
     * @returns {AirdropEntityConfig}
     */
    setEntityType: function (entityType) {
        this.entityType = entityType
        return this
    }
}