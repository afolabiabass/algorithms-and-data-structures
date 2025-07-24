function getChange(M, P) {
    const notes = [1, 5, 10, 25, 50, 100]
    let output = [];
    notes.reverse();
    let change = (M - P) * 100; // in cents

    notes.forEach((note) => {
        const reminder = change % note;
        const numberOfNotesCanDivideBy = parseInt((change - reminder) / note)

        change = parseInt(change - (numberOfNotesCanDivideBy * note));
        output.push(numberOfNotesCanDivideBy);
    })

    return output.reverse();
}

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    coins.sort() // sort in descending order, highest coins first
    reminder = amount
    amountOfCoins = []

    if (amount === 0) {
        return 0
    }

    coins.forEach((c) => {
        currentAmount = reminder
        reminder = reminder % c
        amountOfCoins.push((currentAmount - reminder) / c)
    })

    if (reminder === 0) {
        return amountOfCoins.length
    }

    return -1
};

console.log(coinChange([1,2,5], 11));
console.log(coinChange([2], 3));
console.log(coinChange([1], 0));