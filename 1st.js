let n = prompt('Please, enter number');
let result;

function isPrime(n) {
    if (n % !1 == 0 && n % !n == 0) {
        result = true;
    } else result = false;
    alert(result);
}

isPrime(n);