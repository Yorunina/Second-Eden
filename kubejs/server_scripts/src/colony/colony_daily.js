const { $ServerPlayer } = require("packages/net/minecraft/server/level/$ServerPlayer")
const { GetColonyByPlayer } = require("../utils/colony")
const { $CompoundTag } = require("packages/net/minecraft/nbt/$CompoundTag")

ServerEvents.tick(event => {
    if (event.server.tickCount % 20 != 0) return
    let server = event.server
    let level = server.getOverworld()
    if (level.getDayTime() % 24000 >= 20) return
    let players = server.getPlayers()
    if (players.size() <= 0) return
    let hadGivenGiftSet = new Set()
    players.forEach(/**@param {$ServerPlayer} player*/player => {
        let colony = GetColonyByPlayer(level, player)
        if (!colony) return
        let colonyId = colony.getID()
        if (hadGivenGiftSet.has(colonyId)) return
        hadGivenGiftSet.add(colonyId)

        let day = colony.getDay()
        let overallHappiness = colony.getOverallHappiness()

        let townHallBuilding = colony.getBuildingManager().getTownHall()
        if (!townHallBuilding) return
        let buildingItemCap = townHallBuilding.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)
        let randomCitizen = colony.getCitizenManager().getRandomCitizen()
        if (day <= 7) {
            switch (day) {
                case 1:
                    if (randomCitizen) {
                        player.tell(Text.translate('这是你建设殖民地的第一天，%s 为了殖民地的进一步发展，献上了 %s 以辅佐你的工作。', Text.yellow(randomCitizen.getName()), Text.lightPurple('[一级建筑礼物盒]').append(' x 3')))
                        let nbt = new $CompoundTag()
                        nbt.putString('levelReq', '1')
                        buildingItemCap.insertItem(Item.of('kubejs:building_gift_box', 3, nbt), false)
                    }
                    break
                case 3:
                    if (randomCitizen) {
                        player.tell(Text.translate('这是你建设殖民地的第三天，%s 为了殖民地的进一步发展，献上了 %s 以辅佐你的工作。', Text.yellow(randomCitizen.getName()), Text.lightPurple('[木材地图册]').append(' x 1')))
                        buildingItemCap.insertItem(Item.of('kubejs:wood_atlas', 1), false)
                    }
                    break
                case 5:
                    if (randomCitizen) {
                        player.tell(Text.translate('%s 在市政厅附近的地面上发现了 %s 。这或许对殖民地建设有些帮助！', Text.yellow(randomCitizen.getName()), Text.lightPurple('[金币]').append(' x 16')))
                        buildingItemCap.insertItem(Item.of('kubejs:wood_atlas', 1), false)
                    }
                    break
                case 7:
                    if (randomCitizen) {
                        player.tell(Text.translate('殖民地已经经营了一周了！%s 为了感谢你对殖民地的贡献，因此献上了 %s 。', Text.yellow(randomCitizen.getName()), Text.lightPurple('[坐标指明项链]').append(' x 1')))
                        buildingItemCap.insertItem(Item.of('kubejs:waypointer_necklace', 1), false)
                    }
                    break
            }
        }
    })
})


ItemEvents.rightClicked('stick', event => {
    let server = event.server
    let players = event.server.getPlayers()
    let level = server.getOverworld()
    if (players.size() <= 0) return

    let hadGivenGiftSet = new Set()
    players.forEach(/**@param {$ServerPlayer} player*/player => {
        let colony = GetColonyByPlayer(level, player)
        if (!colony) return
        let colonyId = colony.getID()
        if (hadGivenGiftSet.has(colonyId)) return
        hadGivenGiftSet.add(colonyId)

        let day = colony.getDay()
        let overallHappiness = colony.getOverallHappiness()

        let townHallBuilding = colony.getBuildingManager().getTownHall()
        if (!townHallBuilding) return
        let buildingItemCap = townHallBuilding.getCapability(ForgeCapabilities.ITEM_HANDLER).orElse(null)


        let randomCitizen = colony.getCitizenManager().getRandomCitizen()
        if (randomCitizen) {
            player.tell(Text.translate('这是你建设殖民地的第一天，%s 为了殖民地的进一步发展，献上了 %s 以辅佐你的工作。', Text.yellow(randomCitizen.getName()), Text.lightPurple('[一级建筑礼物盒]').append(' x 3')))
            let nbt = new $CompoundTag()
            nbt.putString('levelReq', '2')
            buildingItemCap.insertItem(Item.of('kubejs:building_gift_box', 3, nbt), false)


        }
    })
})
