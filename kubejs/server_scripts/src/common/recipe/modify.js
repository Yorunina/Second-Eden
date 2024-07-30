// priority: 1000
ServerEvents.recipes(event => {
    event.remove({ output: 'splat:splatter' })
    event.shaped('splat:splatter', ['SSS', 'SSD', '  I'], { S: 'splat:splat_scale', I: 'minecraft:ink_sac', D: 'minecraft:diamond' })
})