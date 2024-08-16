ClientEvents.highPriorityAssets(event => {
    function registeTips(key) {
        let translateKey = `kubejs.tip.${key}`
        event.add(new ResourceLocation(`kubejs:tips/${key}.json`), { "tip": { "translate": translateKey } })
    }

    for (let i = 1; i <= 11; i++) {
        registeTips(`tip_${i + 1}`)
    }
})