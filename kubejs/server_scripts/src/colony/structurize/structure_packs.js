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
    if (!bluePrint) {
        player.setStatusMessage(Text.of('msg.item.building_gift_box.1'))
        return
    }
    let analyzationResult = $SchemAnalyzerUtil.analyzeSchematic(bluePrint)
    analyzationResult.differentBlocks.forEach(/** @param {$ItemStorage} itemStorage*/(itemStorage) => {
        player.give(itemStorage.getItemStack().withCount(itemStorage.getAmount()))
    })
    item.shrink(1)
})


BlockEvents.rightClicked(event => {
    let { player, block, item } = event
    if (item.id != 'kubejs:building_gift_box') return
    if (player.cooldowns.isOnCooldown(item)) return

    if (item.hasNBT() && item.nbt.getInt('force') == 1) return

    if (!block || !block.entityData || !block.entityData.contains('blueprintDataProvider')) return
    let blueprintDataProvider = block.entityData.getCompound('blueprintDataProvider')
    let blueprintPath = blueprintDataProvider.getString('path')
    let blueprintPack = blueprintDataProvider.getString('pack')
    let targetBluePrintPath = blueprintPath

    if (item.hasNBT() && item.nbt.contains('levelReq')) {
        let reg = new RegExp(/(\S+)([0-5])\.blueprint/)
        if (!reg.test(blueprintPath)) return
        let levelReq = item.nbt.getString('levelReq')
        targetBluePrintPath = RegExp.$1 + levelReq + '.blueprint'
    }

    if (!item.hasNBT()) {
        item.setNbt({ 'path': targetBluePrintPath, 'pack': blueprintPack, 'blockName': block.getItem().getHoverName().getString() })
    } else {
        item.nbt.merge({ 'path': targetBluePrintPath, 'pack': blueprintPack, 'blockName': block.getItem().getHoverName().getString() })
    }
    player.addItemCooldown(item, 20 * 10)
})
