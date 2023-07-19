function countPrimeNumbers() {
  let primes = 0;
  for (let i = 2; i <= 100; i++) {
      if (isPrime(i)) {
          primes++;
      }
  }
  return primes;
}

function isPrime(num) {
  for (let i = 2, sqrt = Math.sqrt(num); i <= sqrt; i++) {
      if (num % i === 0) {
          return false;
      }
  }
  return num > 1;
}

const t0 = performance.now();

setTimeout(function() {
  for (let i = 0; i < 100; i++) {
      countPrimeNumbers();
  }
  const t1 = performance.now();
  console.log(`Execution time of calculating prime numbers 100 times was ${t1 - t0} milliseconds.`);
}, 0);
