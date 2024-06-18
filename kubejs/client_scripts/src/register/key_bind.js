$KeyMappingRegistry.register(AtlasUsingKey)
ClientEvents.tick(event => {
    if (AtlasUsingKey.consumeClick()) {
        event.player.sendData(global.AtlasKeyPressed)
    }
})
