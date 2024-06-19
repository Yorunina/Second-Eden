// 原版
const $ServerPlayer = Java.loadClass('net.minecraft.server.level.ServerPlayer')
const $MapItemSavedData = Java.loadClass('net.minecraft.world.level.saveddata.maps.MapItemSavedData')
const $MapItem = Java.loadClass('net.minecraft.world.item.MapItem')
const $MapDecorationType = Java.loadClass('net.minecraft.world.level.saveddata.maps.MapDecoration$Type')
const $RandomizableContainerBlockEntity = Java.loadClass('net.minecraft.world.level.block.entity.RandomizableContainerBlockEntity')


// 殖民地相关
const RaidTypeList = ["pirate", "egyptian", "norsemen", "barbarian", "amazon"]

const $CitizenSkill = Java.loadClass('com.minecolonies.api.entity.citizen.Skill')
const $ICitizenSkillHandler = Java.loadClass('com.minecolonies.api.entity.citizen.citizenhandlers.ICitizenSkillHandler')
const $IColonyManager = Java.loadClass('com.minecolonies.api.colony.IColonyManager')
const $RaidSpawnResult = Java.loadClass('com.minecolonies.api.colony.managers.interfaces.IRaiderManager$RaidSpawnResult')

// 技能相关
const $SkillsAPI = Java.loadClass('net.puffish.skillsmod.api.SkillsAPI')