// priority: 100
EntityEvents.death(event => {
    let { source } = event
    if (!source.actual) return
    let lazyOptCapability = source.actual.getCapability(CuriosCapabilities.INVENTORY)
    if (!lazyOptCapability.isPresent()) return
    let curiosHandler = lazyOptCapability.resolve().get()
    curiosHandler.getEquippedCurios().getAllItems().forEach(/**@param {$ItemStack_} curios*/(curios) => {
        if (CuriosEntityDeathStrategy[curios.id]) {
            CuriosEntityDeathStrategy[curios.id](event, curios)
        }
    })
})



/**
 * 饰品敌人死亡策略
 * @constant
 * @type {Object<string,function($LivingDamageEvent_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const CuriosEntityDeathStrategy = {

}