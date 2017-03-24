'use strict'

const fizzBuzzGenerator = function * (max) {
  max = max || Infinity

  for (let n = 1; n <= max; n++) {
    yield (n % 3 === 0 && n % 5 === 0) ? 'Fizz Buzz'
                                       : n % 3 === 0 ? 'Fizz'
                                                     : n % 5 === 0 ? 'Buzz'
                                                                   : n
  }
}

// Do not change this.
module.exports = fizzBuzzGenerator
