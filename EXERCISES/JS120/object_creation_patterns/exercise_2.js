// Object Factory
function createPerson(firstName, lastName, age, gender) {
  return {
    firstName,
    lastName,
    age,
    gender,

    fullName() {
      return this.firstName + this.lastName;
    },

    communicate() {
      console.log("Factory: Communicating");
    },

    eat() {
      console.log("Factory: Eating");
    },

    sleep() {
      console.log("Factory: Sleeping");
    },
  }
}

function createDoctor(firstName, lastName, age, gender, specialization) {
  let doctor = createPerson(firstName, lastName, age, gender);
  doctor.specialization = specialization;

  doctor.diagnose = function() {
    console.log("Factory: Diagnosing");
  };

  return doctor;
}

function createProfessor(firstName, lastName, age, gender, subject) {
  let professor = createProfessor(firstName, lastName, age, gender);
  professor.subject = subject;

  professor.teach = function() {
    console.log("Professor Factory: Teaching");
  };

  return professor;
}

function createStudent(firstName, lastName, age, gender, degree) {
  let student = createPerson(firstName, lastName, age, gender);
  student.degree = degree;

  student.study = function() {
    console.log("Student Factory: Studying");
  }

  return student;
}

function createGraduateStudent(firstName, lastName, age, gender, degree, graduateDegree) {
  let graduateStudent = createStudent(firstName, lastName, age, gender, degree);
  graduateStudent.graduateDegree = graduateDegree;

  graduateStudent.research = function() {
    console.log("Graduate Student Factory: Researching");
  }

  return graduateStudent
}


// OLOO Pattern (Prototypal Inheritance)
const PersonPrototype = {
  init(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    return this;
  }, 

  fullName() {
    return this.firstName + this.lastName;
  },

  communicate() {
    console.log("OLOO: Communicating");
  },

  eat() {
    console.log("OLOO: Eating");
  },

  sleep() {
    console.log("OLOO: Sleeping");
  },
}

const DoctorPrototype = Object.create(PersonPrototype);

DoctorPrototype.init = function(firstName, lastName, age, gender, specialization) {
  PersonPrototype.init.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
  return this;
};

DoctorPrototype.diagnose = function() {
  console.log("Doctor OLOO: Diagnosing");
};

const ProfessorPrototype = Object.create(PersonPrototype);

ProfessorPrototype.init = function(firstName, lastName, age, gender, subject) {
  PersonPrototype.init.call(this, firstName, lastName, age, gender);
  this.subject = subject;
  return this;
};

ProfessorPrototype.teach = function() {
  console.log("Professor OLOO: Teaching");
};

const StudentPrototype = Object.create(PersonPrototype);

StudentPrototype.init = function(firstName, lastName, age, gender, degree) {
  PersonPrototype.init.call(this, firstName, lastName, age, gender);
  this.degree = degree;
  return this;
};

StudentPrototype.study = function() {
  console.log("Student OLOO: Teaching");
};

const GraduateStudentPrototype = Object.create(PersonPrototype);

GraduateStudentPrototype.init = function(firstName, lastName, age, gender, degree, graduateDegree) {
  StudentPrototype.init.call(this, firstName, lastName, age, gender, degree)
  this.graduateDegree = graduateDegree;
  return this;
};

GraduateStudentPrototype.research = function() {
  console.log("Graduate Student OLOO: Researching");
};

// Constructors/Prototypes (Pseudo-Classical Inheritance)

function PersonC(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

PersonC.prototype.fullName = function() {
  return this.firstName + this.lastName;
}

PersonC.prototype.communicate = function() {
  console.log("Constructor: Communicating");
}

PersonC.prototype.eat = function() {
  console.log("Constructor: Eating");
}

PersonC.prototype.sleep = function() {
  console.log("Constructor: Sleeping");
}

function DoctorC(firstName, lastName, age, gender, specialization) {
  PersonC.call(this, firstName, lastName, age, gender);
  this.specialization = specialization;
}

DoctorC.prototype = Object.create(PersonC.prototype) 
DoctorC.prototype.constructor = DoctorC;

DoctorC.prototype.diagnose = function() {
  console.log("Doctor Constructor: Diagnosing");
};

function ProfessorC(firstName, lastName, age, gender, subject) {
  PersonC.call(this, firstName, lastName, age, gender);
  this.subject = subject;
}

ProfessorC.prototype = Object.create(PersonC.prototype);
ProfessorC.prototype.constructor = ProfessorC;

ProfessorC.prototype.teach = function() {
  console.log("Professor Constructor: Teaching");
};

function StudentC(firstName, lastName, age, gender, degree) {
  PersonC.call(this, firstName, lastName, age, gender);
  this.degree = degree;
}

StudentC.prototype = Object.create(PersonC.prototype);
StudentC.prototype.constructor = StudentC;

StudentC.prototype.study = function() {
  console.log("Student Constructor: Studying");
};

function GraduateStudentC(firstName, lastName, age, gender, degree, graduateDegree) {
  StudentC.call(this, firstName, lastName, age, gender, degree);
  this.graduateDegree = graduateDegree;
}

GraduateStudentC.prototype = Object.create(StudentC.prototype);
GraduateStudentC.prototype.constructor = GraduateStudentC;

GraduateStudentC.prototype.research = function() {
  console.log("Graduate Student Constructor: Researching");
}

// Class (Pseudo-Classical Inheritance)

class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName() {
    return this.firstName + this.lastName;
  }

  communicate() {
    console.log("Class: Communicating");
  }

  eat() {
    console.log("Class: Eating");
  }

  sleep() {
    console.log("Class: Sleeping");
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose() {
    console.log("Doctor OLOO: Diagnosing");
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach() {
    console.log("Professor Class: Teaching");
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study() {
    console.log("Student Class: Studying");
  }
}

class GraduateStudent extends Student  {
  constructor(firstName, lastName, age, gender, degree, graduateDegree) {
    super(firstName, lastName, age, gender, degree);
    this.graduateDegree = graduateDegree;
  }

  research() {
    console.log("Graduate Student Class: Researching");
  }
}


let personClass = new Person('foo', 'bar', 21, 'gender');
console.log(personClass instanceof Person);     // logs true
personClass.eat();                              // logs 'Eating'
personClass.communicate();                      // logs 'Communicating'
personClass.sleep();                            // logs 'Sleeping'
console.log(personClass.fullName());            // logs 'foo bar'

let doctorClass = new Doctor('foo', 'bar', 21, 'gender', 'Pediatrics');
console.log(doctorClass instanceof Person);     // logs true
console.log(doctorClass instanceof Doctor);     // logs true
doctorClass.eat();                              // logs 'Eating'
doctorClass.communicate();                      // logs 'Communicating'
doctorClass.sleep();                            // logs 'Sleeping'
console.log(doctorClass.fullName());            // logs 'foo bar'
doctorClass.diagnose();                         // logs 'Diagnosing'

let graduateStudentClass = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudentClass instanceof Person);
console.log(graduateStudentClass instanceof Student);
console.log(graduateStudentClass instanceof GraduateStudent);
graduateStudentClass.eat();                     // logs 'Eating'
graduateStudentClass.communicate();             // logs 'Communicating'
graduateStudentClass.sleep();                   // logs 'Sleeping'
console.log(graduateStudentClass.fullName());   // logs 'foo bar'
graduateStudentClass.study();                   // logs 'Studying'
graduateStudentClass.research();                // logs 'Researching'