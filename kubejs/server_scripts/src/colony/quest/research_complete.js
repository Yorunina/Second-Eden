// priority: 900

import { $ColonyInformationChangedEvent } from "packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent"

/**
 * 研究完成事件关联FTBQuest
 * @param {$ColonyInformationChangedEvent} event
 */
export function ResearchCompletedQuest(event) {
    let research = event.research
    if (!research) return
    let researchId = research.getId().toString()
    event.colony.getMessagePlayerEntities().forEach(/**@param {$Player} player*/player => {
        if (ResearchIdToFTBQuest.has(researchId)) {
            let questData = FTBQuests.getServerDataFromPlayer(player)
            let questId = ResearchIdToFTBQuest.get(researchId)
            if (questData.isCompleted(questId)) return
            questData.complete(questId)
        }
    })
}

const ResearchIdToFTBQuest = new Map()
    .set('kubejs:overlimit/singular', '3113C02082E4DDB6') // 添加研究任务示例