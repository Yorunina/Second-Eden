// priority: 100
const { $Skill } = require("packages/com/minecolonies/api/entity/citizen/$Skill")
const { GetCitizenFromEntity } = require("../utils/colony/GetCitizenFromEntity")

ItemEvents.entityInteracted('kubejs:teaching_manual', event => {
    let {target, player, item} = event
    if (target.type != 'minecolonies:citizen') return

    item.setDamageValue(item.getDamageValue() + 1)

    let type = item.nbt.getString('type')
    if (!type) type = 'random'
    let rank = item.nbt.getInt('rank')
    if (!rank) rank = 0
    let citizen = GetCitizenFromEntity(target)
    if (!citizen) return

    let educationAbility = player.getAttribute('kubejs:education_ability').getValue()
    let increment = Math.min(Math.floor(1 + rank * educationAbility * 0.1), 100)
    let skill = TeachingManualAttributes[item.id]

    let currentLevel = citizen.citizenSkillHandler.getLevel(skill)
    citizen.citizenSkillHandler.incrementLevel(skill, increment)
    
    player.tell(Text.translate(`kubejs.${item.id}.player.msg.1`))
    
})



const TeachingManualAttributes = {
    'kubejs:teaching_manual_adaptability' : $Skill.Adaptability,
    'kubejs:teaching_manual_agility' : $Skill.Agility,
    'kubejs:teaching_manual_athletics' : $Skill.Athletics,
    'kubejs:teaching_manual_creativity' : $Skill.Creativity,
    'kubejs:teaching_manual_dexterity' : $Skill.Dexterity,
    'kubejs:teaching_manual_focus' : $Skill.Focus,
    'kubejs:teaching_manual_intelligence' : $Skill.Intelligence,
    'kubejs:teaching_manual_knowledge' : $Skill.Knowledge,
    'kubejs:teaching_manual_mana' : $Skill.Mana,
    'kubejs:teaching_manual_strength' : $Skill.Strength,
    'kubejs:teaching_manual_stamina': $Skill.Stamina,
}