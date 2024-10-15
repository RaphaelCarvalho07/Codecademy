# Challenge Project: Mysterious Organism

## Overview
This project is part of Codecademy's Web Development Foundations course. Instead of a step-by-step tutorial, this project contains a series of open-ended requirements which describe the project you’ll be building. There are many possible ways to correctly fulfill all of these requirements, and you should expect to use the internet, Codecademy, and other resources when you encounter a problem that you cannot easily solve.

## Project Goals
Context: You’re part of a research team that has found a new mysterious organism at the bottom of the ocean near hydrothermal vents. Your team names the organism, Pila aequor (P. aequor), and finds that it is only comprised of 15 DNA bases. The small DNA samples and frequency at which it mutates due to the hydrothermal vents make P. aequor an interesting specimen to study. However, P. aequor cannot survive above sea level and locating P. aequor in the deep sea is difficult and expensive. Your job is to create objects that simulate the DNA of P. aequor for your research team to study.

As you progress through the steps, use the terminal and console.log() statements to check the output of your loops and functions.

## Prerequisites
1. In order to complete this project, you should have completed the first few sections of Introduction to JavaScript (through Learn JavaScript: Objects).

## Project Requirements

#### 1. Helper Functions
There are two helper functions provided:

* `returnRandBase()`: Returns a random DNA base ('A', 'T', 'C', or 'G').
* `mockUpStrand`(): Generates an array containing 15 bases to represent a single DNA strand.

#### 2. Factory Function
Create a factory function `pAequorFactory()` that has two parameters:
* `specimenNum`: A unique number for each organism.
* `dna`: An array of 15 DNA bases.

The function should return an object with the properties `specimenNum` and `dna`.

#### 3. Mutation Method
Add a method `.mutate()` to the returned object. This method:

* Randomly selects a base in the `dna` array.
* Changes the selected base to a different base.
* Returns the mutated `dna` array.

#### 4. DNA Comparison Method
Add a method `.compareDNA()` to the returned object. This method:

* Takes another `pAequor` object as a parameter.
* Compares the `dna` arrays of the two objects.
* Prints the percentage of DNA the two objects have in common.

#### 5. Survival Likelihood Method
Add a method `.willLikelySurvive()` to the returned object. This method:
* Returns `true` if the `dna` array contains at least 60% 'C' or 'G' bases.
* Otherwise, returns `false`.

#### 6. Create 30 Instances
Create 30 instances of `pAequor` that can survive in their natural environment. Store these instances in an array.

## Project Structure
```zsh
number-guesser/
├── js/
│   └── main.js
└── README.md
```

## Conclusion
This project simulates the DNA of a mysterious organism, P. aequor, found at the bottom of the ocean. By creating a factory function and adding methods to simulate mutation, DNA comparison, and survival likelihood, we can study these organisms in a simulated environment. The project also involves creating 30 instances of P. aequor that can survive in their natural environment for further study.

## Files Description
 - `js/main.js`:  Contains the functions and methods to simulate the DNA of P. aequor, including mutation, DNA comparison, and survival likelihood.
 - `README.md`: This file, which contains the project description, goals, requirements, and structure.

## How to Run the Project
1. Open `main.js` in a code editor.
2. Use the terminal or console to test and debug your functions in `main.js`.
3. Follow the instructions in the project requirements to complete the tasks.
