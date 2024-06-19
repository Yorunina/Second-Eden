// priority: 100
const { $Skill } = require("packages/com/minecolonies/api/entity/citizen/$Skill")
const { $IColonyManager } = require("packages/com/minecolonies/api/colony/$IColonyManager")

ItemEvents.entityInteracted('kubejs:teaching_manual', event => {
    let {target, player, item} = event
    if (target.type != 'minecolonies:citizen') return
    let citizen = getCitizenFromEntity(target)
    if (!citizen) return
    let type = item.nbt.getString('type')
    if (!type) type = 'random'
    let rank = item.nbt.getInt('rank')
    if (!rank) rank = 1
    let educationAbility = player.getAttribute('kubejs:education_ability').getValue()
    let increment = Math.floor(rank + educationAbility * 0.25 * rank)

    let currentLevel = citizen.citizenSkillHandler.getLevel($Skill.Strength)
    citizen.citizenSkillHandler.incrementLevel($Skill.Strength, increment)
    
    player.tell([Text.white('因为你'), Text.lightPurple('卓越(128)'), Text.white('的管理能力，'),Text.green(citizen.getName()), Text.white('的力量上升了'), Text.green(currentLevel), Text.green('->'), Text.green(currentLevel + 3)])
})


/**
 * 通过实体获取citizen
 * @param {$Entity_} target 
 * @returns {$ICitizenData_}
 */
function getCitizenFromEntity(target) {
    let citizenId = target?.nbt.getInt('citizen')
    let colonyId = target?.nbt.getInt('colony')
    if (!citizenId || !colonyId) return null
    let colony = $IColonyManager.getInstance().getColonyByDimension(colonyId, target.level.dimensionKey)
    if (!colony) return null
    return colony.getCitizenManager().getCivilian(citizenId)
}