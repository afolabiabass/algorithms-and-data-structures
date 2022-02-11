function minimumSwaps(arr) {
    const n = arr.length;
    let minSwaps = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (arr[j] > arr[j + 1]) {
                const t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
                minSwaps++;
            }
        }
    }
    
    return minSwaps;
}