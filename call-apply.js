const kabir = {
    id: 101,
    money: 5000,
    name: 'Kabir singh',
    wantTreat: function(expense, bokshish, tax){
        this.money = this.money - expense - bokshish - tax;
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

// call
// kabir.wantTreat.call(shetty, 500, 100, 50);
// kabir.wantTreat.call(shetty, 300, 50, 30);
// 500 = expense, 100 = bokshish, 50 = tax

kabir.wantTreat.apply(reddy, [500, 100, 50]) // reddy = .this
kabir.wantTreat.apply(reddy, [1000, 200, 80]) 