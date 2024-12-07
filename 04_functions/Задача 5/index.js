const totalSum = (priceItem, amountItem, discountItem) => priceItem * amountItem * (100 - discountItem) / 100

console.log(totalSum(25000, 3, 20))