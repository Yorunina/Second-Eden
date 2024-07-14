const { RARE, EPIC, LEGENDARY, OVERLIMIT } = require("../../utils/itemborder")

StartupEvents.registry('item', event => {
    event.create('book_of_enlight', 'basic')
        .maxStackSize(16)
        .texture('kubejs:item/book_of_enlight')

    event.create('skill_book_strength')
        .maxStackSize(16)
        .tag(LEGENDARY)
        .texture('kubejs:item/skill_book_strength')
    event.create('skill_book_agility')
        .maxStackSize(16)
        .tag(LEGENDARY)
        .texture('kubejs:item/skill_book_agility')
    event.create('skill_book_intelligence')
        .maxStackSize(16)
        .tag(LEGENDARY)
        .texture('kubejs:item/skill_book_intelligence')
    event.create('skill_forget_book')
        .maxStackSize(16)
        .tag(LEGENDARY)
        .texture('kubejs:item/skill_forget_book')

    event.create('master_certificate', "basic")
        .maxStackSize(16)
        .tag(OVERLIMIT)
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/master_certificate')

    event.create('soul_gem_adaptability', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_adaptability')
    event.create('soul_gem_agility', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_agility')
    event.create('soul_gem_athletics', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_athletics')
    event.create('soul_gem_creativity', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_creativity')
    event.create('soul_gem_dexterity', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_dexterity')
    event.create('soul_gem_focus', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_focus')
    event.create('soul_gem_intelligence', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_intelligence')
    event.create('soul_gem_knowledge', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_knowledge')
    event.create('soul_gem_mana', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_mana')
    event.create('soul_gem_strength', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_strength')
    event.create('soul_gem_stamina', 'basic')
        .maxStackSize(16)
        .tag(RARE)
        .tag('kubejs:soul_gem')
        .tag('minecolonies:hide_citizen_data')
        .texture('kubejs:item/soul_gem_stamina')
})