//const tinder = new object()
const tinder = {}

tinder.id= "1234"
tinder.name = "rahul"
tinder.log = false

//console.log(tinder)

const regularUser = {
    email: "rahul@gmail.com",
    fullname: {
        userfullname: {
        firstname: "rahul",
        lastname: "choudhary"
    }
  }
}

//console.log(regularUser.fullname.userfullname)

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)

const obj3 = {...obj1, ...obj2}
//console.log(obj3)

// console.log(Object.keys(tinder))
// console.log(Object.values(tinder))
// console.log(Object.entries(tinder))

// console.log(tinder.hasOwnProperty('log'))

const course = {
  coursename: "js",
  price: 999,
  instructor: "harsh"
}
//course.instructor
const {instructor} = course
console.log(instructor)

// const navbar = ({company}) => {

// }   react

// navbar(company = "harsh")

{
  name: "harsh",
  coursename: "js",
  price: 100
}

[
  {},
  {},
  {}
]