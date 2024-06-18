// 按键动作相关
const $KeyMapping = Java.loadClass("net.minecraft.client.KeyMapping")
const $GLFWKey = Java.loadClass("org.lwjgl.glfw.GLFW")
const $KeyMappingRegistry = Java.loadClass("dev.architectury.registry.client.keymappings.KeyMappingRegistry")
const AtlasUsingKey = new $KeyMapping(`key.kubejs.pary_action`, $GLFWKey.GLFW_KEY_X, 'key.categories.kubejs')