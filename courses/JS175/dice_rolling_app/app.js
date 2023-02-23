const HTTP = require('http');
const URL = require("url").URL;
const PORT = 3000;

function rollDice(times, sides) {
  let results = "";

  for (let i = 0; i < times; i++) {
    results += `${Math.ceil(Math.random() * sides)}\n`;
  }

  return results;
}

const SERVER = HTTP.createServer((req, res) => {
  const BASE_URL = `http://localhost:${PORT}`;
  let method = req.method;
  let path = req.url;
  let reqURL = new URL(path, BASE_URL);


  if (path !== '/favicon.ico') {
    let rollTimes = reqURL.searchParams.get("rolls");
    let diceSides = reqURL.searchParams.get("sides");

    let results = rollDice(rollTimes, diceSides);

    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(`${results} \n${method} ${path}`);
    res.end();
  } else {
    res.statusCode = 200;
    res.setHeader("Content-Type", "text/plain");
    res.write(`${method} ${path}\n`);
    res.end();
  }
});

SERVER.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});