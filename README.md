[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# JavaScript: Fizz Buzz Generator Challenge

## Prerequisites

-   [Fizz buzz](https://en.wikipedia.org/wiki/Fizz_buzz)
-   [Iterators and generators - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_Generators)
-   [function* - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*)
-   [Generator - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Generator)
-   [yield - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/yield)

## Instructions

1.  Fork and clone this repository.
1.  Change into the new directory.
1.  Install dependencies.
1.  Create and checkout a new branch to work on.
1.  Fulfill the listed requirements.

Starter code is available in [`lib/challenge.js`](lib/challenge.js). A pull
request is not required, but it is necessary if you want a code review.

You may wish to refer to [FAQs](https://github.com/ga-wdi-boston/meta/wiki/)
related to [forking,
cloning](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone).

## Fizz Buzz

Fizz Buzz is game used to teach children division by having them group up and
count up from one. If the number is divisible by three, then "fizz" is said
instead of the number. Similarly, if the number is divisible five, then "buzz"
is said instead. If the number is divisible by both three and five, then "fizz
buzz" is said, and if the number isn't divisible by either three or five, then
the number is said.

## JavaScript Generators

JavaScript generator functions are special functions that return an iterator
object. The returned iterator object has a method called `next()` that returns
an object containing two keys, `done` and `value`. The value of `done` is a
boolean value, `true` or `false`, that indicates whether the iterator has
finished returning all of its the values or not. The value of `value` is the
`yield`ed value from the iterator. If a finite generator's values have been
exhausted (i.e., `done` is `true`), then `value` will be `undefined`. It is
possible to create finite and infinite generators.

Here is an example of a finite generator that takes a string as an input, splits
it using whitespace as delimiters, strips out punctuation, converts every word
to lowercase, and yields each word on successive iterations.

```javascript
const wordGenerator = function * (string) {
  const words = string.split(/\s+/)
                      .map(word => word.replace(/\W+/, ''))
                      .map(word => word.toLowerCase())

  for (const word of words) {
    yield word
  }
}

const words = wordGenerator('Hello, World!  This is a finite generator.')

let word = words.next()

do {
  console.log(word.value)

  word = words.next()
} while (!word.done)
```

Here is an example of an infinite generator that returns natural numbers on each
iteration.

```javascript
const naturalNumberGenerator = function * () {
  let number = 1

  while (true) {
    yield number++
  }
}

const naturalNumbers = naturalNumberGenerator()

let naturalNumber = naturalNumbers.next()

for (let i = 0; i < 10; i++) {
  console.log(naturalNumber.value)

  naturalNumber = naturalNumbers.next()
}
```

## Requirements

Write a finite generator function, `fizzBuzzGenerator`, that, beginning from
1, yields 'Fizz' if the number is divisible by 3, 'Buzz' if the number is
divisible by 5, 'Fizz Buzz' if the number is divisible by 15, and the number
itself if none of the previous conditions are met. The generator function should
take a parameter, `max`, that determines the maximum value that should be
yielded. Assume that all inputs are valid (natural numbers).

You should be running `grunt nag` before diagnosing any bugs, since it finds
some of the most common sources of errors. After `grunt nag` passes, you should
run `grunt test` to run the included tests. Tests will tell you whether of not
you've met these requirements.

## Bonus

Modify `fizzBuzzGenerator` so that it acts as an infinite generator if no
argument is passed in. To run the test for this bonus, open
`spec/challenge.spec.js` and change `xdescribe` to `describe` on line 45.

## Tasks

Developers should run these often!

-   `grunt nag`: runs code quality analysis tools on your code
    and complains.
-   `grunt test`: runs any automated tests; may depend on `grunt build`.
-   `grunt`: runs both `nag` and then `test`
-   `grunt make-standard`: reformats all your code in the standard style.

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
