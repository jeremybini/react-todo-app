const uuid = require("uuid");

const data = [
  { id: uuid.v4(), text: "Get milk", completed: false },
  { id: uuid.v4(), text: "Teach people React.js", completed: false }
];

module.exports = data;
