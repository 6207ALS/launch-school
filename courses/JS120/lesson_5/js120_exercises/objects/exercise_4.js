function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    notes: {},

    info() {
      console.log(`${this.name} is a ${year} year student`);
    },

    listCourses() {
      console.log(this.courses);
    },

    addCourse(courseObj) {
      this.courses.push(courseObj);
    },

    addNote(courseCode, note) {
      let courseName = this.returnCourseName(courseCode);
  
      if (!this.notes.hasOwnProperty(courseName)) {
        this.notes[courseName] = [];
      }

      this.notes[courseName].push(note);
    },

    returnCourseName(courseCode) {
      for (let course of this.courses) {
        if (course.code === courseCode) return course.name; 
      }
    },

    viewNotes() {
      for (let course in this.notes) {
        console.log(`${course}: ${this.notes[course].join("; ")}`);
      }
    },

    updateNote(courseCode, note) {
      let courseName = this.returnCourseName(courseCode);
      this.notes[courseName] = [note];
    }
  }
} 

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
foo.listCourses();
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
// [{ name: 'Math', code: 101 }, { name: 'Advanced Math', code: 102 }]
foo.addNote(101, 'Fun course');
foo.addNote(101, 'Remember to study for algebra');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
foo.addNote(102, 'Difficult subject');
foo.viewNotes();
// "Math: Fun course; Remember to study for algebra"
// "Advance Math: Difficult subject"
foo.updateNote(101, 'Fun course');
foo.viewNotes();
// "Math: Fun course"
// "Advanced Math: Difficult subject"

/*
The 'createStudent' factory function returns a student object with several
properties.
  - The "courses" property references an array of all courses, each being an
    object

  - The "notes" property references an object of each course's notes. The
    property name of each course is the course's name and the value is the note
    (string).

  - student objects can add courses to their "courses" property
  - student objects can add notes to their "notes" property
  - student objects can view their notes from the "notes" property
  - student objects can update their notes for a specific course in their
    "notes" property
*/