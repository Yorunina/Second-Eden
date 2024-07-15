// priority: 100

const { GetColonyByEntity } = require("../../utils/colony")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")
const { $ChunkStatus } = require("packages/net/minecraft/world/level/chunk/$ChunkStatus")
const { CustomRaidEntityType } = require("../../model/custom_raid_entity")
const { $PathfinderMob } = require("packages/net/minecraft/world/entity/$PathfinderMob")
const { $ServerLevel } = require("packages/net/minecraft/server/level/$ServerLevel")


ItemEvents.entityInteracted('kubejs:custom_raid_book', event => {
    let { target, item, player } = event
    /**@type {$ServerLevel} */
    let level = event.level
    if (target.type != 'minecolonies:citizen') return

    let colony = GetColonyByEntity(target)
    if (!colony) return
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()

    let chunkX = Math.floor(spawnLocation.x / 16)
    let chunkZ = Math.floor(spawnLocation.z / 16)
    let blockX = spawnLocation.x % 16
    let blockZ = spawnLocation.z % 16

    let targetChunk = level.getChunk(chunkX, chunkZ, $ChunkStatus.SURFACE, true)
    let spawnY = targetChunk.getHeight('motion_blocking', blockX, blockZ) + 2

    if (!(item.hasNBT() && item.nbt.contains('entityList'))) {
        player.tell(Text.translatable('msg.player.raid.can_not_summon_custom.1').red())
        return
    }
    let entityList = item.nbt.getCompound('entityList')

    entityList.allKeys.forEach(entityIdentifier => {
        let entityModelNbt = entityList.getCompound(entityIdentifier)
        let entityType = entityModelNbt.getString('entityType')
        let count = entityModelNbt.getInt('count')
        
        let modifiers = entityModelNbt.getCompound('modifiers')
        let entityModel = new CustomRaidEntityType(entityType, count).readFromNbtModifiers(modifiers)
        entityModel.nbt.putString('id', entityType)
        if (entityModelNbt.contains('customNbt')) {
            entityModel.nbt.merge(NBT.toTagCompound(entityModelNbt.getString('customNbt')))
        }
        
        for (let i = 0; i < count; i++) {
            /**@type {$PathfinderMob} */
            let entity = level.createEntity(entityType)
            if (!entityModel.nbt.isEmpty()) {
                entity.mergeNbt(entityModel.nbt)
            }
            
            entityModel.modifiers.forEach((value, key, map) => {
                switch (value.operation) {
                    case 'addition_persistent':
                        entity.setAttributeBaseValue(value.name, entity.getAttributeBaseValue(value.name) + value.amount)
                        break
                    case 'multiply_persistent':
                        entity.setAttributeBaseValue(value.name, entity.getAttributeBaseValue(value.name) + value.amount)
                        break
                    default:
                        entity.modifyAttribute(value.name, key, value.amount, value.operation)
                }
            })

            entity.heal(entity.getMaxHealth())

            entity.persistentData.put('patrolTarget', { 'patrolling': NBT.intTag(1), 'x': NBT.floatTag(target.block.pos.x), 'y': NBT.floatTag(target.block.pos.y), 'z': NBT.floatTag(target.block.pos.z) })
            entity.persistentData.put('custom_loot', 'custom_raid')

            SetLongDistancePatrolGoal(entity)

            entity.setPersistenceRequired()
            entity.setPos(spawnLocation.x + Math.random() * 5, spawnY, spawnLocation.z + Math.random() * 5)
            entity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
            level.addFreshEntityWithPassengers(entity)
        }
    })

    player.tell(Text.translatable('msg.custom_raid_book.using.1', Text.gold(spawnLocation.x), Text.gold(spawnLocation.z)))
    item.shrink(1)
})



