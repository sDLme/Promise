
function solution(N) {

  const liked = [
    {
      id: 12,
      name: 'LikeBrands'
    },
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

  const p2 = Promise.all([liked,brand])

  return p2.then(data => {

    let arr = []

    for(let i= 0; i < data[0].length; i++) {
      arr.push(data[0][i].name)
    }

   if(N > data[0].length) {
     for(let i= 0; i < (N - data[0].length); i++) {
       arr.push(data[1][i].name)
     }
   }

  console.log(arr)
  })

}

console.log(solution(5))