// priority: 100
const { $Skill } = require("packages/com/minecolonies/api/entity/citizen/$Skill")
const { GetCitizenFromEntity } = require("../utils/colony")

ItemEvents.entityInteracted('#kubejs:teaching_manual', event => {
    let { target, player, item } = event
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

    player.tell(Text.translatable(`msg.${item.idLocation.path}.using.1`, Text.darkPurple(educationAbility), Text.green(citizen.getName()), Text.gold(oldLevel), Text.gold(oldLevel + increment)))
    // 关闭因为右键交互而产生的殖民地交互界面
    // player.closeMenu()
    item.shrink(1)
})



const TeachingManualAttributes = {
    'kubejs:teaching_manual_adaptability': $Skill.Adaptability,
    'kubejs:teaching_manual_agility': $Skill.Agility,
    'kubejs:teaching_manual_athletics': $Skill.Athletics,
    'kubejs:teaching_manual_creativity': $Skill.Creativity,
    'kubejs:teaching_manual_dexterity': $Skill.Dexterity,
    'kubejs:teaching_manual_focus': $Skill.Focus,
    'kubejs:teaching_manual_intelligence': $Skill.Intelligence,
    'kubejs:teaching_manual_knowledge': $Skill.Knowledge,
    'kubejs:teaching_manual_mana': $Skill.Mana,
    'kubejs:teaching_manual_strength': $Skill.Strength,
    'kubejs:teaching_manual_stamina': $Skill.Stamina,
}