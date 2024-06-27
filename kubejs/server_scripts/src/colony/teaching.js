// priority: 100
const { $Skill } = require("packages/com/minecolonies/api/entity/citizen/$Skill")
const { GetCitizenFromEntity } = require("../utils/colony")

ItemEvents.entityInteracted(event => {
    let { target, player, item } = event
    if (!item.hasTag('kubejs:soul_gem')) return
    if (target.type != 'minecolonies:citizen') return

    let rank = item.nbt ? item.nbt.getInt('rank') : 0
    if (!rank) rank = 0
    let citizen = GetCitizenFromEntity(target)
    if (!citizen) return

    let educationAbility = player.getAttribute('kubejs:education_ability').getValue()
    let increment = Math.min(Math.floor(1 + rank * educationAbility * 0.1), 100)
    let skill = TeachingManualAttributes[item.id]
    
    let oldLevel = citizen.getCitizenSkillHandler().getLevel(skill)
    citizen.getCitizenSkillHandler().incrementLevel(skill, increment)

    player.setStatusMessage(Text.translatable(`msg.${item.idLocation.path}.using.1`, Text.green(citizen.getName()), Text.gold(oldLevel), Text.gold(oldLevel + increment)))
    // 关闭因为右键交互而产生的殖民地交互界面，使用tag可以规避
    // player.closeMenu()
    item.shrink(1)
})

const TeachingManualAttributes = {
    'kubejs:soul_gem_adaptability': $Skill.Adaptability,
    'kubejs:soul_gem_agility': $Skill.Agility,
    'kubejs:soul_gem_athletics': $Skill.Athletics,
    'kubejs:soul_gem_creativity': $Skill.Creativity,
    'kubejs:soul_gem_dexterity': $Skill.Dexterity,
    'kubejs:soul_gem_focus': $Skill.Focus,
    'kubejs:soul_gem_intelligence': $Skill.Intelligence,
    'kubejs:soul_gem_knowledge': $Skill.Knowledge,
    'kubejs:soul_gem_mana': $Skill.Mana,
    'kubejs:soul_gem_strength': $Skill.Strength,
    'kubejs:soul_gem_stamina': $Skill.Stamina,
}
