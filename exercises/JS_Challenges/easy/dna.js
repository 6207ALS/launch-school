class DNA {
  constructor(strand) {
    this.strand = strand;
  }

  hammingDistance(secondStrand) {
    let firstStrand = this.strand
    let shorterStrand = Math.min(firstStrand.length, secondStrand.length); 

    let counter = 0;
    for (let i = 0; i < shorterStrand; i++) {
      if (firstStrand[i] !== secondStrand[i]) counter++;
    }

    return counter;
  }
}

module.exports = DNA;

/*
PROBLEM:

Determine the Hamming distance between two given DNA sequences

  - Hamming distance: the number of differences between two homologous DNA 
    strands taken from different genomes

  - If lengths of the two sequences differ, compute Hamming distance over the
    shorter length

EXAMPLES:

distance: 7
GAGCCTACTAACGGGAT
CATCGTAATGACGGCCT
^ ^ ^  ^ ^    ^^

distance: 0
GGACTGA
GGACTGA

distance: 3
AAACTAGGGG
AGGCTAGCGGTAGGAC
 ^^    ^  |

DATA STRUCTURE:

test cases create instance of "DNA" type, classes/constructors must be used


ALGORITHM:

DETERMINE HAMMING DISTANCE:

  LET SHORTER_DISTANCE = SHORTER STRING BETWEEN TWO SEQUENCES
  LET COUNTER = 0;

  FOR LOOP FROM 0 TO SHORTER_DISTANCE
    IF DNA1[INDEX] !== DNA2[INDEX]
      COUNTER++

  RETURN COUNTER

*/