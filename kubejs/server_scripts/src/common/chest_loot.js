// priority: 1000

LootJS.modifiers(event => {
    event.removeGlobalModifier("touhou_little_maid:power_point")
    event.removeGlobalModifier("touhou_little_maid:shrine")

    event.addLootTypeModifier(LootType.CHEST)
        .addLoot(LootEntry.of('kubejs:common_atlas').when((c) => c.randomChance(0.03)))
        .addLoot(LootEntry.of('kubejs:wood_atlas').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('kubejs:stone_atlas').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('kubejs:ore_atlas').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('kubejs:luxury_atlas').when((c) => c.randomChance(0.02)))
        .addLoot(LootEntry.of('kubejs:building_gift_box', 1, { 'levelReq': '1' }).when((c) => c.randomChance(0.03)))
        .addLoot(LootEntry.of('kubejs:skill_book_strength').when((c) => c.randomChance(0.03)))
        .addLoot(LootEntry.of('kubejs:skill_book_intelligence').when((c) => c.randomChance(0.03)))
        .addLoot(LootEntry.of('kubejs:skill_book_agility').when((c) => c.randomChance(0.03)))
        .addAlternativesLoot(
            LootEntry.of('simplehats:hatbag_common').when((c) => c.randomChance(0.05)),
            LootEntry.of('simplehats:hatbag_uncommon').when((c) => c.randomChance(0.04)),
            LootEntry.of('simplehats:hatbag_rare').when((c) => c.randomChance(0.03)),
            LootEntry.of('simplehats:hatbag_epic').when((c) => c.randomChance(0.02)),
        )
})