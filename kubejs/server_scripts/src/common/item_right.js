// priority: 500

const { $AltarRecipe } = require("packages/com/github/tartaricacid/touhoulittlemaid/crafting/$AltarRecipe")
const { $EntityType } = require("packages/net/minecraft/world/entity/$EntityType")

ItemEvents.rightClicked('kubejs:spawn_maid_box', event => {
    let { item, player, level } = event
    let ray = player.rayTrace(16, false)
    if (!ray.block) return
    let block = ray.block
    let recipe = level.getRecipeManager().byType($InitRecipes.ALTAR_CRAFTING).get(new ResourceLocation('touhou_little_maid:altar/spawn_box'))
    if (recipe instanceof $AltarRecipe) {
        recipe.spawnOutputEntity(level, block.getPos().above(), null)
        item.shrink(1)
    }
})