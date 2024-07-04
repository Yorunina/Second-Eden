// priority: 1000
const { AirdropPoolItem } = require('../model/airdrop_pool_model')

global.AirdropPool = {}
const NewerAirdropPool = new Map()
    .set('land', [
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
    .set('sea', [
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
    .set('common_wood', [
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
        new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(0.5).setChance(0.2),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:birch_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:cherry_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:spruce_log').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
    ]).set('all_wood', [
        new AirdropPoolItem('minecraft:dirt').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5),
        new AirdropPoolItem('minecraft:grass_block').setMinCount(8).setMaxCount(16).setFortuneCoe(0.5).setChance(0.2),
        new AirdropPoolItem('minecraft:oak_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:birch_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:cherry_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:spruce_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:acacia_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:jungle_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:dark_oak_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:mangrove_log').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
    ]).set('stone', [
        new AirdropPoolItem('minecraft:cobblestone').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5),
        new AirdropPoolItem('minecraft:stone').setMinCount(32).setMaxCount(128).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:cobbled_deepslate').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:deepslate').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:smooth_stone').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:stone_bricks').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecart:clay_block').setMinCount(16).setMaxCount(64).setFortuneCoe(0.5).setChance(0.5),
    ]).set('raw_ore', [
        new AirdropPoolItem('minecraft:coal').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.8),
        new AirdropPoolItem('minecraft:raw_iron').setMinCount(32).setMaxCount(64).setFortuneCoe(1.5).setChance(0.8),
        new AirdropPoolItem('minecraft:raw_copper').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
        new AirdropPoolItem('minecraft:raw_gold').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
    ]).set('wool', [
        new AirdropPoolItem('minecraft:white_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:orange_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:magenta_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:light_blue_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2), 
        new AirdropPoolItem('minecraft:yellow_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:lime_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:pink_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:gray_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:light_gray_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:cyan_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:purple_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:blue_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:brown_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:green_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:red_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:black_wool').setMinCount(16).setMaxCount(48).setFortuneCoe(1.5).setChance(0.2),
    ]).set('dye', [
        new AirdropPoolItem('minecraft:white_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),   
        new AirdropPoolItem('minecraft:orange_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:magenta_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:light_blue_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:yellow_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:lime_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:pink_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:gray_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:light_gray_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:cyan_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:purple_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:blue_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:brown_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:green_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:red_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:black_dye').setMinCount(4).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
    ]).set('gem', [
        new AirdropPoolItem('minecraft:diamond').setMinCount(2).setMaxCount(4).setFortuneCoe(0.5).setChance(0.15),
        new AirdropPoolItem('minecraft:emerald').setMinCount(8).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:lapis_lazuli').setMinCount(8).setMaxCount(16).setFortuneCoe(1.5).setChance(0.2),
        new AirdropPoolItem('minecraft:redstone').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.3),
        new AirdropPoolItem('minecraft:raw_gold').setMinCount(16).setMaxCount(64).setFortuneCoe(1.5).setChance(0.5),
    ]).set('food', [
        new AirdropPoolItem('minecraft:cookie').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),  
        new AirdropPoolItem('minecraft:apple').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:bread').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:melon_slice').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:pumpkin_pie').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:baked_potato').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:sweet_berries').setMinCount(16).setMaxCount(32).setFortuneCoe(1.5).setChance(0.25),
        new AirdropPoolItem('minecraft:enchanted_golden_apple').setMinCount(1).setMaxCount(2).setFortuneCoe(0).setChance(0.03),
        new AirdropPoolItem('minecraft:golden_apple').setMinCount(2).setMaxCount(4).setFortuneCoe(1.5).setChance(0.15),
        new AirdropPoolItem('minecraft:golden_carrot').setMinCount(8).setMaxCount(16).setFortuneCoe(1.5).setChance(0.15),
    ]).set('curios', [
        new AirdropPoolItem('kubejs:transmog_mirror').setMinCount(1).setMaxCount(2).setFortuneCoe(0).setChance(0.025),
    ])
// todo 继续增添theme

global.AirdropPool['newer'] = NewerAirdropPool
global.AirdropPool['common'] = CommonAirdropPool
global.AirdropPool['advanced'] = AdvancedAirdropPool
global.AirdropPool['ultra'] = ultraAirdropPool