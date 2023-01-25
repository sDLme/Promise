
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

    return  new Promise((resolve, reject) => {
        // get data
        resolve(liked)
    })
    .then(data => {
        // get more data
        data[0].id = 777
        return data
    })
    .then(data => {
        if(N < 5) { 
            return Promise.reject('Error');
        } 
        else {
            return data
        }
    }).catch(error => {
        return error
    })

}


solution(4).then(data => {
  console.log('data->',data)
})
