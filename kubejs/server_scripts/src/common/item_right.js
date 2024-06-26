const { GetColonyByEntity } = require("../utils/colony")
const { $TGEntities } = require("packages/com/lion/graveyard/init/$TGEntities")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")

ItemEvents.entityInteracted('kubejs:raid_book', event => {
    let {target, level, item} = event
    if (target.type != 'minecolonies:citizen') return
    let colony = GetColonyByEntity(target)
    if (!colony) return
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()
    for (let i = 0; i < 20; i++ ) {
        let hordeEntity = $TGEntities.GHOUL.get().create(level)
        hordeEntity.setAggressive(true)
        hordeEntity.setMovementSpeedAddition(0.175)
        hordeEntity.setPatrolTarget(target.block.pos)
        hordeEntity.setCanBurnInSunlight(false)
        hordeEntity.setPersistenceRequired()
        hordeEntity.setPos(spawnLocation.x + Math.random() * 3, spawnLocation.y, spawnLocation.z + Math.random() * 3)
        hordeEntity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
        level.addFreshEntityWithPassengers(hordeEntity)
    }
    item.shrink(1)
})
