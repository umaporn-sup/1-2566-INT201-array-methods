//forEach()
let letters = [...'hello world']
let uppercase = ''
letters.forEach((letter) => {
  uppercase += letter.toUpperCase()
})
console.log(`uppercase:${uppercase}`) // "HELLO WORLD"

const products = [
  { id: 123, name: 'bag' },
  { id: 2, name: 'pen' },
  { id: 33, name: 'BAG' }
]

products.forEach((product) => console.log(product.id)) //123 2 33

//filter()
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter((word) => word.length > 6)
console.log(result)
//["exuberant", "destruction", "present"]

//map()
const array2 = [1, 4, 9, 16]
const map1 = array2.map((x) => x * 2)
console.log(map1)
// [2, 8, 18, 32]

const map2 = products.map((product) => product.name)
console.log(map2) //[('bag', 'pen', 'BAG')]

//find()
const array6 = [5, 12, 8, 130, 44]
const found = array6.find((element) => element > 10)
console.log(found) // 12
//findIndex()
const array7 = [5, 12, 8, 130, 44]
console.log(array7.findIndex((element) => element > 13))
//3

//every()
const isBelowThreshold = (currentValue) => currentValue < 40
const array3 = [1, 30, 39, 29, 10, 13]
console.log(`array3.every(isBelowThreshold):${array3.every(isBelowThreshold)}`)
//true
console.log(`array3.some(isBelowThreshold):${array3.some(isBelowThreshold)}`)
//true

//some()
const array = [1, 2, 3, 4, 5] // checks whether an element is even
const even = (element) => element % 2 === 0
console.log(`array.some(even):${array.some(even)}`) // true
console.log(`array.every(even):${array.every(even)}`) // false

//reduce()
const nums = [5, 4, 100, -1, 0, 2, 19]
const maxNum = nums.reduce((max, num) => Math.max(max, num))
console.log(maxNum) //100

const product = [1, 'RED', 102]
const productDetail = product.reduce((detail, prop) => {
  return prop === 'RED' ? detail?.concat('R') : detail?.concat(prop)
}, '')
console.log(productDetail) //1R102
