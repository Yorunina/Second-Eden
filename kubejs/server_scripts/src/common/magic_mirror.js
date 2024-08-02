// priority: 900

const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag");
const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer");
const { $SoundEvents } = require("packages/net/minecraft/sounds/$SoundEvents");

/**
 * 
 * @param {$ItemStack_} itemstack 
 * @param {$Level_} level 
 * @param {$ServerPlayer} entity 
 * @return {$ItemStack_}
 */
global.MagicMirrorFinishUsing = (itemstack, level, entity) => {
    /**@type {$ServerPlayer_} */
    let player = entity
    let nbt = new $CompoundTag()
    if (itemstack.hasNBT()) nbt = itemstack.nbt
    if (player.isShiftKeyDown()) {
        let playerPos = player.position()
        let playerPosCompound = new $CompoundTag()
        playerPosCompound.putDouble('x', playerPos.x())
        playerPosCompound.putDouble('y', playerPos.y() + 1)
        playerPosCompound.putDouble('z', playerPos.z())
        playerPosCompound.putString('dim', level.getDimension().toString())
        nbt.merge(playerPosCompound)
        itemstack.setNbt(nbt)
        player.setStatusMessage(Text.translatable('msg.item.magic_mirror.1', Number(playerPos.x()).toFixed(2), Number(playerPos.y()).toFixed(2), Number(playerPos.z()).toFixed(2)))
        player.addItemCooldown(itemstack.id, 20 * 10)
        return itemstack
    }
    /**@type {$CompoundTag} */
    if (!itemstack.hasNBT()) {
        player.setStatusMessage(Text.translatable('msg.item.magic_mirror.3'))
        return itemstack
    }
    let dimKey = new ResourceLocation(nbt.getString('dim'))
    let dim = Utils.getServer().getLevel(dimKey)
    player.teleportTo(dim, nbt.getDouble('x'), nbt.getDouble('y'), nbt.getDouble('z'), [], player.yaw, player.pitch)
    player.setStatusMessage(Text.translatable('msg.item.magic_mirror.2'))
    player.addItemCooldown(itemstack.id, 20 * 5)
    return itemstack
}