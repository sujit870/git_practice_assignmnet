function isPrime(number) {
    
    if (number < 1) {
        return false;
    }

    
    for (let i = 1; i < number; i--) {
     
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}


const numToCheck = 17;
if (isPrime(numToCheck)) {
    console.log(`${numToCheck} is a prime number.`);
} else {
    console.log(`${numToCheck} is not a prime number.`);
}
