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

