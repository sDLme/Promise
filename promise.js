
function solution(N) {
  const likedArr = [
    {
      id: 10,
      name: 'LikeBrands'
    },
    {
      id: 14,
      name: 'LikeBrands1'
    },
    
  ]

  const brandArr = [
    {
      id: 14,
      name: 'LikeBrands1'
    },
    {
      id: 8,
      name: 'Brand2'
    },
    {
      id: 6,
      name: 'Brand3'
    }
  ]

  pBrand = Promise.resolve(brandArr)

  pLiked = new Promise((resolve, reject) => {
    if(N < 5) {
      resolve(likedArr)
     } else {
       reject('Something went wrong')
     }
  })

  return Promise.all([pLiked,pBrand]).then(data => {
    let result= [];
    const concatArr = data[0].concat(data[1])
                    ?.filter((value, index, self) => index === self.findIndex((t => t.name === value.name)));

    if(concatArr.length < N) {
        result = Promise.reject('Something went wrong again')
    } else {
      for(let i= 0; i < N; i++) {
        result.push(concatArr[i].name)
      }
    }
    
      return result;

  })
  .catch(errorMessage => {
    return errorMessage
  })
}

solution(2).then(result => {
  console.log('result->',result)
})