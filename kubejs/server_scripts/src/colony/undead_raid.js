// priority: 100
const { GetColonyByEntity, CheckColonyOwner } = require("../utils/colony")
const { $TGEntities } = require("packages/com/lion/graveyard/init/$TGEntities")
const { $MobSpawnType } = require("packages/net/minecraft/world/entity/$MobSpawnType")

// const HordeSlowEffect= new $AttributeModifier(UUID.fromString('020E0DFB-87AE-4653-9556-831010E291A1'), 'Slowness effect', -0.3, 'addition')

ItemEvents.entityInteracted('kubejs:undead_raid_book', event => {
    let { target, level, item, player } = event
    if (target.type != 'minecolonies:citizen') return

    let rank = item.nbt ? Math.min(item.nbt.getInt('rank'), 5) : 0
    if (!rank) rank = 1

    let colony = GetColonyByEntity(target)
    if (!colony) return
    if (!CheckColonyOwner(colony, player)) {
        player.status(Text.translatable('msg.player.common.not_colony_owner').gold())
        return
    }
    let spawnLocation = colony.getRaiderManager().calculateSpawnLocation()
    for (let i = 0; i < 10 * rank; i++) {
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


const PatrolableHordeEntityType = {
    'acolyte': $TGEntities.ACOLYTE,
    'corrupted_pillager': $TGEntities.CORRUPTED_PILLAGER,
    'corrupted_vindicator': $TGEntities.CORRUPTED_VINDICATOR,
    'ghoul': $TGEntities.GHOUL,
    "revenant": $TGEntities.REVENANT,
}