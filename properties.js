const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true 
};

// getting property names
const key = Object.keys(bottle)
// console.log(key)
// getting values
const values = Object.values(bottle)
// console.log(values)

const pairs = Object.entries(bottle)
console.log(pairs) // two dimensional array te pair koire show korbe
// Object.seal(bottle) // seal korle delete korte parbena
Object.freeze(bottle); // freeze, seal er kachakachi jinish
delete bottle.isCleaned; // isCleaned will be removed
console.log(bottle)