function max_profit(prices, n) {
    var buy = prices[0], max_profit = 0;
    for (var i = 1; i < n; i++) {
        if (buy > prices[i]) {
            buy = prices[i]
        } else if (prices[i] - buy > max_profit) {
            max_profit = prices[i] - buy
        }
    }
    console.log(max_profit)
}

var prices = [7, 1, 5, 3, 6, 4];
var n = prices.length;
max_profit(prices, n) 