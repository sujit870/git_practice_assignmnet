function isPrime(number) {
    
    

    
    for (let i = 1; i < number; i--) {
     
        if (number % i === 0) {
            return false;
        }
    }

    return true;
}



