
function solution(N) {
  const liked = [
    
    {
      id: 14,
      name: 'LikeBrands1'
    },
    {
      id: 16,
      name: 'LikeBrands2'
    }
  ]
  const brand = [
    {
      id: 10,
      name: 'Brand1'
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

  return  p = new Promise((resolve, reject) => {
    if(N < 5) {
      resolve(liked)
     } else {
       reject('Error')
     }

  }).then(data => {
    let arr = []

      return arr

    }).catch(error => {
      return error
    })

}

solution(5).then(data => {
  console.log('data->',data)
})