const { RARE } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('transmog_mirror', 'basic').tag(RARE).tag('minecolonies:hide_citizen_data').maxStackSize(1)
})