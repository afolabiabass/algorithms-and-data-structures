function luckBalance(k, contests) {
    // Write your code here
    const totalLuck = contests.reduce((n, a) => {
        return n + a[0];
    }, 0);
    
    const mustWinImportantRacesLuck = contests.filter((a) => {
        return a[1] == 1;
    }).map((a) => {
        return a[0];
    }).sort((a, b) => {
        return b - a;
    }).slice(k).reduce((n, a) => {
        return n + a;
    }, 0);

    return totalLuck - (mustWinImportantRacesLuck * 2);
}