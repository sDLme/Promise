function solution(N) {
  
  // likedArr and brandArr are arrays of objects representing brands
  const likedArr = [{id: 14, name: 'LikeBrands1'}, {id: 14, name: 'LikeBrands'}];
  const brandArr = [{id: 14, name: 'LikeBrands1'}, {id: 8, name: 'Brand2'}, {id: 6, name: 'Brand3'}];

  // Assign resolved Promises of the arrays to variables pLiked and pBrand
  const [pLiked, pBrand] = [Promise.resolve(likedArr), Promise.resolve(brandArr)];

  // Use Promise.all to resolve both Promises and destructure the returned data
  return Promise.all([pLiked,pBrand]).then(([liked, brand]) => {
    let result= [];
    // Combine the two arrays, and use reduce to filter out duplicate brand names
    const concatArr = [...liked, ...brand].reduce((acc, { name }) => {
      // If the brand name is not already in the accumulator, add it
      if(acc.findIndex(({ name: n }) => n === name) === -1) {
        acc.push({ name });
      }
      return acc;
    }, []);

    // If the filtered array is smaller than N, reject the promise
    if(concatArr.length < N) {
      return Promise.reject('Something went wrong')
    } else {
      // Else, add the first N names to the result array
      for(let i = 0; i < N; i++) {
        result.push(concatArr[i].name);
      }
      return result;
    }
  })
  // If the promise is rejected, return the error message
  .catch((errorMessage) => {
    return errorMessage
  })
}

solution(3).then(result => {
  console.log('result->',result)
})