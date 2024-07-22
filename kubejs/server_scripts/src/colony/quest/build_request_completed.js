// priority: 900

import { $ColonyInformationChangedEvent } from "packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent"

/**
 * 建筑完成事件关联FTBQuest
 * @param {$ColonyInformationChangedEvent} event
 */
export function BuildRequestCompletedQuest(event) {
    let building = event.getBuilding()
    if (!building) return
    let buildingType = building.getBuildingType().getRegistryName().toString()
    event.colony.getMessagePlayerEntities().forEach(/**@param {$Player} player*/player => {
        if (BuildTypeToFTBQuest.has(buildingType)) {
            let questData = FTBQuests.getServerDataFromPlayer(player)
            let questId = ResearchIdToFTBQuest.get(buildingType)
            if (questData.isCompleted(questId)) return
            questData.complete(questId)
        }
    })
}

// 'archery' || 'baker' || 'barracks' || 'barrackstower' || 'blacksmith' || 'builder' || 'chickenherder' || 'combatacademy' || 'composter' || 'cook' || 'cowboy' || 'crusher' || 'deliveryman' || 'farmer' || 'fisherman' || 'guardtower' || 'residence' || 'library' || 'lumberjack' || 'miner' || 'sawmill' || 'shepherd' || 'sifter' || 'smeltery' || 'stonemason' || 'stonesmeltery' || 'swineherder' || 'townhall' || 'warehouse' || 'postbox' || 'florist' || 'enchanter' || 'university' || 'hospital' || 'stash' || 'school' || 'glassblower' || 'dyer' || 'fletcher' || 'mechanic' || 'plantation' || 'tavern' || 'concretemixer' || 'rabbithutch' || 'beekeeper' || 'mysticalsite' || 'graveyard' || 'netherworker' || 'simplequarry' || 'mediumquarry' || 'largequarry' || 'alchemist'

const BuildTypeToFTBQuest = new Map()
    .set('minecraft:glassblower', '13BD292F0E5DC4EB') // 添加建筑示例