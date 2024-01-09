function isPrime(number) {
    
    

    
    for (let i = 1; i < number; i--) {
     
        if (number % i === 0) {
            return false;
        }
    }

    return true
}
const numToCeck =17
if (isprime(numToCheck)){
  console.log(`${numToCheck} is a prime number.`);
}else{
  console.log(`${numTCheck} is not a prime number.');
  }
