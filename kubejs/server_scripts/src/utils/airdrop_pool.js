// priority: 1000
const { AirdropPoolItem } = require('../model/airdrop_pool_model')
global.AirdropPool = {}

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
    new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
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
    new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
])

const CommonAirdropPool = new Map()
CommonAirdropPool.set('land', [
    new AirdropPoolItem('minecolonies:supplycampdeployer').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('minecraft:oak_log').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:cobblestone').setMinCount(64).setMaxCount(64).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:iron_ingot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:gold_ingot').setMinCount(8).setMaxCount(8).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:diamond').setMinCount(1).setMaxCount(1).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:carrot').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:potato').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(16).setFortuneCoe(1),
    new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
])
CommonAirdropPool.set('sea', [
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
    new AirdropPoolItem('travelersbackpack:red_sleeping_bag').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
    new AirdropPoolItem('kubejs:common_atlas').setMinCount(1).setMaxCount(1).setFortuneCoe(0),
])

global.AirdropPool['newer'] = CommonAirdropPool
global.AirdropPool['common'] = CommonAirdropPool


