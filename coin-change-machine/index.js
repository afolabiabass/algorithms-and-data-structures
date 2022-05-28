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

console.log(getChange(5, 0.99));
console.log(getChange(3.14, 1.99));
console.log(getChange(3, 0.01));
console.log(getChange(4, 3.14));
console.log(getChange(0.45, 0.34));