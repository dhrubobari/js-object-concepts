const student = {
    name: 'Javed ali', 
    id: 7,
    major: 'physics',
    goodStudent: true 
};
/*
for(let i = 0; i < 10; i++) {}
for(const num of numbers) {} // array
for(const prop in student) {} // object
*/

for(const prop in student){
    console.log(prop, student[prop])
}

const keys = Object.keys(student)
// console.log(keys);
for(const prop of keys){
    console.log(prop, student[prop])
}

// advanced
const entries = Object.entries(student)
// console.log(entries);
// const [key, value] = ['color', 'yellow'];
for(const [key, value] of Object.entries(student)){
    // console.log(key, value)
}