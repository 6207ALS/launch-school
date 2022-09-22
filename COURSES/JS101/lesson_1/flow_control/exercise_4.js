// The following function will console.log three times when passing '113'
// as an argument. The switch will execute case '113', but because the 
// case does not have a break statement (nor do the other cases) the program
// will execute the remaining cases as well. 

function barCodeScanner(serial) {
  switch (serial) {
    case '123':
      console.log('Product1');
    case '113':
      console.log('Product2');
    case '142':
      console.log('Product3');
    default:
      console.log('Product not found!');
  }
}

barCodeScanner('113');

