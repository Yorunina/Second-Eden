const { OVERLIMIT } = require("../../utils/itemborder")
const { $Block } = require("packages/net/minecraft/world/level/block/$Block")

StartupEvents.registry('block', event => {
    event.create('infinity_oak_log').tag(OVERLIMIT).model('minecraft:block/oak_log')

    // todo 测试，而且没有材质
    // 大学里面的配方也需要把对应需要的材料都给补齐
    event.create('red_ice').tag(OVERLIMIT).randomTick(ctx => {
        let {block, level} = ctx
        let chunkX = Math.floor(block.pos.x / 16)
        let chunkZ = Math.floor(block.pos.z / 16)
        let directionList = [Direction.EAST, Direction.WEST, Direction.NORTH, Direction.SOUTH, Direction.DOWN, Direction.UP]
        let placeCount = 0
        for (let i = 0; i < directionList.length; i++) {
            let directionBlock = block.offset(directionList[i])
            let newChunkX = Math.floor(directionBlock.pos.x / 16)
            let newChunkZ = Math.floor(directionBlock.pos.z / 16)
            // 防止可能的无限增殖，限制在同一个chunk
            if (newChunkX != chunkX || newChunkZ != chunkZ || directionBlock.blockState.solid || directionBlock.blockState.isAir()) {
                continue
            }
            level.setBlock(directionBlock.pos, block.blockState, $Block.UPDATE_NONE)
            placeCount ++
        }
        if (placeCount > 0) {
            level.setBlock(block.pos, 'minecraft:air', $Block.UPDATE_NONE)
        } else {
            level.setBlock(block.pos, 'kubejs:dead_red_ice', $Block.UPDATE_NONE)
        }
    })

    event.create('dead_red_ice').tag(OVERLIMIT)
})