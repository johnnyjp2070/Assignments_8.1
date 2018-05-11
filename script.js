function isPrime(number){
    if(number === 1){
        return "Neither a Prime Number Nor a Composite Number";
    } else if (number === 2){
        return true;
    }
    else {
        for(var i = 2; i < number; i++){
            if(number % i === 0){
                return false;
            }
        }
        return true;
    }
}
console.log(isPrime(98));
console.log(isPrime(97));
console.log(isPrime(1));