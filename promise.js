
function solution(N) {
  const likedArr = [
    {
      id: 14,
      name: 'LikeBrands1'
    },
    {
      id: 14,
      name: 'LikeBrands'
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
  pLiked = Promise.resolve(likedArr)

  return Promise.all([pLiked,pBrand]).then(data => {
    let result= [];
    const concatArr = data[0].concat(data[1])
                    ?.filter((value, index, self) => index === self.findIndex((t => t.name === value.name)));

    if(concatArr.length < N) {
        return Promise.reject('Something went wrong again')
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

solution(4).then(result => {
  console.log('result->',result)
})