// const express = require('express');
// const path = require('path');
// const app = express();
// app.use(express.static(__dirname + '/dist/department-fn'));
// app.get('/*', (req, res) => {
//     res.sendFile(path.join(__dirname + '/dist/department-fn/index.html'));
// });
// app.listen(process.env.port || 8080);

const express = require("express");

const app = express();

app.use(express.static("./dist/department-fn"));

app.get("/*", function (req, res) {
  res.sendFile("index.html", { root: "dist/department-fn" });
});

app.listen(process.env.PORT || 8080);

console.log(`Running on port ${process.env.PORT || 8080}`);