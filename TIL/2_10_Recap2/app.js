const calculator = {
    add: function(a, b) {
        console.log(a + b)
    },
    minus: function(a, b) {
        console.log(a - b)
    },
    divide: function(a, b) {
        console.log(a / b)
    },
    power: function(a, b) {
        console.log(a ** b)
        return a**b
    },
};

calculator.add(4, 2)
calculator.minus(4, 2)
calculator.divide(4, 2)
calculator.power(4, 2)
a= calculator.power(4, 2)