const person = {
    age:30,
    height:5.2,
    weight:50
 }
 const {age,...other} = person;
 console.log(age)
 console.log(other)