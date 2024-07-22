const { $LivingDamageEvent } = require("packages/net/minecraftforge/event/entity/living/$LivingDamageEvent");
const { $LivingHurtEvent } = require("packages/net/minecraftforge/event/entity/living/$LivingHurtEvent");

/**
 * 使用ForgeEvent监听LivingHurtEvent事件
 * 用于替换原有EntityEvents.hurt事件
 */
ForgeEvents.onEvent($LivingHurtEvent, event => {
    global.LivingHurtEvent(event);
})


/**
 * 使用ForgeEvent监听LivingHurtEvent事件
 * 用于替换原有EntityEvents.hurt事件
 */
ForgeEvents.onEvent($LivingDamageEvent, event => {
    global.LivingDamageEvent(event);
})