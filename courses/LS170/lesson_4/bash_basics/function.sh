#!/bin/bash

# JS170 Lesson 4 - Bash Basics: Functions

greeting() {
  echo Hello $1
  echo Hello $2
}

greeting "Peter" "Chris" # outputs "Hello Peter" "Hello Chris" on separate lines