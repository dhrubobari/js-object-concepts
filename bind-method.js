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

const shetty = {
    id: 99,
    money: 6000,
    name: 'Sunil shetty',
}

kabir.wantTreat(600);
const needTreat = kabir.wantTreat.bind(reddy);

needTreat(500);
needTreat(300);
needTreat(150);
kabir.wantTreat(200);

const moreTreat = kabir.wantTreat.bind(shetty);
moreTreat(3000);