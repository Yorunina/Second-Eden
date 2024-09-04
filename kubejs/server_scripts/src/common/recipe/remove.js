// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ output: 'bountiful:bountyboard' })
})