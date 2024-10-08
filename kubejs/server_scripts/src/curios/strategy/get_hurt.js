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
            CuriosGetHurtStrategy[curios.id](event, curiosHandler, curios)
        }
    })
}


/**
 * 饰品受伤策略
 * @constant
 * @type {Object<string,function($LivingDamageEvent_, $ICuriosItemHandler_, $ItemStack_):void>}
 * @returns {$BlockPos_}
 */
const CuriosGetHurtStrategy = {
    'kubejs:peaceful_ring': (event, curiosHandler, curios) => {
        let { source, entity } = event
        if (source.actual && source.actual.isPlayer() && entity.isPlayer()) {
            event.amount = event.amount * 0.1
        }
    },
    'kubejs:friend_to_the_end': function (event, curiosHandler, curios) {
        let { entity } = event
        if (entity.getHealth() - event.amount > 0) return
        if (curios.hasNBT() && curios.nbt.friendName) {
            let friend = Utils.getServer().getPlayer(curios.nbt.friendName)
            if (friend && friend.isLiving()) {
                let dim = Utils.getServer().getLevel(friend.level.getDimension())
                curios.setCount(0)
                entity.teleportTo(dim, friend.x, friend.y, friend.z, [], entity.yaw, entity.pitch)
                entity.tell(Text.translatable('msg.curios.friend_to_the_end.3').gray())
                entity.setHealth(1)
                event.amount = 0
            }
        }
    },
}