const { OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('block', event => {
    event.create('infinity_oak_log').tag(OVERLIMIT).model('minecraft:block/oak_log')
})