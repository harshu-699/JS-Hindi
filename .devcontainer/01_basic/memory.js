//Stack (primitive), Heap (Non primitive)

let myname= "harsh"
let name = myname
name = "ayan"

console.log( myname )
console.log( name)

let user1 = {
    email: "harsh@google.com",
    upi: "user@ybl"
}

let user2 = user1

user2.email = "user@google.com"

console.log(user1.email)
console.log(user2.email)