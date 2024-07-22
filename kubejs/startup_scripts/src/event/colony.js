const { $ColonyCreatedEvent } = require("packages/com/minecolonies/api/colony/event/$ColonyCreatedEvent");
const { $ColonyInformationChangedEvent } = require("packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent");
const { $ColonyInformationChangedEvent$Type } = require("packages/com/minecolonies/api/colony/event/$ColonyInformationChangedEvent$Type");




ForgeEvents.onEvent($ColonyCreatedEvent, event => {
    global.ColonyCreatedEvent(event)
})


ForgeEvents.onEvent($ColonyInformationChangedEvent, event => {
    switch (event.getType()) {
        case $ColonyInformationChangedEvent$Type.BUILD_REQUEST_COMPLETED:
            global.ColonyBuildRequestCompletedEvent(event)
            break
        case $ColonyInformationChangedEvent$Type.RESEARCH_COMPLETED:
            global.ColonyResearchCompletedEvent(event)
            break
    }
})

