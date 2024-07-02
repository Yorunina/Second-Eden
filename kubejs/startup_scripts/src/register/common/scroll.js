const { $EntityType } = require("packages/net/minecraft/world/entity/$EntityType");
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType");
const { $ForgeRegistries } = require("packages/net/minecraftforge/registries/$ForgeRegistries");

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
            level.runCommandSilent(`/summon touhou_little_maid:maid ${entity.x} ${entity.y} ${entity.z}`)
            return Item.of('air')
        })
})