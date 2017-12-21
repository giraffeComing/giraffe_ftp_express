var express = require('express');
var router = express.Router();
// 引入mysql
var mysql      = require('mysql');
// mysql连接配置
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'wz198925',
    database:'zw', // 前面建的user表位于这个数据库中
    port: 3306
});

var testData = '';
connection.connect();

connection.query('SELECT * FROM user WHERE id =1', function(err,result) {
    if (err) throw err;
    console.log('The solution is: ', result);
    testData = result
});
connection.end();


/* GET home page. */
router.get('/', function(req, res, next) {
    // res.render('index', { title: 'Express' });
    res.json(testData);
});

module.exports = router;
