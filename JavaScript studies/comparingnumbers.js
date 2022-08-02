function comparenumbers (num1, num2) {
    const firstmessage = createfirstmessage (num1, num2);
    const secondmessage = createsecondmessage (num1, num2);

    return `${firstmessage} ${secondmessage}`

    /* const equal = num1 === num2;
    const sum = num1 + num2;

    if (equal) {
        return "The numbers are equal!";
    }

    return "The numbers are not equal.";
    */
}

function createfirstmessage (num1, num2){
    let areequal = '';

    if(num1 !== num2) {
        areequal = 'not';
    }

    return `The numbers ${num1} and ${num2} are${' ' + areequal} equal.`;
}

function createsecondmessage (num1, num2) {
    
    const sum = num1 + num2;
    
    let result10 = 'less than';
    let result20 = 'less than';

    const compare10 = sum > 10;
    const compare20 = sum > 20;
    const equal10 = sum === 10;
    const equal20 = sum === 20;

    if(compare10) {
        result10 = 'more than';
    }

    if(compare20) {
        result20 = 'more than';
    }

    if(equal10) {
        result10 = 'equal to';
    }

    if(equal20) {
        result20 = 'equal to';
    }

    return `Their sum is equal to ${sum}, which is ${result10} 10 and ${result20} 20.`;
}

console.log(comparenumbers(30, 5));