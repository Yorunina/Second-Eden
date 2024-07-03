// const { $EntityMaid } = require("packages/com/github/tartaricacid/touhoulittlemaid/entity/passive/$EntityMaid");
// const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType");

StartupEvents.registry('item', event => {
    event.create('scroll_maid').maxStackSize(1)
        .useAnimation('bow')
        .use((level, player, hand) => {
            return true;
        })
        .useDuration(itemStack => 20)
        .finishUsing((itemstack, level, entity) => {
            if (level.isClientSide()) return itemstack
            if (!entity.isPlayer()) return itemstack
            // global.ScrollMaidFinishUsing(itemstack, level, entity)
            level.runCommandSilent(`/summon touhou_little_maid:maid ${entity.x} ${entity.y} ${entity.z}`)
            return Item.of('air')
        })
})

// /**
//  * 
//  * @param {$ItemStack_} itemstack 
//  * @param {$Level_} level 
//  * @param {$LivingEntity_} entity 
//  */
// global.ScrollMaidFinishUsing = (itemstack, level, entity) => {
//     let spawnLocation = new BlockPos(entity.x, entity.y, entity.z)
//     let maidEntity = new $EntityMaid(level).finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
//     level.addFreshEntityWithPassengers(maidEntity)
// }