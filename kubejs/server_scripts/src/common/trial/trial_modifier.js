// priority: 500
BlockEvents.rightClicked('trials:trial_spawner', event => {
    let { item, block, player } = event
    if (item.id != 'kubejs:trial_modifier') return
    let lootTable = 'trials:gameplay/spawner_loot'

    if (item.hasNBT()) {
        if (item.nbt.contains('applyType') && item.nbt.getString('applyType') != 'trial_spawner') {
            player.setStatusMessage(Text.translatable('msg.item.trial_modifier.1'))
            return
        }
        if (item.nbt.contains('lootTable')) {
            lootTable = item.nbt.getString('lootTable')
        }
    }

    let entityData = block.getEntityData()
    entityData.putString('SpawnLootTable', lootTable)
    block.mergeEntityData(entityData)

    player.setStatusMessage(Text.translatable('msg.item.trial_spawner.modify.1'))
    item.shrink(1)
})


BlockEvents.rightClicked('trials:trial_vault', event => {
    let { item, block, player } = event
    if (item.id != 'kubejs:trial_modifier') return
    let lootTable = 'trials:gameplay/vault_loot'

    if (item.hasNBT()) {
        if (item.nbt.contains('applyType') && item.nbt.getString('applyType') != 'trial_vault') {
            player.setStatusMessage(Text.translatable('msg.item.trial_modifier.1'))
            return
        }
        if (item.nbt.contains('lootTable')) {
            lootTable = item.nbt.getString('lootTable')
        }
    }

    let entityData = block.getEntityData()
    entityData.putString('VaultLootTable', lootTable)
    block.mergeEntityData(entityData)

    player.setStatusMessage(Text.translatable('msg.item.trial_vault.modify.1'))
    item.shrink(1)
})