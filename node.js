// // Develop a Node.js program that can accept any HTTP requests and give out a 
// // JSON array of five students containing First Name, Middle Name, Surname, 
// // Registration Number, and Programme.

// // create http server to return json list of users with cors headers
// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "application/json" });
//   //   cors
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.end(JSON.stringify([{ name: "John" }, { name: "Jane" }]));

// });


const http = require("http");

const server = http.createServer(function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Request-Method", "*");
  res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
  res.setHeader("Access-Control-Allow-Headers", "*");
  if (req.method === "OPTIONS") {
    res.writeHead(200);
    res.end();
    return;
  }
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify([
      {
        firstName: "John",
        middleName: "Doe",
        surname: "Smith",
        regNo: "12345",
        programme: "Computer Science",
      },
      {
        firstName: "Jane",
        middleName: "Doe",
        surname: "Smith",
        regNo: "12346",
        programme: "Computer Science",
      },
      {
        firstName: "John",
        middleName: "Doe",
        surname: "Smith",
        regNo: "12347",
        programme: "Computer Science",
      },
      {
        firstName: "Jane",
        middleName: "Doe",
        surname: "Smith",
        regNo: "12348",
        programme: "Computer Science",
      },
      {
        firstName: "John",
        middleName: "Doe",
        surname: "Smith",
        regNo: "12349",
        programme: "Computer Science",
      },
    ])
  );
});

server.listen(8081, function () {
  console.log("Server started on port 8081");
});
