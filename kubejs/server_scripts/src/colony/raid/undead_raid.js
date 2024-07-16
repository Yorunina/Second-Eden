// priority: 100

const { GetColonyByEntity, CheckColonyMember } = require("../../utils/colony")
const { $TGEntities } = require("packages/com/lion/graveyard/init/$TGEntities")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")
const { RandomGet } = require("../../utils/common")
const { $RevenantEntity } = require("packages/com/lion/graveyard/entities/$RevenantEntity")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")


ItemEvents.entityInteracted('kubejs:undead_raid_book', event => {
    let { target, level, item, player } = event
    if (target.type != 'minecolonies:citizen') return

    let rank = item.nbt ? Math.min(item.nbt.getInt('rank'), 5) : 1
    if (!rank) rank = 1

    let colony = GetColonyByEntity(target)
    if (!colony) return
    if (!CheckColonyMember(colony, player)) {
        player.setStatusMessage(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()

    let chunkX = Math.floor(spawnLocation.x / 16)
    let chunkZ = Math.floor(spawnLocation.z / 16)
    let blockX = spawnLocation.x % 16
    let blockZ = spawnLocation.z % 16

    let targetChunk = level.getChunk(chunkX, chunkZ, $ChunkStatus.SURFACE, true)
    let spawnY = targetChunk.getHeight('motion_blocking', blockX, blockZ) + 1

    for (let i = 0; i < 8 * rank; i++) {
        let entityList = [$TGEntities.GHOUL]
        switch (true) {
            case i > 8: entityList.push($TGEntities.REVENANT)
            case i > 16: entityList.push($TGEntities.CORRUPTED_PILLAGER)
            case i > 24: entityList.push($TGEntities.CORRUPTED_VINDICATOR)
            case i > 32: entityList.push($TGEntities.ACOLYTE)
        }
        /** @type {$RevenantEntity} */
        let hordeEntity = RandomGet(entityList).get().create(level)
        hordeEntity.setCanBurnInSunlight(false)
        hordeEntity.setTarget(target)

        hordeEntity.persistentData.put('patrolTarget', { 'patrolling': NBT.intTag(1), 'x': NBT.floatTag(target.block.pos.x), 'y': NBT.floatTag(target.block.pos.y), 'z': NBT.floatTag(target.block.pos.z) })

        hordeEntity.persistentData.put('custom_loot', 'undead_raid')

        SetLongDistancePatrolGoal(hordeEntity)

        hordeEntity.modifyAttribute('generic.armor', 'DAA7175A-C74D-4622-9F51-D2D97A0EA85B', 0.5 * rank, 'addition')
        hordeEntity.modifyAttribute('generic.attack_damage', '89AF1558-9D04-40FB-ABB8-730F44741FBB', 1 * rank, 'addition')
        hordeEntity.modifyAttribute('generic.max_health', '51917664-66B9-4E23-AF0B-934B1B57ABF1', 5 * rank, 'addition')
        hordeEntity.heal(hordeEntity.getMaxHealth())


        hordeEntity.setPersistenceRequired()
        hordeEntity.setPos(spawnLocation.x + Math.random() * 3, spawnY, spawnLocation.z + Math.random() * 3)
        hordeEntity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
        level.addFreshEntityWithPassengers(hordeEntity)
    }
    player.tell(Text.translatable('msg.undead_raid_book.using.1', Text.gold(spawnLocation.x), Text.gold(spawnLocation.z)))
    item.shrink(1)
})