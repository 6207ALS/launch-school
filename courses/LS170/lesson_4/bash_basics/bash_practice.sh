#!/bin/bash

# JS170 Lesson 4: Bash Basics - Practice Problems

# READING E1
string="Hello"

if [[ -n $string ]]
then
  echo $string
fi

# READING E2
int1=10
int2=10

if [[ int1 -eq int2 ]]
then
  echo $int1 and $int2 are the same!
fi

# READING E3
if [[ -e ./bash_practice.sh ]]
then
  echo "File exists"
fi

# E1
int3=3

if [[ $int3 -lt 10 ]]
then
  echo $int3 is less than 10

  if [[ $int3 -lt 5 ]]
  then
    echo $int3 is also less than 5
  fi
fi

# E2
int4=15

if [[ $int4 -lt 10 ]]
then
  echo $int4 is less than 10
else
  echo $int4 is not less than 10
fi

# E3
int5=15

if [[ $int5 -lt 10 ]]
then
  echo $int5 is less than 10
elif [[ $int5 -gt 20 ]]
then
  echo $int5 is greater than 20
else
  echo $int5 is between 10 and 20
fi

# E4
int6=15

if [[ $int6 -gt 10 ]] && [[ $int6 -lt 20 ]]
then
  echo $int6 is between 10 and 20
fi

# E5
int7=12

if [[ $int7 -lt 5 ]] || [[ $int7 -gt 10 ]]
then
  echo $int7 is less than 5 OR greater than 10.
fi

# E6
int8=8

if [[ ! ($int8 -lt 5 || $int8 -gt 10) ]]
then
  echo $int8 is between 5 and 10.
fi