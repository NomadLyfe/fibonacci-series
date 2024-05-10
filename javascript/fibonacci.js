function fibonacci(num) {
  const fib = [0,1]
  if (num >= 2) {
    while (!fib[num]) {
      fib.push(fib.at(-1) + fib.at(-2))
    }
  }
  return fib[num]
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 0");
  console.log("=>", fibonacci(0));

  console.log("");

  console.log("Expecting: 1");
  console.log("=>", fibonacci(2));

  console.log("");

  console.log("Expecting: 55");
  console.log("=>", fibonacci(10));
}

module.exports = fibonacci;

// Please add your pseudocode to this file
// And a written explanation of your solution
