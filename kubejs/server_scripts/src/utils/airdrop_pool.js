// priority: 1000
const { AirdropPoolItem } = require('../model/airdrop_pool_model')

const NewerAirdropPool = new Map()
NewerAirdropPool.set('land', [
    new AirdropPoolItem('minecolonies:supplycampdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:cobblestone').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('sophisticatedbackpacks:backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
])
NewerAirdropPool.set('sea', [
    new AirdropPoolItem('minecolonies:supplychestdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:cobblestone').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:sponge').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('sophisticatedbackpacks:backpack').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
])

const CommonAirdropPool = new Map()
CommonAirdropPool.set('all_wood',
    [
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
        new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(0.5).setChance(0.2),
    ].concat(
        Ingredient.of('#minecraft:logs').itemStacks.map(stack => new AirdropPoolItem(stack).setMinCount(16).setMaxCount(64).setFortuneCoe(1).setChance(0.25))
    ).concat(
        Ingredient.of('#minecraft:saplings').itemStacks.map(stack => new AirdropPoolItem(stack).setMinCount(1).setMaxCount(8).setFortuneCoe(1).setChance(0.1))
    )
)
CommonAirdropPool.set('common_wood',
    [
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
        new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(0.5).setChance(0.2),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:birch_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:cherry_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:spruce_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
    ]
)
CommonAirdropPool.set('stone', [
    [
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5),
        new AirdropPoolItem('minecraft:stone').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:cobbled_deepslate').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:deepslate').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:smooth_stone').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
    ]
])
// todo 继续增添theme
global.AirdropPool = {}
global.AirdropPool['newer'] = NewerAirdropPool
global.AirdropPool['common'] = CommonAirdropPool

// todo 测试主题tag是否有效
ServerEvents.recipes(event => {
    event.shapeless('kubejs:common_atlas', ['kubejs:atlas_theme_nametag', '#kubejs:atlas'])
        .modifyResult((/** @type { $ModifyRecipeCraftingGrid_ }*/grid,/** @type { $ItemStack_ }*/ stack) => {
            let nametag = grid.find('kubejs:atlas_theme_nametag', 0)
            let atlas = grid.find('#kubejs:atlas', 0)
            stack = Item.of('minecraft:air')
            if (nametag.nbt?.itemId == atlas.id && nametag.nbt?.theme) {
                stack = atlas.nbt.merge({'theme': nametag.nbt.getString('theme')})
            }
            return stack
        })
})