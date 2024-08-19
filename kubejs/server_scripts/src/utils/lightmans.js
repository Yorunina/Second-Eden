// priority: 1000
const { $MoneyValue } = require("packages/io/github/lightman314/lightmanscurrency/api/money/value/$MoneyValue");
const { $TaxEntry } = require("packages/io/github/lightman314/lightmanscurrency/common/taxes/$TaxEntry");
const { $TaxSaveData } = require("packages/io/github/lightman314/lightmanscurrency/common/taxes/$TaxSaveData");
const { $CoinValue } = require("packages/io/github/lightman314/lightmanscurrency/api/money/value/builtin/$CoinValue");

export const ChocolateCoinList = ['lightmanscurrency:coin_chocolate_netherite', 'lightmanscurrency:coin_chocolate_diamond', 'lightmanscurrency:coin_chocolate_emerald', 'lightmanscurrency:coin_chocolate_gold', 'lightmanscurrency:coin_chocolate_iron', 'lightmanscurrency:coin_chocolate_copper']
export const ChocolateCopperCoinItem = Item.of('lightmanscurrency:coin_chocolate_copper').getItem()
export const CopperCoinItem = Item.of('lightmanscurrency:coin_copper').getItem()

BlockEvents.rightClicked('lightmanscurrency:tax_block', event => {
    let { item, player, block } = event
    if (item.id != 'minecraft:stick') return
    let entryId = block.entityData.getInt('EntryID')
    let taxEntry = $TaxSaveData.GetTaxEntry(entryId, false)

    taxEntry.depositMoney(ConvertIntoMoneyValue(ChocolateCopperCoinItem, 123))
})

/**
 * @param {$Item_} baseItem 
 * @param {number} value 
 * @returns {$MoneyValue}
 */
export function ConvertIntoMoneyValue(baseItem, value) {
    return $CoinValue.fromItemOrValue(baseItem, value, 1)
}


/**
 * 
 * @param {$ItemStack_[]} coinList 
 * @param {number} money 
 * @return {$ItemStack_[]}
 */
export function ConvertMoneyIntoCoinItemList(coinList, money) {
    let i = 1
    let itemList = []
    coinList.forEach(coinItem => {
        let price = Math.pow(10, coinList.length - i)
        i++
        if (money < price) return
        let amount = Math.floor(money / price)
        itemList.push(Item.of(coinItem, amount))
        money = money - price * amount
    })
    return itemList
}