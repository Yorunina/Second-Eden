// priority: 900
/**
 * @param {$LivingHurtEvent_} event
 * @returns 
 */
export function CuriosHurtOthers(event) {
    let { source } = event
    if (!source.actual) return
    let sourceEntity = source.actual
    let lazyOptCapability = sourceEntity.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curiosHandler = lazyOptCapability.resolve().get()
    curiosHandler.getEquippedCurios().getAllItems().forEach(/**@param {$ItemStack_} curios*/(curios) => {
        if (CuriosHurtOthersStrategy[curios.id]) {
            CuriosHurtOthersStrategy[curios.id](event, curios)
        }
    })
}


/**
 * 饰品造成伤害策略
 * @constant
 * @type {Object<string,function($LivingHurtEvent_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const CuriosHurtOthersStrategy = {
    'kubejs:peaceful_ring': (event, curios) => {
        let {source, entity} = event
        if (source.actual && source.actual.isPlayer() && entity.isPlayer()) {
            event.amount = event.amount * 0.1
        }
    },
}