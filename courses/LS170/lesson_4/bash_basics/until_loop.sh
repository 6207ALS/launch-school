#!/bin/bash

# JS170 Lesson 4 - Bash Basics: Until Loop

counter=0
max=10

until [[ $counter -gt $max ]]
do
  echo $counter
  ((counter++))
done
