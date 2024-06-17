StartupEvents.registry('minecraft:item', event => {
    event.create('book_of_knowledge').maxStackSize(16).texture('kubejs:item/book_of_knowledge')
    event.create('book_of_enlight').maxStackSize(16).texture('kubejs:item/book_of_enlight')
})