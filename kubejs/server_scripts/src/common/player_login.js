// priority: 500

PlayerEvents.loggedIn(event => {
    let player = event.player

    event.server.scheduleInTicks(20, (callback) => {
        if (player.persistentData.getInt('firstJoin') != 1) {
            player.inventory.clear()
            player.give(Item.of('eccentrictome:tome', '{"eccentrictome:mods":{ftbquests:{0:{Count:1b,id:"ftbquests:book"}},touhou_little_maid:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"touhou_little_maid:memorizable_gensokyo"}}},via_romana:{0:{Count:1b,id:"patchouli:guide_book",tag:{"patchouli:book":"via_romana:guide"}}}},"eccentrictome:version":1}'))
            player.give(Item.of('kubejs:newer_atlas', '{Damage:0}'))
            player.give(Item.of('kubejs:friend_to_the_end', 1, `{ "friendName": "${player.getUsername()}" }`))
            player.persistentData.putInt('firstJoin', 1)
        }
    })
})