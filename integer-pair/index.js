var integerPairs = (a) => {
    let pairs = [];
    let pair = [];
    
    for (let i = 0; i < a.length; i++) {
      if (pair.length === 0) {
        pair.push(a[i]);
      }
      
      if (a[i + 1] !== a[i] + 1 || i === a.length - 1) {
        pair.push(a[i]);
      }
      
      if (pair.length === 2) {
        pairs.push(pair);
        pair = [];
      }
    }
    
    return pairs;
  }
  
  console.log(integerPairs([1,3,4]));
  console.log(integerPairs([1,2,3,4,5]));
  console.log(integerPairs([1,3,4,5,6,7,9]));