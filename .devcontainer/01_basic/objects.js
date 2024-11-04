//singleton
//object.create

//object literals

const mysym = Symbol("key1")

const jsuser = {
    name: "Harsh",
    [mysym]: "mykey",
    age: 18,
    location: "Indore"
}

// console.log(jsuser.age)
// console.log(jsuser["age"])
// console.log(jsuser[mysym])

jsuser.age = 20
//Object.freeze(jsuser)
//jsuser.age = 24
console.log(jsuser.age)

jsuser.greeting = function(){
    console.log("Hello")
}

jsuser.greetingTwo = function(){
    console.log(`Hello,${this.name}`)
}
console.log(jsuser.greeting())
console.log(jsuser.greetingTwo())
