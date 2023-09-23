//include()
const array9 = [1, 2, 3]
console.log(array9.includes(2)) // true
const pets = ['cat', 'dog', 'bat']
console.log(pets.includes('cat')) // true
console.log(pets.includes('at')) //  false

//reverse()
const array10 = ['one', 'two', 'three']
console.log('array10:', array10)
//  ["one", "two", "three"]
const reversed = array10.reverse()
console.log('reversed:', reversed)
//  ["three", "two", "one"]

//sorting()
const products = [
  { id: 123, name: 'bag' },
  { id: 2, name: 'pen' },
  { id: 33, name: 'BAG' }
]

const sortByProductId = products.sort((a, b) => a.id - b.id)
console.log(sortByProductId)

const sortByProductName = products.sort((a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()
  if (nameA < nameB) return -1
  else if (nameA > nameB) return 1
  else return 0
})
console.log(sortByProductId)

//concat()
const array11 = ['a', 'b', 'c']
const array12 = ['d', 'e', 'f']
const array13 = array11.concat(array12)
console.log(array13)

//indexOf()
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(beasts.indexOf('bison')) // 1
// start from index 2
console.log(beasts.indexOf('bison', 2)) // 4
console.log(beasts.indexOf('giraffe')) // -1
