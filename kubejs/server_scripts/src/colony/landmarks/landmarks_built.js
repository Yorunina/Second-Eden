// priority: 900

import { $ICitizenData } from "packages/com/minecolonies/api/colony/$ICitizenData"
import { $IColony } from "packages/com/minecolonies/api/colony/$IColony"
import { $ColonyInformationChangedEvent } from "packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent"
import { $IGlobalResearchTree } from "packages/com/minecolonies/api/research/$IGlobalResearchTree"
import { $IResearchEffect } from "packages/com/minecolonies/api/research/effects/$IResearchEffect"
import { $ResearchState } from "packages/com/minecolonies/api/research/util/$ResearchState"
import { $LocalResearch } from "packages/com/minecolonies/core/research/$LocalResearch"


/**
 * 特殊建筑完成建造事件
 * @param {$ColonyInformationChangedEvent} event
 */
export function SpecialBuildRequestCompletedQuest(event) {
    let bluePrint = event.bluePrint

    let bluePrintResourceLocation = bluePrint.getPackName() + '/' + bluePrint.getFileName()
    if (SpecialBuildRequestCompletedStrategy[bluePrintResourceLocation]) {
        if (SpecialBuildRequestCompletedStrategy[bluePrintResourceLocation](event)) {
            Utils.getServer().getPlayers().forEach(/** @param {$Player} player */player => {
                player.tell(Text.translatable('msg.player.landmarks.research_finish.1', event.colony.getName(), bluePrint.getFileName()).gray())
            })
        }
    }

}

/**
 * 地标完成策略
 * @constant
 * @type {Object<string,function($ColonyInformationChangedEvent):void>}
 * @returns {$BlockPos_}
 */
const SpecialBuildRequestCompletedStrategy = {
    'ColonyLandMarks/SakuraMoon': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/sakuramoon', 1)) return false
        return true
    },
    'ColonyLandMarks/KokotoniTower': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/kokotonitower', 1)) return false
        return true
    },
    'ColonyLandMarks/LeavesMaze': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/leavesmaze', 1)) return false
        return true
    },
    'ColonyLandMarks/TreeHouse': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/treehouse', 1)) return false
        return true
    },
    'ColonyLandMarks/EiffelTower1': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower1', 1)) return false
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/eiffeltower1', 'kubejs:landmarks/eiffeltower2', 'kubejs:landmarks/eiffeltower3'])) {
            if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower', 1)) return false
        }
        return true
    },
    'ColonyLandMarks/EiffelTower2': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower2', 1)) return false
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/eiffeltower1', 'kubejs:landmarks/eiffeltower2', 'kubejs:landmarks/eiffeltower3'])) {
            if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower', 1)) return false
        }
        return true
    },
    'ColonyLandMarks/EiffelTower3': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower3', 1)) return false
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/eiffeltower1', 'kubejs:landmarks/eiffeltower2', 'kubejs:landmarks/eiffeltower3'])) {
            if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/eiffeltower', 1)) return false
        }
        return true
    },
    'ColonyLandMarks/Pantheon': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/pantheon', 1)) return false
        return true
    },
    'ColonyLandMarks/GreenCastle1': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/greencastle1', 1)) return false
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/greencastle1', 'kubejs:landmarks/greencastle2'])) {
            if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/greencastle', 1)) return false
        }
        return true
    },
    'ColonyLandMarks/GreenCastle2': (event) => {
        if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/greencastle2', 1)) return false
        if (checkMultiStructIsFulfill(event.colony, ['kubejs:landmarks/greencastle1', 'kubejs:landmarks/greencastle2'])) {
            if (!finishResearch(event.colony, 'kubejs:landmarks', 'kubejs:landmarks/greencastle', 1)) return false
        }
        return true
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
        return false
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
    return true
}
