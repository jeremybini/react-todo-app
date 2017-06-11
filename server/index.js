const uuid = require("uuid");
const express = require("express");
const bodyParser = require("body-parser");
const data = require("./data");

const port = 4320;
const artificialWait = 2000;
const router = express.Router();
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(router);

router.use((request, response, next) => {
  console.log("Request:", request.method.toUpperCase(), request.originalUrl);
  response.header("Access-Control-Allow-Origin", "*");
  response.header(
    "Access-Control-Allow-Methods",
    "POST, GET, PUT, DELETE, OPTIONS"
  );
  response.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

router.get("/api/todo", (request, response) => {
  response.type("application/json");
  setTimeout(() => response.send(JSON.stringify(data)), artificialWait);
});

router.post("/api/todo", (request, response) => {
  const newRecord = {
    id: uuid.v4(),
    text: request.body.text,
    completed: false
  };

  data.push(newRecord);

  response.statusCode = 201;
  response.type("application/json");
  setTimeout(() => response.send(JSON.stringify(newRecord)), artificialWait);
});

router.put("/api/todo/:id", (request, response) => {
  const acceptedKeys = ["completed", "text"];
  const todo = data.find(record => record.id === request.params.id);

  for (var key in request.body) {
    if (acceptedKeys.includes(key)) {
      todo[key] = request.body[key];
    }
  }

  response.type("application/json");
  setTimeout(() => response.send(JSON.stringify(todo)), artificialWait);
});

router.delete("/api/todo/:id", (request, response) => {
  const todoIndex = data.findIndex(record => record.id === request.params.id);
  const todo = data.splice(todoIndex, 1)[0];

  response.type("application/json");
  setTimeout(() => response.send(JSON.stringify(todo)), artificialWait);
});

console.log(`Mock Server: http://localhost:${port}/`);

app.listen(port);
