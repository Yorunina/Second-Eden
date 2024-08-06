// priority: 500

const { $TrophyBlock } = require("packages/cy/jdkdigital/trophymanager/common/block/$TrophyBlock")
const { $ForgeRegistries } = require("packages/net/minecraftforge/registries/$ForgeRegistries")

ItemEvents.rightClicked('trophymanager:trophy', event => {
    let { player, item, hand } = event
    let anotherHand = hand == 'MAIN_HAND' ? 'OFF_HAND' : 'MAIN_HAND'
    let itemBase = player.getItemInHand(anotherHand)
    if (!itemBase || !itemBase.isBlock()) return
    player.tell(itemBase)
    let itemLocation = itemBase.getIdLocation()
    let baseBlock = $ForgeRegistries.BLOCKS.getValue(itemLocation)
    if (item.hasNBT() && baseBlock) {
        item.nbt.merge({ 'BaseBlock': baseBlock.id })
    }
})

ItemEvents.entityInteracted('trophymanager:trophy', event => {
    let { player, item, target, hand } = event
    let itemTro = $TrophyBlock.createTrophy(target, target.getNbt())

    if (itemTro) {
        if (item.hasNBT() && itemTro.hasNBT() && item.nbt.contains('BaseBlock')) {
            itemTro.nbt.putString('BaseBlock', item.nbt.getString('BaseBlock'))
        }
        player.setItemInHand(hand, itemTro)
    }
})

LootJS.modifiers(event => {
    event.addLootTypeModifier(LootType.ENTITY)
        .matchEquip('mainhand', Item.of('kubejs:trophy_sword'))
        .apply(ctx => {
            let { entity } = ctx
            let itemTro = $TrophyBlock.createTrophy(entity, entity.getNbt())
            if (itemTro) {
                itemTro.nbt.putString('BaseBlock', 'minecraft:smooth_stone_slab')
                ctx.addLoot(itemTro)
            }
        }
    )
})