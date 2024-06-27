// priority: 900
/**
 * @param {$LivingDamageEvent_} event
 * @returns 
 */
export function CuriosGetHurt(event) {
    let { entity } = event
    let lazyOptCapability = entity.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curiosHandler = lazyOptCapability.resolve().get()
    curiosHandler.getEquippedCurios().getAllItems().forEach(/**@param {$ItemStack_} curios*/(curios) => {
        if (CuriosGetHurtStrategy[curios.id]) {
            CuriosGetHurtStrategy[curios.id](event, curios)
        }
    })
}


/**
 * 饰品受伤策略
 * @constant
 * @type {Object<string,function($LivingDamageEvent_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const CuriosGetHurtStrategy = {
    'kubejs:peaceful_ring': (event, curios) => {
        let source = event.source
        if (source.actual && source.actual.isPlayer()) {
            event.amount = event.amount * 0.1
        }
    },
}