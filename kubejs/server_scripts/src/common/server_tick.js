// const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
// const { GetColonyByPlayer } = require("../utils/colony")

// ServerEvents.tick(event => {
//     if (event.server.tickCount % 20 != 0) return
//     let server = event.server
//     let level = server.getOverworld()
//     if (level.getDayTime() % 24000 >= 20) return
//     let players = event.server.getPlayers()
//     if (players.size() <= 0) return
//     players.forEach(/**@param {$ServerPlayer} player*/player => {
//         let colony = GetColonyByPlayer(level, player)
//         if (!colony) return
//         let day = colony.getDay()
//         server.runCommandSilent(`/title ${player.name.getString()} title [{"translate":"colony.daily.title.1", "color":"gold"}, {"text":"${day}", "color":"yellow"}, {"translate":"colony.daily.title.2", "color":"gold"}]`)
//     })
// })