# Lodash Clone Project

In this project, you will be recreating some of the most exciting functionality from the widely-popular lodash.js library, which provides many methods that add new functionality for numbers, strings, objects, and arrays.

Implementing the methods from lodash on your own is an invaluable exercise in problem-solving and a great way to understand how the methods work! We’ve selected ten methods for you to implement, and in implementing each method, you will follow these four steps:

1. Specify the functionality of the method we are implementing
2. Ideate a game plan for how to implement this functionality in code
3. Implement our game plan
4. Test our code to ensure it works as expected

We encourage you to try to complete the “Ideate” and “Implement” steps on your own before consulting our suggestions for each. It may be difficult at points, but working through difficult problems on your own will be incredibly helpful in your journey to becoming a stronger developer. Once you’ve come up with a solution on your own, or if you have become so stuck you are no longer being productive, check out our steps to see our suggestions for how to solve the problem.

## Getting Started

Before we get started implementing our new methods, we need to create an object to contain them. This object will represent our library containing all the functionality we add to it.

### Initial Steps

1. Create a new variable called `_` that is initialized to an empty object.

We’ve written test files for each task in this project. Let’s run the first test suite to ensure your lodash object was initialized correctly. To run a file using node, type the node command in a command line followed by the name of the file. For example, to run the main file we are working on, we would run:

```bash
node _.js
```

Our test files are all located in the test/ directory. 
To [runAllTests.js](test/runAllTests.js) for this task, type:

```bash
node test/runAllTests.js
```

Then press enter. The test will either throw errors if something is not currently working properly in your code or will print a success message to the console if your code is good to go.


## Project Structure

```
lodash-clone/
├── test/
│   ├── assert.js
│   ├── chunk.js
│   ├── clamp.js
│   ├── drop-while.js
│   ├── drop.js
│   ├── find-key.js
│   ├── has.js
│   ├── in-range.js
│   ├── invert.js
│   ├── lodash.js
│   ├── pad.js
│   ├── runAllTests.js
│   └── words.js
├── [_.js](./_.js)
└── [README.md](./README.md)
```


## List of Methods Implemented

### [_.Clamp()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L2)
```javascript
.clamp(number, lower, upper)
```

**Specification:**<br>
This method clamps a number within the inclusive lower and upper bounds.

**Game Plan:**<br>
Use `.Math.max()` to ensure the number is not less than the lower bound.<br>
Use `.Math.min()` to ensure the number is not greater than the upper bound.

**Implementation:** [.clamp()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L2)

**Test:** [test/clamp.js](test/clamp.js)

### [_.inRange()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L5)
```javascript
.inRange(number, start, end)
```

**Specification:**<br>
This method checks if a number is within a range (exclusive of the end).

**Game Plan:**<br>
* Adjust the start and end values if end is not provided.
* Swap start and end if start is greater than end.
* Check if the number is within the range.

**Implementation:** [.inRange()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L5)

**Test:** [test/in-range.js](test/in-range.js)

### [_.Words()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L17)
```javascript
.words(str)
```

**Specification:**<br>
This method splits a string into an array of words.

**Game Plan:**<br>
* Use the string `split` method to split the string into words.

**Implementation:** [.words()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L17)

**Test:** [test/words.js](test/words.js)

### [_.Pad()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L20)
```javascript
.pad(str, len)
```

**Specification:**<br>
This method pads a string with spaces until it reaches a specified length.

**Game Plan:**<br>
* Calculate the length of padding needed.
* Add spaces before and after the original string.

**Implementation:** [.pad()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L20)

**Test:** [test/pad.js](test/pad.js)

### [_.Has()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L29)
```javascript
.has(obj, key)
```

**Specification:**<br>
This method checks if an object has a specific property.

**Game Plan:**<br>
* Use `Object.prototype.hasOwnProperty` to check if the property exists in the object.

**Implementation:** [.has()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L29)

**Test:** [test/has.js](test/has.js)

### [_.Invert()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L32)
```javascript
.invert(obj)
```

**Specification:**<br>
This method inverts the keys and values of an object.

**Game Plan:**<br>
* Create a new object.
* Iterate over the properties of the original object and invert the keys and values.

**Implementation:** [.invert()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L32)

**Test:** [test/invert.js](test/invert.js)

### [_.findKey()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L39)
```javascript
.findKey(obj, predicate)
```

**Specification:**<br>
This method finds the key of an object whose property meets a specific condition.

**Game Plan:**<br>
* Iterate over the properties of the object.
* Use the predicate function to check if the property meets the condition.

**Implementation:** [.findKey()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L39)

**Test:** [test/findKey.js](test/find-key.js)

### [_.Drop()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L47)
```javascript
.drop(arr, n = 1)
```

**Specification:**<br>
This method creates a new array removing a specified number of elements from the beginning of the original array.

**Game Plan:**<br>
* Use the array `slice` method to create a new array starting from index `n`.

**Implementation:** [.drop()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L47)

**Test:** [test/drop.js](test/drop.js)

### [_.dropWhile()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L50)
```javascript
.dropWhile(arr, predicate)
```

**Specification:**<br>
This method creates a new array removing elements from the beginning of the original array while a specified condition is true.

**Game Plan:**<br>
* Use the array `findIndex` method to find the index of the first element that does not meet the condition of the predicate function.
* Use the `drop` method to remove the elements up to the found index.

**Implementation:** [.dropWhile()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L50)

**Test:** [test/drop-while.js](test/drop-while.js)

### [_.Chunk()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L54)
```javascript
.chunk(arr, size = 1)
```

**Specification:**<br>
This method splits an array into multiple smaller arrays (or "chunks") of a specified size.

**Game Plan:**<br>
* Use a `for` loop to iterate over the original array, incrementing the index `i` by the value of `size` in each iteration.
* Use the `slice` method to create a "chunk" of the original array and add it to the array of "chunks".

**Implementation:** [.chunk()](https://github.com/RaphaelCarvalho07/Codecademy/blob/main/lodash/_.js#L54)

**Test:** [test/chunk.js](test/chunk.js)

## Conclusion
Implementing these lodash methods on your own is an excellent way to understand how they work and improve your programming skills. Each method was implemented following the steps of specification, ideation, implementation, and testing to ensure they work as expected. Feel free to explore and add more functionality to your custom lodash library!

## Contact

Feel free to reach out if you have any questions or suggestions.

- **Email**: [raphael.carvalho.qa@gmail.com](mailto:raphael.carvalho.qa@gmail.com)
- **LinkedIn**: [Raphael Carvalho](https://www.linkedin.com/in/raphael-carvalho-675147130)
- **Repository**: [GitHub Repository](https://github.com/RaphaelCarvalho07/Codecademy)