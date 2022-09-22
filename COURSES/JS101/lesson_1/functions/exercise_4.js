// The following will not log anything to the console. The function
// cannot console.log as there is a return statement before it. 

function scream(words) {
    words = words + '!!!!';
    return;
    console.log(words);
}
  
scream('Yipeee');

  