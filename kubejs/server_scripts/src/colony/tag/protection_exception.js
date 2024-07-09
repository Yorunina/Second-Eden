ServerEvents.tags('block', event => {
    // 允许通过tag增加互动豁免
    event.add('minecolonies:protectionexception', [])
})