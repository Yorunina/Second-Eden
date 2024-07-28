// priority: 900

import { $ICitizenData } from "packages/com/minecolonies/api/colony/$ICitizenData"
import { $IColony } from "packages/com/minecolonies/api/colony/$IColony"
import { $ColonyInformationChangedEvent } from "packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent"
import { $IGlobalResearchTree } from "packages/com/minecolonies/api/research/$IGlobalResearchTree"
import { $IResearchEffect } from "packages/com/minecolonies/api/research/effects/$IResearchEffect"
import { $ResearchState } from "packages/com/minecolonies/api/research/util/$ResearchState"
import { $Player } from "packages/net/minecraft/world/entity/player/$Player"
import { $LocalResearch } from "packages/com/minecolonies/core/research/$LocalResearch"


/**
 * 特殊建筑完成建造事件
 * @param {$ColonyInformationChangedEvent} event
 */
export function SpecialBuildRequestCompletedQuest(event) {
    let bluePrint = event.bluePrint

    let bluePrintResourceLocation = bluePrint.getPackName() + '/' + bluePrint.getFileName()
    if (SpecialBuildRequestCompletedStrategy[bluePrintResourceLocation]) {
        SpecialBuildRequestCompletedStrategy[bluePrintResourceLocation](event)
    }

}


/**
 * 饰品受伤策略
 * @constant
 * @type {Object<string,function($ColonyInformationChangedEvent):void>}
 * @returns {$BlockPos_}
 */
const SpecialBuildRequestCompletedStrategy = {
    'ColonyLandMarks/SakuraMoon': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/sakuramoon', 1)
    },
    'ColonyLandMarks/KokotoniTower': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/kokotonitower', 1)
    },
    'ColonyLandMarks/LeavesMaze': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/leavesmaze', 1)
    },
    'ColonyLandMarks/TreeHouse': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/treehouse', 1)
    },
    'ColonyLandMarks/EiffelTower1': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower1', 1)
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/eiffeltower1', 'kubejs:landmarks/eiffeltower2', 'kubejs:landmarks/eiffeltower3'])) {
            finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower', 1)
        }
    },
    'ColonyLandMarks/EiffelTower2': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffelTower2', 1)
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/eiffeltower1', 'kubejs:landmarks/eiffeltower2', 'kubejs:landmarks/eiffeltower3'])) {
            finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower', 1)
        }
    },
    'ColonyLandMarks/EiffelTower3': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffelTower3', 1)
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/eiffeltower1', 'kubejs:landmarks/eiffeltower2', 'kubejs:landmarks/eiffeltower3'])) {
            finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower', 1)
        }
    },
    'ColonyLandMarks/Pantheon': (event) => {
        finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/pantheon', 1)
    },
}


/**
 * 
 * @param {$IColony} colony 
 * @param {String[]} needResearchList 
 */
function checkMultiStructIsFulfill(colony, needResearchList) {
    let result = true
    needResearchList.forEach(researchId => {
        result = result && colony.getResearchManager().getResearchTree().isComplete(new ResourceLocation(researchId))
    })
    return result
}

/**
 * 
 * @param {$IColony} colony 
 * @param {String} researchId 
 */
function finishResearch(colony, branchId, researchId, depth) {
    colony.getResearchManager().markDirty()
    let branch = new ResourceLocation(branchId)
    let research = new ResourceLocation(researchId)
    if (colony.getResearchManager().getResearchTree().isComplete(research)) {
        return
    }

    let tree = colony.getResearchManager().getResearchTree()
    tree.addResearch(branch, new $LocalResearch(research, branch, depth))
    let localResearch = tree.getResearch(branch, research)
    let maxProcess = $IGlobalResearchTree.getInstance().getBranchData(branch).getBaseTime(depth)
    localResearch.setProgress(maxProcess)
    localResearch.setState($ResearchState.FINISHED)
    tree.finishResearch(research)
    let globalResearch = $IGlobalResearchTree.getInstance().getResearch(branch, research)
    if (globalResearch) {
        globalResearch.getEffects().forEach(/** @param {$IResearchEffect} effect */effect => {
            colony.getResearchManager().getResearchEffects().applyEffect(effect)
        })
    
        colony.getCitizenManager().getCitizens().forEach(/** @param {$ICitizenData} citizen */citizen => {
            citizen.applyResearchEffects()
        })
    }
    colony.getMessagePlayerEntities().forEach(/** @param {$Player} player */player => {
        player.tell(Text.translatable(''))
    })
}
