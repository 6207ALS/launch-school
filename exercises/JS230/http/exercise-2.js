// JS230 - Front-end Development with JavaScript | Exercises
// Making HTTP Requests: Getting Schedules

const URL = "http://localhost:3000";

function retrieveSchedules() {
  let request = new XMLHttpRequest();
  request.open("GET", `${URL}/api/schedules`);
  request.timeout = 5000;

  request.addEventListener("load", event => {
    let response = JSON.parse(request.response);
    let result = [];

    if (response.length > 0) {
      let staffIds = response.map(schedule => schedule.staff_id);
      staffIds = staffIds.filter((element, index) => staffIds.indexOf(element) === index);

      staffIds.forEach(id => { 
        let tally = response.filter(schedule => schedule.staff_id === id).length;
        result.push(`staff ${id}: ${tally}`);
      });

      alert(result.join("\n"));
    } else {
      alert("There are currently no schedules available for booking.");
    }
  });

  request.addEventListener(`timeout`, event => {
    request.abort();
    alert("Please try again.");
  });

  request.addEventListener("loadend", event => {
    alert("Request has been completed");
  });

  request.send();
}

retrieveSchedules();

[
  {"id":1,"staff_id":1,"student_email":null,"date":"07-01-18","time":"06:10"},
  {"id":2,"staff_id":1,"student_email":null,"date":"07-02-18","time":"06:20"},
  {"id":3,"staff_id":1,"student_email":"marquise@jacobi.info","date":"07-03-18","time":"06:30"},
  {"id":4,"staff_id":2,"student_email":null,"date":"08-01-18","time":"07:10"},
  {"id":5,"staff_id":2,"student_email":"keaton@morar.io","date":"08-02-18","time":"07:20"},
  {"id":6,"staff_id":3,"student_email":null,"date":"09-01-18","time":"08:10"},
  {"id":7,"staff_id":3,"student_email":"aniya@dachkuphal.biz","date":"09-02-18","time":"08:20"},
  {"id":8,"staff_id":3,"student_email":null,"date":"09-03-18","time":"08:30"},
  {"id":9,"staff_id":3,"student_email":null,"date":"09-04-18","time":"08:40"}
]