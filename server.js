const express = require('express');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/department-fn'));
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname + '/dist/department-fn/index.html'));
});
app.listen(process.env.port || 8080);