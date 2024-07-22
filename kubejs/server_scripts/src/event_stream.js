// priority: 0
const { $ColonyCreatedEvent } = require("packages/com/minecolonies/api/colony/event/$ColonyCreatedEvent")
const { CuriosGetHurt } = require("./curios/strategy/get_hurt")
const { CuriosHurtOthers } = require("./curios/strategy/hurt_others")
const { $ColonyInformationChangedEvent } = require("packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent")
const { ResearchCompletedQuest } = require("./colony/quest/research_complete")
const { BuildRequestCompletedQuest } = require("./colony/quest/build_request_completed")

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
global.LivingHurtEvent = event => {
    CuriosHurtOthers(event)
}

/**
 * 受到伤害总线，伤判节点
 */
/**
 * @param {$LivingDamageEvent_} event
 * @returns 
 */
global.LivingDamageEvent = event => {
    CuriosGetHurt(event)
}

/**
 * 殖民地创建事件总线
 */
/**
 * @param {$ColonyCreatedEvent} event
 * @returns 
 */
global.ColonyCreatedEvent = event => {

}

/**
 * 殖民地创建事件总线
 */
/**
 * @param {$ColonyInformationChangedEvent} event
 * @returns 
 */
global.ColonyBuildRequestCompletedEvent = event => {
    BuildRequestCompletedQuest(event)
}

/**
 * 殖民地创建事件总线
 */
/**
 * @param {$ColonyInformationChangedEvent} event
 * @returns 
 */
global.ColonyResearchCompletedEvent = event => {
    ResearchCompletedQuest(event)
}


