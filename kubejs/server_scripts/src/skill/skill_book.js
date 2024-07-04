const { $SkillsAPI } = require("packages/net/puffish/skillsmod/api/$SkillsAPI")
const { $SkillsMod } = require("packages/net/puffish/skillsmod/$SkillsMod")
const { $Skill } = require("packages/com/minecolonies/api/entity/citizen/$Skill")

const MAX_COMMON_SKILL_POINTS = 25
ItemEvents.rightClicked('kubejs:skill_book_strength', event => {
    let { player, item } = event
    if (!player) return
    let skillType = new ResourceLocation('kubejs', 'strength')
    let cateGory = getSkillCategory($SkillsMod.convertIdentifier(skillType))
    let hadSkillPoints = cateGory.getExtraPoints(player)
    if (hadSkillPoints >= MAX_COMMON_SKILL_POINTS) {
        player.tell(Text.translatable('msg.player.common.no_more_skill_claim'))
        return
    }

    player.setStatusMessage(Text.translatable('msg.player.common.skill_point_claim_succ', Text.translatable(`msg.player.skill_type.strength`).gold(), Text.gold('1')))
    cateGory.addExtraPoints(player, 1)
    item.shrink(1)
})

ItemEvents.rightClicked('kubejs:skill_book_agility', event => {
    let { player, item } = event
    if (!player) return
    let skillType = new ResourceLocation('kubejs', 'agility')
    let cateGory = getSkillCategory(skillType)
    let hadSkillPoints = cateGory.getExtraPoints(player)
    if (hadSkillPoints >= MAX_COMMON_SKILL_POINTS) {
        player.tell(Text.translatable('msg.player.common.no_more_skill_claim'))
        return
    }
    player.setStatusMessage(Text.translatable('msg.player.common.skill_point_claim_succ', Text.translatable(`msg.player.skill_type.agility`).gold(), Text.gold('1')))
    cateGory.addExtraPoints(player, 1)
    item.shrink(1)
})

ItemEvents.rightClicked('kubejs:skill_book_intelligence', event => {
    let { player, item } = event
    if (!player) return
    let skillType = new ResourceLocation('kubejs', 'intelligence')
    let cateGory = getSkillCategory(skillType)
    let hadSkillPoints = cateGory.getExtraPoints(player)
    if (hadSkillPoints >= MAX_COMMON_SKILL_POINTS) {
        player.tell(Text.translatable('msg.player.common.no_more_skill_claim'))
        return
    }
    player.setStatusMessage(Text.translatable('msg.player.common.skill_point_claim_succ', Text.translatable(`msg.player.skill_type.intelligence`).gold(), Text.gold('1')))
    cateGory.addExtraPoints(player, 1)
    item.shrink(1)
})

ItemEvents.rightClicked('kubejs:skill_forget_book', event => {
    let { player, item } = event
    if (!player) return
    ['intelligence', 'agility', 'strength'].forEach(skillType => {
        let cateGory = getSkillCategory(new ResourceLocation('kubejs', skillType))
        let originPoint = cateGory.getExtraPoints(player)
        cateGory.resetSkills(player)
        cateGory.setExtraPoints(player, originPoint)
    })
    player.setStatusMessage(Text.translatable('msg.player.common.skill_forget_succ').gold())
    item.shrink(1)
})

/**
 * 
 * @param {$ResourceLocation_} skillType 
 * @returns {$Category_}
 */
function getSkillCategory(skillType) {
    let cateGoryOpt = $SkillsAPI.getCategory(skillType)
    if (!cateGoryOpt.get()) return null
    return cateGoryOpt.get()
}