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
    player.getAttribute('minecraft:generic.attack_knockback')
    player.getAttribute('minecraft:generic.attack_speed')
    player.getAttribute('minecraft:generic.knockback_resistance')
    player.getAttribute('puffish_attributes:player.melee_damage')
    player.getAttribute('minecraft:generic.armor')
    player.getAttribute('minecraft:generic.armor_toughness')
    item.shrink(1)
})


function getSkillCategory(skillType) {
    let cateGoryOpt = $SkillsAPI.getCategory(skillType)
    if (!cateGoryOpt.ifPresent()) return null
    return cateGoryOpt.get()
}