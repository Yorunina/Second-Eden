// priority: 100

const { GetColonyByEntity } = require("../../utils/colony")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")
const { CustomRaidEntityType } = require("../../model/custom_raid_entity")
const { $PathfinderMob } = require("packages/net/minecraft/world/entity/$PathfinderMob")
const { $UUID } = require("packages/java/util/$UUID")


ItemEvents.entityInteracted('kubejs:custom_raid_book', event => {
    let { target, level, item, player } = event
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)
    if (!colony) return
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()

    let chunkX = Math.floor(spawnLocation.x / 16)
    let chunkZ = Math.floor(spawnLocation.z / 16)
    let blockX = spawnLocation.x % 16
    let blockZ = spawnLocation.z % 16

    let targetChunk = level.getChunk(chunkX, chunkZ, $ChunkStatus.SURFACE, true)
    let spawnY = targetChunk.getHeight('motion_blocking', blockX, blockZ) + 1

    if (!(item.hasNBT() && item.nbt.contains('entityList'))) {
        player.tell(Text.translatable('msg.player.raid.can_not_summon_custom.1').red())
        return
    }
    let entityList = item.nbt.getCompound('entityList')

    entityList.allKeys.forEach(entityTypeKey => {
        let entityModelNbt = entityList.getCompound(entityTypeKey)
        let entityType = entityModelNbt.getString('entityType')
        let count = entityModelNbt.getInt('count')
        let modifiers = entityModelNbt.getCompound('modifiers')
        let entityModel = new CustomRaidEntityType(entityType, count).readFromNbtModifiers(modifiers)
        for (let i = 0; i < count; i++) {
            /**@type {$PathfinderMob} */
            let entity = level.createEntity(entityType)

            entityModel.modifiers.forEach((value, key, map) => {
                entity.modifyAttribute(value.name, value.identifier, value.amount, value.operation)
            })
            entity.

            entity.heal(entity.getMaxHealth())

            entity.persistentData.put('patrolTarget', { 'patrolling': NBT.intTag(1), 'x': NBT.floatTag(target.block.pos.x), 'y': NBT.floatTag(target.block.pos.y), 'z': NBT.floatTag(target.block.pos.z) })
            entity.persistentData.put('custom_loot', 'custom_raid')

            SetLongDistancePatrolGoal(entity)

            entity.setPersistenceRequired()
            entity.setPos(spawnLocation.x + Math.random() * 3, spawnY, spawnLocation.z + Math.random() * 3)
            entity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
            level.addFreshEntityWithPassengers(entity)

        }
    })

    player.tell(Text.translatable('msg.custom_raid_book.using.1', Text.gold(spawnLocation.x), Text.gold(spawnLocation.z)))
    item.shrink(1)
})



