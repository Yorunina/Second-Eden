// priority: 900
/**
 * @param {$LivingDamageEvent_} event
 * @returns 
 */
function CuriosPlayerTakeDamage(event) {
    let { player } = event
    let lazyOptCapability = player.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curiosHandler = lazyOptCapability.resolve().get()
    curiosHandler.getEquippedCurios().getAllItems().forEach(/**@param {$ItemStack_} curios*/(curios) => {
        if (CuriosPlayerTakeDamageStrategy[curios.id]) {
            CuriosPlayerTakeDamageStrategy[curios.id](event, curios)
        }
    })
}


/**
 * 饰品玩家受伤策略
 * @constant
 * @type {Object<string,function($LivingDamageEvent_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const CuriosPlayerTakeDamageStrategy = {
    'kubejs:peaceful_ring': (event, curios) => {
        let source = event.source
        if (source.actual && source.actual.isPlayer()) {
            event.cancel()
        }
    },
}