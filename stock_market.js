

function getMaxProfit(stock_prices_yesterday) {

  if (stock_prices_yesterday.length < 2) {
    console.log("You need at least two prices")
  }

  let minPrice = stock_prices_yesterday[0]
  let maxProfit = stock_prices_yesterday[1] - stock_prices_yesterday[0]

  for (var i = 1; i < stock_prices_yesterday.length; i++) {
    let currentPrice = stock_prices_yesterday[i]

    if ((currentPrice - minPrice) > maxProfit )
    {
      maxProfit = currentPrice - minPrice
    }

    minPrice = Math.min(minPrice, currentPrice)
  }

  return maxProfit









}
