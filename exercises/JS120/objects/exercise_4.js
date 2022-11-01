function createStudent(name, grade) {
  return {
    name,
    grade,
    courses: {},

    info() {
      console.log(`${this.name} is a ${grade} year student`);
    },

    addCourse(course) {
      this.courses[course.code] = course;
    },

    listCourses() {
      return this.courses;
    },

    addNote(courseCode, note) {
      if (!this.courses[courseCode].hasOwnProperty("note")) {
        this.courses[courseCode].note = [];
      }

      this.courses[courseCode].note.push(note);
    },

    updateNote(courseCode, note) {
      this.courses[courseCode].note = [note];
    },

    viewNotes() {
      let courses = Object.keys(this.courses).filter(course => {
        return this.courses[course].hasOwnProperty("note");
      });

      courses.forEach(course => {
        console.log(`${this.courses[course].name}: ${this.courses[course].note.join("; ")}`);
      });
      console.log();
    },
  }
}

let foo = createStudent('Foo', '1st');
foo.info();
// "Foo is a 1st year student"
console.log(foo.listCourses());
// [];
foo.addCourse({ name: 'Math', code: 101 });
foo.addCourse({ name: 'Advanced Math', code: 102 });
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