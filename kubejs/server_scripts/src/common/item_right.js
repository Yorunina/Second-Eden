const { $IRaiderManager$RaidSpawnResult } = require("packages/com/minecolonies/api/colony/managers/interfaces/$IRaiderManager$RaidSpawnResult")
const { GetColonyByEntity } = require("../utils/colony")
const { $TGEntities } = require("packages/com/lion/graveyard/init/$TGEntities")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")

ItemEvents.entityInteracted('stick', event => {
    let {target, player, level} = event
    if (target.type != 'minecolonies:citizen') return
    let colony = GetColonyByEntity(target)

    if (!colony) return
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()
    let centerPos = colony.getCenter()
    player.tell(spawnLocation)
    player.teleportTo(spawnLocation.x, spawnLocation.y, spawnLocation.z)
    let hordeEntityA = $TGEntities.GHOUL.get().create(level)
    let hordeEntityB = $TGEntities.GHOUL.get().create(level)
    let hordeEntityC = $TGEntities.REVENANT.get().create(level)
    // hordeEntityC.setPatrolLeader(true)
    // hordeEntityC.findPatrolTarget()

    hordeEntityA.setPos(spawnLocation.x, spawnLocation.y, spawnLocation.z)
    hordeEntityB.setPos(spawnLocation.x, spawnLocation.y, spawnLocation.z)
    hordeEntityC.setPos(spawnLocation.x, spawnLocation.y, spawnLocation.z)
    let vec3 = new Vec3d(centerPos.x, centerPos.y, centerPos.z)
    player.tell(1)
    hordeEntityA.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
    hordeEntityB.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
    hordeEntityC.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
    player.tell(2)
    level.addFreshEntityWithPassengers(hordeEntityA)
    level.addFreshEntityWithPassengers(hordeEntityB)
    level.addFreshEntityWithPassengers(hordeEntityC)
})