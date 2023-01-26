var mysql = require("mysql");
var conn_info = {
	host : "localhost",
	port : 3306,
	user : "root",
	password : "root",
	database : "seoulstore",
    multipleStatements: true
};

module.exports = function(app) {

    app.get("/add_info", function(req, res) {
        res.render("usr/add_info.ejs");
    });

    app.get("/add_info_pro", function(req, res) {
        var usrId = req.query.usrId;
        var usrPw1 = req.query.usrPw1;
        var usrPw2 = req.query.usrPw2;
        var usrName = req.query.usrName;
        var usrEmail = req.query.usrEmail;
        var usrContact = req.query.usrContact;
        
        var conn = mysql.createConnection(conn_info);
        var sql1 = "SELECT MAX(usrNo) FROM usr";
        conn.query(sql1, function(error, rows) {
            var json = JSON.stringify(rows);
            var data = JSON.parse(json);
            var usrNo = data[0]["MAX(usrNo)"] + 1;
            var sql2 = "INSERT INTO usr VALUES(?, ?, ?, ?, ?, ?, ?)";
            var inputData = [usrNo, usrId, usrPw1, usrPw2, usrName, usrEmail, usrContact];
            conn.query(sql2, inputData, function(error) {

                conn.end();
                res.redirect("cong");
            });
        });

    });

    app.get("/cong", function(req, res) {
        var conn = mysql.createConnection(conn_info);
        var sql = "SELECT * FROM usr";
        conn.query(sql, function(error, rows) {
            var renderData = {
                "usrDB": rows
            }
            res.render("usr/cong.ejs", renderData);
        })
    });

    app.get("/login", function(req, res) {
    
        res.render("usr/login.ejs");
    });

    app.get("/login_pro", function(req, res) {
        var usrDB = req.session.usrDB;
        var usrId = req.query.usrId;
        var usrPw1 = req.query.usrPw1;
        
        var check = loginCheck(usrDB, usrId, usrPw1);

        if (check == true) {
            var loginState = true;

            req.session.loginState = loginState;
            res.redirect("index");
        } else {
            res.send(
                `<script>
                alert('아이디와 비밀번호가 일치하지 않습니다.');
                </script>`
            );
        };
    });

    app.get("/signup", function(req, res) {
        res.render("usr/signup.ejs");
    });

    app.get("/sns_login", function(req, res) {
        res.render("usr/sns_login.ejs");
    });

    app.get("/top", function(req, res) {
        var renderData = {
            "check": req.query.check
        }
        res.render("usr/top.ejs", renderData);
    });


}