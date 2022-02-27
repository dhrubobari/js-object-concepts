// console.log(this)
const kabir = {
    id: 101,
    money: 5000,
    name: 'Kabir singh',
    wantTreat: function(expense){
        this.money = this.money - expense;
        console.log(this)
        return this.money; // I forget to return xD
    }
}
const reddy = {
    id: 102,
    money: 4500,
    name: 'Arjun reddy',
}
function add(){
    console.log(this)
}