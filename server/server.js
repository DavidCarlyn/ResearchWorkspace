
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(__dirname));

const PORT = 3005;

const connection = mysql.createConnection(JSON.parse(fs.readFileSync('settings.json')));
    
connection.connect(function(err) {
    (err) ? console.log(err) : console.log(connection);
});
    
require('./routes.js')(app, connection);
    
app.listen(PORT, () => {
    console.log("App is running on port: {PORT}");
});
