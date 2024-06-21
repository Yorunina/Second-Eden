StartupEvents.registry('item', event => {
    event.create('book_of_knowledge', 'basic')
        .maxStackSize(16)
        .texture('kubejs:item/book_of_knowledge')
    event.create('book_of_enlight', 'basic')
        .maxStackSize(16)
        .texture('kubejs:item/book_of_enlight')
    event.create('teaching_manual', 'basic')
        .maxStackSize(1)
        .maxDamage(8)
        .texture('kubejs:item/teaching_manual')

    event.create('skill_book_strength')
        .maxStackSize(16)
        .texture('kubejs:item/skill_book_strength')

})