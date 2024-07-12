import { $WaypointType } from "packages/dev/ftb/mods/ftbchunks/client/map/$WaypointType"
import { $BlockPos } from "packages/net/minecraft/core/$BlockPos"

// priority: 1000
const { $WaypointImpl } = require("packages/dev/ftb/mods/ftbchunks/client/map/$WaypointImpl")
const { $MapDimension } = require("packages/dev/ftb/mods/ftbchunks/client/map/$MapDimension")

/**
 * 创建一个坐标点在FTBChunk
 * @param {$BlockPos} position
 * @param {string} [name=""]
 * @param {number} [color=0xFFFFFF]
 * @returns {void}
 */
export function CreateWaypoint(position, name, color) {
    let mapDimension = $MapDimension.getCurrent().get()
    let waypoint = new $WaypointImpl($WaypointType.DEFAULT, mapDimension, position)
    waypoint.setName(name)
    waypoint.setColor(color)
    mapDimension.waypointManager.add(waypoint)
}

/**
 * 按照名字移除坐标点
 * @param {object || string} way
 */
export function RemoveWaypointbyString(name) {
    let waypointManager = $MapDimension.getCurrent().waypointManager
    for (let waypoint of waypointManager) {
        if (waypoint.name == name) {
            waypointManager.remove(waypoint)
            return
        }
    }
}

/**
 * 通过位置移除坐标点
 * @param {$BlockPos} position
 */
export function RemoveWaypointbyPos(position) {
    let waypointManager = $MapDimension.getCurrent().waypointManager
    for (let waypoint of waypointManager) {
        if (
            waypoint.x == position.x &&
            waypoint.y == position.y &&
            waypoint.z == position.z) {
            waypointManager.remove(waypoint)
            return
        }
    }
}