// priority: 1000

import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

/**
 * 创建一个坐标点在FTBChunk
 * @param {$ServerPlayer_} player
 * @param {$BlockPos} blockPos
 * @param {string} [name=""]
 * @param {number} [color=0xFFFFFF]
 * @returns {void}
 */
export function CreateWaypoint(player, blockPos, name, color) {
    player.sendData(global.WayPointCreateChannel, { 'x': blockPos.x, 'y': blockPos.y, 'z': blockPos.z, 'name': name, 'color': color })
}