ServerEvents.tags('item', event => {

    event.add('itemborders:overlimit', ['refinedstorage:creative_storage_disk', 'refinedstorage:creative_fluid_storage_disk', 'refinedstorage:creative_fluid_storage_block', 'refinedstorage:creative_storage_block', 'rsinfinitybooster:infinity_card', 'rsinfinitybooster:dimension_card'])

    event.add('minecolonies:smeltable_item', [])
    event.add('minecolonies:reduceable_ingredient', [])
    event.add('minecolonies:reduceable_product_excluded', [])
})
