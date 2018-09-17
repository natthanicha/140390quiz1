var express = require('express');
var app = express();
var mysql = require('mysql')
var connection = mysql.createConnection({
    host: 'www.db4free.net',
    database: 'db140390',
    user: 's140390',
    password: 'abc123**'
});

connection.connect()
app.set('view engine', 'ejs');
app.get('/', function (req, res) {
    res.render('pages/index');
});



//Display all students
app.get('/students', function (req, res) {
    connection.query('SELECT * from students', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/students', { students: rows })
        console.log(rows)
    })

});



//Display all subjects
app.get('/subjects', function (req, res) {
    connection.query('SELECT * from subjects', function (err, rows, fields) {
        if (err) throw err
        res.render('pages/subjects', { subjects: rows })
        console.log(rows)
    })

});


console.log('App is running at http://localhost:8080');
app.listen(8080);