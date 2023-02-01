#!/bin/bash

# JS170 Lesson 4 - Bash Basics: While Loop

counter=0
max=10

while [[ $counter -lt $max ]]
do
  echo $counter
  ((counter++))
done