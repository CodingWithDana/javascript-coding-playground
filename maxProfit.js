// You are given an integer array prices where prices[i] is the price of NeetCoin on the ith day.

// You may choose a single day to buy one NeetCoin and choose a different day in the future to sell it.

// Return the maximum profit you can achieve. You may choose to not make any transactions, in which case the profit would be 0.

function maxProfit(prices) {
    // best (lowest) buy price so far
    let minPrice = prices[0];
    // best profit so far
    let maxProfit = 0;

    // iterate through the array 'prices' starting from the second day (compare the future days against the first buy day, note cant sell before you buy!)
    for (let i = 1; i < prices.length; i++) {
        const priceToday = prices[i];

        // so if we sold today, what would the profit be?
        const profitToday = priceToday - minPrice;

        // update max profit if today's price is better
        if (profitToday > maxProfit) {
            maxProfit = profitToday;
        }

        // update min price if today is cheaper (better day to buy)
        if (priceToday < minPrice) {
            minPrice = priceToday;
        }
    }
    return maxProfit;
}

// test cases
prices = [10,8,7,5,2];
prices1 = [10,1,5,6,7,1];
console.log(maxProfit(prices));
console.log(maxProfit(prices1));