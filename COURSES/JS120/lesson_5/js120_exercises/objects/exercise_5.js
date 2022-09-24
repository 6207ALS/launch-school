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


const school = {
  students: {},

  addStudent(name, year) {
    if (!['1st', '2nd', '3rd', '4th', '5th'].includes(year)) {
      return console.log("Must be between years 1 to 5.");
    }

    this.students[name] = createStudent(name, year);
  },

  enrollStudent(student, course) {
    this.students[student].addCourse(course);
  },
 
  addGrade(student, grade, courseCode) {
    for (let index in student.courses) {
      if (student.courses[index].code !== courseCode) return;

      student.courses[index].grade = grade;
    }
  },

  getReportCard(student) {
    this.students[student].courses.forEach(course => {
      if (!course.hasOwnProperty("grade")) {
        console.log(`${course.name}: In progress`);
        return;
      };

      console.log(`${course.name}: ${course.grade}`);
    });
  },
 
  isEnrolledInCourse(student, courseName) {
    return(this.students[student].courses.some(course => {
      return course.name === courseName;
    }));
  },

  hasGrade(student, courseName) {
    return this.students[student].courses.some(course => {
      return course.name === courseName && course.hasOwnProperty("grade");
    })
  },

  courseReport(courseName) {
    let total = 0;
    let numOfStudentsInCourse = 0;

    for (let student in this.students) {
      if (this.isEnrolledInCourse(student, courseName) && 
        this.hasGrade(student, courseName)) {
          numOfStudentsInCourse++;
        }
    }

    if (numOfStudentsInCourse === 0) {
      return undefined;
    };

    console.log(`=${courseName} Grades=`)
    for (let name in this.students) {
      for (let course of this.students[name].courses) {
        if (course.name === courseName) {
          if (!course.hasOwnProperty("grade")) break;
          console.log(`${name}: ${course.grade}`);
          total += course.grade;
        }
      }
    }
    console.log(`---\nCourse Average: ${total / numOfStudentsInCourse}`)
  },
}

school.addStudent("foo", "3rd");
school.enrollStudent("foo",  { name: 'Math', code: 101, grade: 95, });
school.enrollStudent("foo", { name: 'Advanced Math', code: 102, grade: 90, })
school.enrollStudent("foo", { name: 'Physics', code: 202, });

school.addStudent("bar", "1st");
school.enrollStudent("bar",  { name: 'Math', code: 101, grade: 91, });

school.addStudent("qux", "2nd");
school.enrollStudent("qux",  { name: 'Math', code: 101, grade: 93, });
school.enrollStudent("qux",  { name: 'Advanced Math', code: 102, grade: 90, });

school.getReportCard("foo");
school.courseReport('Math');
school.courseReport('Advanced Math');
school.courseReport("Physics");