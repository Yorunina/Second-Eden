const { $SkillsAPI } = require("packages/net/puffish/skillsmod/api/$SkillsAPI")

const MAX_COMMON_SKILL_POINTS = 25
ItemEvents.rightClicked('kubejs:skill_book_strength', event => {
    let { player, item } = event
    if (!player) return
    let skillType = 'strength'
    let cateGory = getSkillCategory(skillType)
    let hadSkillPoints = cateGory.getExtraPoints(player)
    if (hadSkillPoints >= MAX_COMMON_SKILL_POINTS) {
        player.tell(Text.translatable('msg.player.common.no_more_skill_claim'))
        return
    }
    player.tell(Text.translatable('msg.player.common.skill_point_claim_succ', Text.gold(Text.translatable(`msg.player.skill_type.${skillType}`)), Text.gold(1)))
    cateGory.addExtraPoints(player, 1)
    item.shrink(1)
})

ItemEvents.rightClicked('kubejs:skill_book_agility', event => {
    let { player, item } = event
    if (!player) return
    let skillType = 'agility'
    let cateGory = getSkillCategory(skillType)
    let hadSkillPoints = cateGory.getExtraPoints(player)
    if (hadSkillPoints >= MAX_COMMON_SKILL_POINTS) {
        player.tell(Text.translatable('msg.player.common.no_more_skill_claim'))
        return
    }
    player.tell(Text.translatable('msg.player.common.skill_point_claim_succ', Text.gold(Text.translatable(`msg.player.skill_type.${skillType}`)), Text.gold(1)))
    cateGory.addExtraPoints(player, 1)
    item.shrink(1)
})

ItemEvents.rightClicked('kubejs:skill_book_intelligence', event => {
    let { player, item } = event
    if (!player) return
    let skillType = 'intelligence'
    let cateGory = getSkillCategory(skillType)
    let hadSkillPoints = cateGory.getExtraPoints(player)
    if (hadSkillPoints >= MAX_COMMON_SKILL_POINTS) {
        player.tell(Text.translatable('msg.player.common.no_more_skill_claim'))
        return
    }
    player.tell(Text.translatable('msg.player.common.skill_point_claim_succ', Text.gold(Text.translatable(`msg.player.skill_type.${skillType}`)), Text.gold(1)))
    cateGory.addExtraPoints(player, 1)
    item.shrink(1)
})

/**
 * 
 * @param {string} skillType 
 * @returns {$Category_}
 */
function getSkillCategory(skillType) {
    let cateGoryOpt = $SkillsAPI.getCategory(skillType)
    if (!cateGoryOpt.ifPresent()) return null
    return cateGoryOpt.get()
}