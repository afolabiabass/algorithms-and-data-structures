function minesweeper(a) {
    let n = [];
    let o = [];
    a.forEach(e => {
        n.push(e.split(''));
    });

    for (let i = 0; i < n.length; i++) {
        let t = [];
        for (let j = 0; j < n[i].length; j++) {
            let count = 0;
            if (n[i][j] === 'X') {
                t.push('X');
                continue;
            }

            if (n[i]?.[j + 1] === 'X') {
                count++
            }

            if (n[i]?.[j - 1] === 'X') {
                count++
            }
            if (n[i - 1]?.[j] === 'X') {
                count++
            }
            if (n[i + 1]?.[j] === 'X') {
                count++
            }
            if (n[i - 1]?.[j - 1] === 'X') {
                count++
            }
            if (n[i - 1]?.[j + 1] === 'X') {
                count++
            }
            if (n[i + 1]?.[j + 1] === 'X') {
                count++
            }
            if (n[i + 1]?.[j - 1] === 'X') {
                count++
            }

            t.push(count);

        }

        o.push(t);
    }

    return o;
}

console.log(minesweeper(["XOO", "OOO", "XXO"]));
console.log(minesweeper(["XOOXXXOO", "OOOOXOXX", "XXOXXOOO", "OXOOOXXX", "OOXXXXOX", "XOXXXOXO", "OOOXOXOX", "XOXXOXOX"]));
console.log(minesweeper(["OOOXXXOXX", "XXXXXXOXX", "XOOXXXXXX", "OOXXOXOXX", "XXXXXXXXX"]));