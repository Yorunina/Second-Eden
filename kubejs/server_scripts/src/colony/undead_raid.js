const { $GhoulEntity } = require("packages/com/lion/graveyard/entities/$GhoulEntity")
const { GetColonyByEntity } = require("../utils/colony")
const { $TGEntities } = require("packages/com/lion/graveyard/init/$TGEntities")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")
const { $AttributeModifier } = require("packages/net/minecraft/world/entity/ai/attributes/$AttributeModifier")

// const HordeSlowEffect= new $AttributeModifier(UUID.fromString('020E0DFB-87AE-4653-9556-831010E291A1'), 'Slowness effect', -0.3, 'addition')

ItemEvents.entityInteracted('kubejs:undead_raid_book', event => {
    let { target, level, item, player } = event
    if (target.type != 'minecolonies:citizen') return

    let rank = item.nbt ? Math.min(item.nbt.getInt('rank'), 5) : 0
    if (!rank) rank = 0

    let colony = GetColonyByEntity(target)
    if (!colony) return
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()
    for (let i = 0; i < 10 * (rank + 1); i++) {
        let hordeEntity = $TGEntities.GHOUL.get().create(level)
        hordeEntity.setPatrolTarget(target.block.pos)
        hordeEntity.setCanBurnInSunlight(false)
        hordeEntity.setTarget(target)
        
        hordeEntity.setPersistenceRequired()
        hordeEntity.setPos(spawnLocation.x + Math.random() * 3, spawnLocation.y, spawnLocation.z + Math.random() * 3)
        hordeEntity.finalizeSpawn(level, level.getCurrentDifficultyAt(spawnLocation), $MobSpawnType.PATROL, null, null)
        level.addFreshEntityWithPassengers(hordeEntity)
    }
    player.tell(Text.translatable('msg.undead_raid_book.using.1', Text.gold(spawnLocation.x), Text.gold(spawnLocation.z)))
    item.shrink(1)
})
