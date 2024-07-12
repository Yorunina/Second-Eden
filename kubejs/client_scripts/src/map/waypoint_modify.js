const { CreateWaypoint } = require("../utils/ftbchunk")
const { $BlockPos } = require("packages/net/minecraft/core/$BlockPos")

NetworkEvents.dataReceived(global.WayPointCreateChannel, event => {
    let { data } = event
    CreateWaypoint(new $BlockPos(data.getInt('x'), data.getInt('y'), data.getInt('z')), data.getString('name'), data.getInt('color'))
})

