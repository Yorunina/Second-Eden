// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ output: 'bountiful:bountyboard' })
    event.remove({ output: 'farmingforblockheads:red_fertilizer' })
    event.remove({ output: 'farmingforblockheads:yellow_fertilizer' })
    event.remove({ output: 'farmingforblockheads:green_fertilizer' })
})