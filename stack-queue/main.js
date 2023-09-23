//push()
const animals = ['pigs', 'goats', 'sheep']
const count = animals.push('cows')
console.log(count) //  4
console.log(animals) // ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs')
console.log(animals)
//  ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

//pop()
console.log(animals.pop())
console.log(animals)
// ["pigs", "goats", "sheep", "cows", "chickens", "cats"]
console.log(`length:${animals.length}`) //6

//shift()
const array4 = [1, 2, 3]
const firstElement = array4.shift()
console.log(array4) // [2, 3]
console.log(firstElement) // 1

//unshift()
const array5 = [1, 2, 3]
console.log(array5.unshift(4, 5))
console.log(array5) // [4, 5, 1, 2, 3]
