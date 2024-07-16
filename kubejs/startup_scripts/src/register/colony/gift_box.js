const { LEGENDARY } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('building_gift_box', 'basic').tag(LEGENDARY).tag('minecolonies:hide_citizen_data').texture('kubejs:item/building_gift_box').maxStackSize(1)
})