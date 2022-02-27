// 1. using object literal
const student = { name: 'shakib al hasan', profession: 'cricketer' };

// 2. constructor
const person = new Object();
// console.log(person);

// 3. 
const human = Object.create(student);
// console.log(human.profession);

// 4.
class People {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
const peop = new People('rakib', 12);
// console.log(peop)

// from quiz

// const object = {a:1, b:7, c:3, length:2};
// console.log(Object.keys(object).length) // length = 4,

// const obj1 = {module: 35, video:2}; const obj2= {module: 35, video:2};
// console.log(obj1 === obj2);

// const getGirlFriend= (name = "chokina")=>"name";
// console.log(getGirlFriend()); 