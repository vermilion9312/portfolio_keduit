const {
	query
} = require("express");
var mysql = require("mysql");
var conn_info = {
	host: "localhost",
	port: 3306,
	user: "root",
	password: "root",
	database: "seoulstore",
	multipleStatements: true
};

module.exports = function (app) {
	app.get("/handbag", function (req, res) {
		var prdData = req.session.prdData;
		var cartDB = req.session.cartDB;
		var usrDB = req.session.usrDB;
		var loginState = req.session.loginState;
		var renderData = {
			"cartDB": cartDB,
			"loginState": loginState,
		};
		res.render("handbag.ejs", renderData);
	});

	app.get("/beauty", function (req, res) {
		var prdData = req.session.prdData;
		var cartDB = req.session.cartDB;
		var usrDB = req.session.usrDB;
		var loginState = req.session.loginState;
		var renderData = {
			"prdData": prdData,
			"cartDB": cartDB,
			"usrDB": usrDB,
			"loginState": loginState,
		};
		res.render("beauty.ejs", renderData);
	});

	app.get("/new", function (req, res) {
		var prdData = req.session.prdData;
		var cartDB = req.session.cartDB;
		var usrDB = req.session.usrDB;
		var loginState = req.session.loginState;
		var renderData = {
			"prdData": prdData,
			"cartDB": cartDB,
			"usrDB": usrDB,
			"loginState": loginState,
		};
		res.render("new.ejs", renderData);
	});

	app.get("/best", function (req, res) {

		var conn = mysql.createConnection(conn_info);
		var loginState = req.session.loginState;
		console.log(loginState);
		var sql = " SELECT * FROM prd ";
		conn.query(sql, function (error, rows) {

			var renderData = {
				"prdData": rows,
				"loginState": loginState
			};
			conn.end();
			res.render("best.ejs", renderData);
		})
	});

	app.get("/addCartPro", function (req, res) {
		var usrDB = req.session.usrDB;
		var loginState = req.session.loginState;
		var prdData = req.session.prdData;
		var cartDB = req.session.cartDB;
		var key = req.query.key;
		for (i = 0; i < prdData.length; i++) {
			if (prdData[i]["key"] == key) {
				var cart = {
					"cartNo": prdData[i]["key"],
					"cartMemberId": "qwer",
					"cartPrdName": prdData[i]["prdName"],
					"cartBuyCount": 1,
					"cartPrdImage": prdData[i]["prdImg"],
					"cartBuyPrdPrice": prdData[i]["prdPrice"],
					"cartdscntRate": prdData[i]["dscntRate"],
					"cartBuyPrdPrice": prdData[i]["BuyPrdPrice"]
				};
				cartDB.push(cart);
			}
		}
		var renderData = {
			"cartDB": cartDB,
			"usrDB": usrDB,
			"loginState": loginState,
		}
		req.session.cartDB = cartDB;
		res.render("cart.ejs", renderData);
	});

	app.get("/hoodie", function (req, res) {
		var loginState = req.session.loginState;

		var conn = mysql.createConnection(conn_info);
		var sql = "SELECT * FROM prd";
		conn.query(sql, function (error, rows) {

		})
		var renderData = {
			"prdData": prdData,
			"cartDB": cartDB,
			"usrDB": usrDB,
			"loginState": loginState,
		};
		res.render("hoodie.ejs", renderData);
	});

	app.get("/logout", function (req, res) {
		var loginState = req.session.loginState;
		loginState = false;
		req.session.loginState = loginState;
		res.redirect("index")
	})
}