const { $KeyMappingRegistry } = require("packages/dev/architectury/registry/client/keymappings/$KeyMappingRegistry")
const { $KeyMapping } = require("packages/net/minecraft/client/$KeyMapping")
const { $GLFW } = require("packages/org/lwjgl/glfw/$GLFW")

const AtlasUsingKey = new $KeyMapping(`key.kubejs.atlas_key`, $GLFW.GLFW_KEY_X, 'key.categories.kubejs')
$KeyMappingRegistry.register(AtlasUsingKey)
ClientEvents.tick(event => {
    if (AtlasUsingKey.consumeClick()) {
        event.player.sendData(global.AtlasKeyPressedChannel)
    }
})