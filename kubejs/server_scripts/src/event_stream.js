// priority: 0
const { CuriosGetHurt } = require("./curios/strategy/get_hurt")
const { CuriosHurtOthers } = require("./curios/strategy/hurt_others")

/**
 * 事件流，用于某些事件的连续处理
 * 目前仅用作伤害事件的连续处理
 */

/**
 * 造成伤害总线，护甲结算前
 */
/**
 * @param {$LivingHurtEvent_} event 
 * @returns 
 */
global.LivingHurt = event => {
    CuriosHurtOthers(event)
}


/**
 * 受到伤害总线，伤判节点
 */
/**
 * @param {$LivingDamageEvent_} event
 * @returns 
 */
global.LivingDamage = event => {
    CuriosGetHurt(event)
}