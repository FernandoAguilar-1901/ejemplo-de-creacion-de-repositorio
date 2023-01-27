function evenOdd(n){
    if (n % 2 == 0){
        //console.log('even')
        console.log(n + ' Its an even number')
    } else {
        //console.log('odd')
        console.log(n + ' Its an odd number');
    }
}

evenOdd();

// 

function numberDividedInto(number){
    if (number % 7 == 0 && number % 8 == 0){
        console.log('Is this number divisible by 7 and 8?: '+'true')
    } else {
        console.log('Is this number divisible by 7 and 8?: '+'false')
    }
}

numberDividedInto(0);

//

function isItGreaterThan(digit) {
    if (digit > 10) {
        console.log('The number ' + digit + ' Its greater than 10')
    } else {
        console.log('The number '+ digit + ' Its not greater than 10')
    }
}

isItGreaterThan(11);

// 
