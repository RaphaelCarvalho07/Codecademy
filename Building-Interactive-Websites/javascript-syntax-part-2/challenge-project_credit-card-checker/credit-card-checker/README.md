## Challenge Project: Credit Card Checker

### Overview
This project is slightly different than others you have encountered thus far on Codecademy. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

### Project Goals
Context: The company that you work for suspects that credit card distributors have been mailing out cards that have invalid numbers. In this project, you have the role of a clerk who checks if credit cards are valid. Every other clerk currently checks using pencil and paper, but you’ll be optimizing the verification process using your knowledge of functions and loops to handle multiple credit cards at a time. Unlike the other clerks, you can spend the rest of your time relaxing!

As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

### Project Requirements

#### Task 1
Create a function, `validateCred()` that has a parameter of an array. The purpose of `validateCred()` is to return `true` when an array contains digits of a valid credit card number and `false` when it is invalid. This function should NOT mutate the values of the original array.

To find out if a credit card number is valid or not, use the Luhn algorithm. Generally speaking, an algorithm is a series of steps that solve a problem — the Luhn algorithm is a series of mathematical calculations used to validate certain identification numbers, e.g. credit card numbers. The calculations in the Luhn algorithm can be broken down as the following steps:

1. Starting from the farthest digit to the right, AKA the check digit, iterate to the left.
2. As you iterate to the left, every other digit is doubled (the check digit is not doubled). If the number is greater than 9 after doubling, subtract 9 from its value.
3. Sum up all the digits in the credit card number.
4. If the sum modulo 10 is 0 (if the sum divided by 10 has a remainder of 0) then the number is valid, otherwise, it’s invalid.

#### Task 2
Create another function, `findInvalidCards()` that has one parameter for a nested array of credit card numbers. The role of `findInvalidCards()` is to check through the nested array for which numbers are invalid, and return another nested array of invalid cards.

#### Task 3
After finding all the invalid credit card numbers, it’s also necessary to identify the credit card companies that have possibly issued these faulty numbers. Create a function, `idInvalidCardCompanies()` that has one parameter for a nested array of invalid numbers and returns an array of companies.

Currently, there are 4 accepted companies which each have unique first digits. The following table shows which digit is unique to which company:
- 3 - Amex
- 4 - Visa
- 5 - Mastercard
- 6 - Discover

If the number doesn’t start with any of the numbers listed, print out a message like: “Company not found”.

`idInvalidCardCompanies()` should return an array of companies that have mailed out cards with invalid numbers. This array should NOT contain duplicates, i.e. even if there are two invalid Visa cards, "Visa" should only appear once in the array.

### Project Structure
```zsh
number-guesser/
├── js/
│   └── main.js
└── README.md
```

## Files Description
 - `js/main.js`: Contains the functions to validate credit card numbers, find invalid cards, and identify the companies that issued invalid cards.
 - `README.md`: This file, which contains the project description, goals, requirements, and structure.

## How to Run the Project
1. Open main.js in a code editor.
2. Use the terminal or console to test and debug your functions in main.js.
3. Follow the instructions in the project requirements to complete the tasks.
