//server setting
var express = require("express");
var app = express();
var port = 80;
app.listen(port, function(){
    console.log(`${port} server is working`);
});

//ejs setting
var ejs = require("ejs");
app.set("view engine", "ejs");
app.set("views", __dirname + "/views");

app.use(express.static(__dirname + '/public'));

//session setting
var session = require("express-session");
app.use(session({
    secret: "abcdefg",
    resave: false,
    saveUninitialized: false
}));

var mysql = require("mysql");
var conn_info = {
	host : "localhost",
	port : 3306,
	user : "root",
	password : "root",
	database : "seoulstore",
    multipleStatements: true
};

require("./router/usrController")(app)
require("./router/prdController")(app)

//index router setting
app.get("/", function(req, res){
    res.redirect("index");
});

app.get("/index",function(req, res){
    var loginState = req.session.loginState;
    var conn = mysql.createConnection(conn_info);

    var sql1 = "SELECT * FROM prd";
    var sql2 = "SELECT * FROM prd ORDER BY salesQuantity DESC LIMIT 0, 4"

    conn.query(sql1, function(error, rows1) {
        conn.query(sql2, function(erro, rows2) {
            var renderData = {
                "prdData": rows1,
                "sortedPrdData": rows2,
                "loginState": loginState
            }
            conn.end();
            res.render("index.ejs", renderData);
        })
    })

});