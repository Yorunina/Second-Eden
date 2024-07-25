// priority: 100

const { GetColonyByEntity, CheckColonyMember } = require("../../utils/colony")
const { $TGEntities } = require("packages/com/lion/graveyard/init/$TGEntities")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")
const { RandomGet } = require("../../utils/common")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")
const { $Entity } = require("packages/net/minecraft/world/entity/$Entity")
const { $Level } = require("packages/net/minecraft/world/level/$Level")
const { $IColony } = require("packages/com/minecolonies/api/colony/$IColony")
const { $WraithEntity } = require("packages/com/lion/graveyard/entities/$WraithEntity")
const { SetLongDistancePatrolGoal } = require("../../entity/distance_patrol_goal")


ItemEvents.entityInteracted('kubejs:undead_raid_book', event => {
    let { target, level, item, player } = event
    if (target.type != 'minecolonies:citizen') return

    let rank = item.nbt ? Math.min(item.nbt.getInt('rank'), 10) : 1
    if (!rank) rank = 1

    let colony = GetColonyByEntity(target)
    if (!colony) return
    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }

    let spawnLocation = spawnUndeadRaidEntities(rank, target, level, colony)
    player.tell(Text.translatable('msg.undead_raid_book.using.1', Text.gold(spawnLocation.x), Text.gold(spawnLocation.z)))

    if (rank >= 5) {
        spawnLocation = spawnUndeadRaidEntities(rank, target, level, colony)
        player.tell(Text.translatable('msg.undead_raid_book.using.2', Text.gold(spawnLocation.x), Text.gold(spawnLocation.z)))
    }
    item.shrink(1)
})



/**
 * 
 * @param {number} rank 
 * @param {$Entity} target 
 * @param {$Level} level 
 * @param {$IColony} colony 
 * @returns 
 */
function spawnUndeadRaidEntities(rank, target, level, colony) {
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()

    let chunkX = Math.floor(spawnLocation.x / 16)
    let chunkZ = Math.floor(spawnLocation.z / 16)
    let blockX = spawnLocation.x % 16
    let blockZ = spawnLocation.z % 16

    let targetChunk = level.getChunk(chunkX, chunkZ, $ChunkStatus.SURFACE, true)
    let spawnY = targetChunk.getHeight('motion_blocking', blockX, blockZ) + 1
    // 生成头领单位
    let leaderEntityType = $TGEntities.ACOLYTE
    let leaderEntity = leaderEntityType.get().create(level)
    leaderEntity.setPatrolLeader(true)
    leaderEntity.setCanBurnInSunlight(false)
    leaderEntity.setTarget(target)
    leaderEntity.persistentData.put('patrolTarget', { 'patrolling': NBT.intTag(1), 'x': NBT.floatTag(target.block.pos.x), 'y': NBT.floatTag(target.block.pos.y), 'z': NBT.floatTag(target.block.pos.z) })
    leaderEntity.persistentData.putString('custom_loot', 'undead_raid_leader')
    leaderEntity.persistentData.putInt('rank', rank)
    SetLongDistancePatrolGoal(leaderEntity)
    leaderEntity.modifyAttribute('generic.armor', 'DAA7175A-C74D-4622-9F51-D2D97A0EA85B', 1 * rank, 'addition')
    leaderEntity.modifyAttribute('generic.attack_damage', '89AF1558-9D04-40FB-ABB8-730F44741FBB', 1 * rank, 'addition')
    leaderEntity.modifyAttribute('generic.max_health', '51917664-66B9-4E23-AF0B-934B1B57ABF1', 10 * rank, 'addition')
    leaderEntity.heal(leaderEntity.getMaxHealth())
    leaderEntity.setPersistenceRequired()
    leaderEntity.setPos(spawnLocation.x, spawnY, spawnLocation.z)
    leaderEntity.potionEffects.add('minecraft:glowing', 20 * 300, 0, false, false)
    leaderEntity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
    level.addFreshEntityWithPassengers(leaderEntity)

    let entityAmount = 4 + 4 * rank
    let entityList = [$TGEntities.GHOUL]
    let typeRandom = Math.random()
    if (typeRandom < 0.6) {
        entityList = [$TGEntities.GHOUL, $TGEntities.GHOUL, $TGEntities.GHOUL, $TGEntities.REVENANT, $TGEntities.ACOLYTE]
    } else if (typeRandom < 0.9) {
        entityList = [$TGEntities.CORRUPTED_VINDICATOR, $TGEntities.CORRUPTED_PILLAGER, $TGEntities.CORRUPTED_PILLAGER]
    } else {
        entityList = [$TGEntities.NIGHTMARE, $TGEntities.GHOUL, $TGEntities.GHOUL, $TGEntities.WRAITH]
    }

    // 生成其他单位
    for (let i = 0; i < entityAmount; i++) {
        /** @type {$WraithEntity} */
        let entity = RandomGet(entityList).get().create(level)
        entity.setCanBurnInSunlight(false)
        entity.setTarget(target)
        entity.persistentData.put('patrolTarget', { 'patrolling': NBT.intTag(1), 'x': NBT.floatTag(target.block.pos.x + Math.random() * 3), 'y': NBT.floatTag(target.block.pos.y), 'z': NBT.floatTag(target.block.pos.z + Math.random() * 3) })
        entity.persistentData.putString('custom_loot', 'undead_raid')
        entity.persistentData.putInt('rank', rank)
        SetLongDistancePatrolGoal(entity)
        entity.modifyAttribute('generic.armor', 'DAA7175A-C74D-4622-9F51-D2D97A0EA85B', 0.5 * rank, 'addition')
        entity.modifyAttribute('generic.attack_damage', '89AF1558-9D04-40FB-ABB8-730F44741FBB', 0.5 * rank, 'addition')
        entity.modifyAttribute('generic.max_health', '51917664-66B9-4E23-AF0B-934B1B57ABF1', 5 * rank, 'addition')
        entity.heal(entity.getMaxHealth())
        entity.setPersistenceRequired()
        entity.setPos(spawnLocation.x + Math.random() * 3, spawnY, spawnLocation.z + Math.random() * 3)
        entity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
        level.addFreshEntityWithPassengers(entity)
    }
    return spawnLocation
}