const student = {
    id: 101,
    name: 'kabir',
    major: 'mathematics',
    subjects: ['english', 'economics', 'maths-b', 'calculus'],
    isRich: false,
    money: 5000,
    bestFriend: {
        name: 'kundu',
        major: 'mathematics'
    },
    takeExam: function(){
        // console.log(this.name, 'taking exam')
    },
    wantTreat: function(expense, bokshish){
        this.money = this.money - expense - bokshish;
        return this.money; // I forget to return xD
    }
}
student.takeExam();
const remaining = student.wantTreat(900, 100); // function param
const remaining2 = student.wantTreat(500, 50);
console.log(remaining2)