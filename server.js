var express = require('express');

var mysql = require('mysql')
var connection = mysql.createConnection({
  host     : 'www.db4free.net',
  database : 'db140390',
  user     : 's140390',
  password : 'abc123**'
});

connection.connect()

connection.query('SELECT * from students', function (err, rows, fields) {
  if (err) throw err

  console.log('The solution is: ', rows[0].solution)
})

connection.end()
var app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('pages/index');            
        });
    //Display all students
        app.get('/students', function(req, res) {
            var sid = req.param('sid');
            var sql='select* from students';
                if(sid){
                    sql += ' where sid ='+sid;
                }
           db.any(sql)
            .then(function(data){
                console.log('DATA:'+data);
                res.render('pages/students',{students: data})
                
            })
            .catch(function(error){
                console.log('ERROR:'+error);
            })

        });
   //Display all subjects
            app.get('/subjects/:code', function(req, res) {
                var id = req.param('code');
                var sql='select* from subjects';
                if(id){
                    sql += ' where code ='+code;
                }
                db.any(sql)
                 .then(function(data){
                     console.log('DATAa:'+data);
                     res.render('pages/subjects',{subjects: data})
                     
                 })
                 .catch(function(error){
                     console.log('ERROR:'+error);
                 })
     
                 });

  console.log('Appp is running at http://localhost:8080');          

app.listen(8080);