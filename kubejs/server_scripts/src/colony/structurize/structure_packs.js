// priority: 100

const { $Blueprint } = require("packages/com/ldtteam/structurize/blueprints/v1/$Blueprint");
const { $StructurePacks } = require("packages/com/ldtteam/structurize/storage/$StructurePacks");
const { $ItemStorage } = require("packages/com/minecolonies/api/crafting/$ItemStorage");
const { $SchemAnalyzerUtil } = require("packages/com/minecolonies/core/util/$SchemAnalyzerUtil");

ItemEvents.rightClicked('kubejs:building_gift_box', event => {
    let { player, item } = event

    if (item.id != 'kubejs:building_gift_box') return

    if (!(item.hasNBT() && item.nbt.contains('path') && item.nbt.contains('pack'))) return

    let blueprintPath = item.nbt.getString('path')
    let blueprintPack = item.nbt.getString('pack')

    /**@type {$Blueprint} */
    let bluePrint = $StructurePacks['getBlueprint(java.lang.String,java.lang.String,boolean)'](blueprintPack, blueprintPath, true)
    if (!bluePrint) return
    let analyzationResult = $SchemAnalyzerUtil.analyzeSchematic(bluePrint)
    analyzationResult.differentBlocks.forEach(/** @param {$ItemStorage} itemStorage*/(itemStorage) => {
        player.give(itemStorage.getItemStack().withCount(itemStorage.getAmount()))
    })
    item.shrink(1)
})


BlockEvents.rightClicked(event => {
    let { player, block, item } = event
    if (item.id != 'kubejs:building_gift_box') return
    if (item.hasNBT() && item.nbt.getInt('force') == 1) return
    if (!block || !block.entityData.contains('blueprintDataProvider')) return
    let blueprintDataProvider = block.entityData.getCompound('blueprintDataProvider')
    let blueprintPath = blueprintDataProvider.getString('path')
    let blueprintPack = blueprintDataProvider.getString('pack')
    if (!item.hasNBT()) {
        item.setNbt({ 'path': blueprintPath, 'pack': blueprintPack })
    } else {
        item.nbt.merge({ 'path': blueprintPath, 'pack': blueprintPack })
    }
    player.addItemCooldown(item, 20 * 5)
})
