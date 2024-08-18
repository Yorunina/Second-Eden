// priority: 1000
const ChocolateCoinList = ['lightmanscurrency:coin_chocolate_netherite', 'lightmanscurrency:coin_chocolate_diamond', 'lightmanscurrency:coin_chocolate_emerald', 'lightmanscurrency:coin_chocolate_gold', 'lightmanscurrency:coin_chocolate_iron', 'lightmanscurrency:coin_chocolate_copper']

/**
 * 
 * @param {$ItemStack_[]} coinList 
 * @param {number} money 
 * @return {$ItemStack_[]}
 */
function ConvertMoneyIntoCoinItemList(coinList, money) {
    let i = 1
    let itemList = []
    coinList.forEach(coinItem => {
        let price = Math.pow(10, coinList.length - i)
        i++
        console.log(price)
        if (money < price) return
        let amount = Math.floor(money / price)
        itemList.push(Item.of(coinItem, amount))
        money = money - price * amount
    })
    return itemList
}