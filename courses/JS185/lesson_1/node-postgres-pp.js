// JS185 Lesson 1: Executing SQL Statements from JavaScript - Practice Problems


// The following code was used to answer questions 1 to 5. It executes the
// asynchronous 'logQuery' function — in conjunction with the 'node-postgres'
// package — to log queries from a database to the console. The code should not
// be run as it is used to provide solely context to the answers.
const { Client } = require("pg");

let client = new Client({ 
  database: 'films', 
  port: 5432,
  user: "al6207",
  host: "/var/run/postgresql"
});

async function logQuery(queryText) {
  await client.connect();

  let data = await client.query(queryText);

  console.log(data);

  client.end();
}

logQuery("");


// Q1
logQuery(`SELECT * FROM films JOIN directors
ON films.director_id = directors.id
WHERE name = 'Sidney Lumet';`);

console.log(data.rows[0].title);

/*
The console.log shown above should be used within the 'logQuery' function to 
log the title of the film. As it states, the expression passed in as the 
argument first accesses the resolved Promise's 'rows' property, an array. 

The 'rows' array represents the result table returned from the query. It is
populated with objects, each representing an individual row from the results.
The properties of these objects represent the columns and their values. In this
case, the expression accesses the value of the first row's 'title' property.
*/


// Q2
console.log(data.rows[1].duration);

logQuery(`SELECT * FROM films JOIN directors
ON films.director_id = directors.id
WHERE name = 'Francis Ford Coppola'
ORDER BY duration DESC;`);


/*
The SQL query shown above should be used to have an output of 113 on the
console. The console.log method retrieves the value of the second row's 
'duration' column. As such, the SQL query should be configured in a way that the
second row's 'duration' column has the value of 113. 

The row in the 'films' table where the duration is 113 has the director
'Francis Ford Coppola'. As such, we first return all rows where the director is
'Francis Ford Coppola'. We then order the rows by duration (descending) so that
the film with a duration of 113 minutes is ordered as the second row. 
*/


// Q3
logQuery(`SELECT count(id) FROM films
WHERE duration < 110
GROUP BY genre;`);

// rows: [ { count: '1' }, { count: '1' }, { count: '2' } ],

console.log(data.rows[2].count);

/*
The console.log shown above should be used to output '2' to the console. The
SQL query returns the count of films for each genre in the 'films' database. 
In node-postgres, the result table is in the form of an array of objects, with
each object representing a row from the table. The third row has a count of '2'.
The third row's 'count' column is accessed to log '2' to the console.
*/