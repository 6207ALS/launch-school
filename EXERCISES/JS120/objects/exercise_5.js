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

const school = {
  students: {},
  courses: {},
  acceptedYears: ["1st", "2nd", "3rd", "4th", "5th"],

  addStudent(student) {
    if (!this.acceptedYears.includes(student.year)) {
      return console.log("Invalid Year");
    }

    return this.students[student.name] = student;
  },

  enrollStudent(student, course) {
    student.addCourse(course);
  },

  addGrade(student, courseCode, grade) {
    this.students[student.name].courses[courseCode].grade = grade;
  },

  getReportCard(student) {
    let courseName;
    let courseGrade;

    for (let course in student.courses) {
      courseName = student.courses[course].name;
      if (student.courses[course].hasOwnProperty("grade")) {
        courseGrade = student.courses[course].grade;
      } else {
        courseGrade = 'In progress'; 
      }
      console.log(`${courseName}: ${courseGrade}`);
    }
  },

  courseReport(course) {
    let courseName;
    let courses;
    let total = 0;
    let reports = [];

    for (let student in this.students) {
      courses = this.students[student].courses;
      for (let courseNum in courses) {
        courseName = courses[courseNum].name;
        if (courseName === course && courses[courseNum].grade !== undefined) { 
          reports.push([student, courses[courseNum].grade]);
        }
      } 
    }

    if (reports.length === 0) return;

    console.log(`=${course} Grades=`);
    for (let report of reports) {
      total += report[1];
      console.log(`${report[0]}: ${report[1]}`);
    }
    console.log("---");
    console.log(`Course Average: ${total / reports.length}`);
  }
}

let foo = createStudent('foo', '3rd');
school.addStudent(foo);
school.enrollStudent(foo, { name: 'Math', code: 101});
school.enrollStudent(foo, { name: 'Advanced Math', code: 102});
school.enrollStudent(foo, { name: 'Physics', code: 202});

school.addGrade(foo, 101, 95);
school.addGrade(foo, 102, 90);

let bar = createStudent("bar", "1st");
school.addStudent(bar);
school.enrollStudent(bar, { name: 'Math', code: 101});
school.addGrade(bar, 101, 91);

let qux = createStudent("qux", "2nd");
school.addStudent(qux);
school.enrollStudent(qux, { name: 'Math', code: 101});
school.enrollStudent(qux, { name: 'Advanced Math', code: 102});
school.addGrade(qux, 101, 93);
school.addGrade(qux, 102, 90);

school.getReportCard(foo);
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport("Physics");