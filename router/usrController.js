function getMaxUsrNo(usrDB) {
    var maxNo = 0;
    for(var i = 0; i < usrDB.length; i += 1) {
        if(maxNo < usrDB[i]["usrNo"]) {
            maxNo = usrDB[i]["usrNo"];
        }
    }
    return maxNo;
}

function loginCheck(DB, ID, PW) {
    var check = false;
    for (var i = 0; i < DB.length; i += 1) {
        if (ID == DB[i].usrId && PW == DB[i].usrPw1) {
            check = true;
            break;
        }
    }
    return check;
}

module.exports = function(app) {

    app.get("/add_info", function(req, res) {
        res.render("add_info.ejs");
    });

    app.get("/congratulation", function(req, res) {
       var usrDB = req.session.usrDB;

        var renderData = {
            "usrDB": usrDB
        };
        res.render("congratulation.ejs", renderData);
    });

    app.get("/find_id", function(req, res) {
        res.render("find_id.ejs");
    });

    app.get("/find_pw", function(req, res) {
        res.render("find_pw.ejs");
    });

    app.get("/login", function(req, res) {
        var usrDB = req.session.usrDB;
        var userName = usrDB["usrName"];
        var renderData = {
            "userName":userName,
        }
        res.render("login.ejs", renderData);
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
        }
    })

    app.get("/signup", function(req, res) {
        res.render("signup.ejs");
    });

    app.get("/sns_login", function(req, res) {
        res.render("./account/sns_login.ejs");
    });

    app.get("/top", function(req, res) {
        var renderData = {
            "check": req.query.check
        }
        res.render("./account/top.ejs", renderData);
    });

    app.get("/add_info_pro", function(req, res) {
        var usrDB = req.session.usrDB;
        var usrNo = getMaxUsrNo(usrDB) + 1;
        var usrId = req.query.usrId;
        var usrPw1 = req.query.usrPw1;
        var usrPw2 = req.query.usrPw2;
        var usrName = req.query.usrName;
        var usrEmail = req.query.usrEmail;
        var usrContact = req.query.usrContact;
        
        var usr = {
            "usrNo": usrNo,
            "usrId": usrId,
            "usrPw1": usrPw1,
            "usrPw2": usrPw2,
            "usrName": usrName,
            "usrEmail": usrEmail,
            "usrContact": usrContact
        };

        usrDB.push(usr);
        console.log(usrDB);
        console.log(usrDB[usrDB.length - 1]);

        res.redirect("congratulation");
    });

}