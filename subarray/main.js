//splice()
const months = ['Jan', 'March', 'April', 'June']
months.splice(1, 0, 'Feb')
// inserts at index 1
console.log(months)
//  ["Jan", "Feb", "March", "April", "June"]
months.splice(4, 1, 'May')
// replaces 1 element at index 4
console.log(months)
//   ["Jan", "Feb", "March", "April", "May"]

let myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon']
let removed = myFish.splice(3, 1)
console.log(removed)
// myFish is ["angel", "clown", "drum", "sturgeon"]
// removed is ["mandarin"]

//slice()
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
console.log(animals.slice(2))
// ["camel", "duck", "elephant"]
console.log(animals.slice(2, 4))
// ["camel", "duck"]
console.log(animals.slice(1, 5))
// ["bison", "camel", "duck", "elephant"]
console.log(animals.slice(-2))
// ["duck", "elephant"]
console.log(animals.slice(2, -1))
// ["camel", "duck"]
console.log(animals.slice())
// ["ant", "bison", "camel", "duck", "elephant"]

//fill()
const array8 = [1, 2, 3, 4]
// fill with 0 from position 2 until position 3
console.log(`array8.fill(0,2,4):${array8.fill(0, 2, 4)}`)
//  [1, 2, 0, 0]
// fill with 5 from position 1
console.log(`array8.fill(5,1):${array8.fill(5, 1)}`)
// [1, 5, 5, 5]
console.log(`array8.fill(6):${array8.fill(6)}`)
//  [6, 6, 6, 6]
