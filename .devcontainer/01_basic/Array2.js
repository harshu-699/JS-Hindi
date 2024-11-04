const marvel = ["thor","ironman","hulk"]
const dc = ["superman","flash","batman"]

//marvel.push(dc)

//console.log(marvel)
// const allheros = marvel.concat(dc)
// console.log(allheros)

const allheros = [...marvel, ...dc]
//console.log(allheros)

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_array = another_array.flat(Infinity)
console.log(real_array)

console.log(Array.isArray("Harsh"))
console.log(Array.from("Harsh"))
console.log(Array.from({name:"Harsh"}))  //interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))