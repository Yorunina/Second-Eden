// priority: 0
/**
 * 事件流，用于某些事件的连续处理
 * 目前仅用作伤害事件的连续处理
 */

/**
 * 玩家造成伤害总线，玩家造成伤害需要在护甲计算前结算
 */
/**
 * @param {$LivingHurtEvent_} event 
 * @returns 
 */
global.LivingHurtByPlayer = event => {
    let player = event.source.player
    if (!player) return;

}

/**
 * 玩家受到伤害总线，实际伤害计算节点
 */
/**
 * @param {$LivingDamageEvent_} event
 * @returns 
 */
global.LivingDamageByOthers = event => {

}


/**
 * 玩家受到伤害总线，伤判节点
 */
/**
 * @param {$LivingDamageEvent_} event
 * @returns 
 */
global.LivingHurtByOthers = event => {
    CuriosPlayerTakeDamage(event)
}