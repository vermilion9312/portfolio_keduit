//server setting
var express = require("express");
var app = express();
var port = 3111;

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

function getUsrSample() {
    var usrDB = [{
        "usrNo": 1,
        "usrId": "qwer",
        "usrPw1": "1234",
        "usrPw2": "1234",
        "usrName": "이주호",
        "usrEmail": "vermilion9312@gmail.com",
        "usrContact": "01065929312"
    }];
    return usrDB;
};


//화살표함수(호이스팅X)
var getPrdDataSample = () => [{
        "key" : 0,
        "invnt" : 100,
        "prdName" : "ANC WOOL TWISTED BUCKET HAT_BLACK",
        "prdImg": "img/prdImg01.jpeg",
        "brndName":"아노에틱",
        "prdPrice":"48,000",
        "dscntRate":"0.27",
        "prdCategory":"hat",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 2013,
        "salesQuantity":47
        },
        {
        "key" : 1,
        "invnt" : 100,
        "prdName" : "[기모] GEPPETTO 제페토 크림",
        "prdImg": "img/prdImg02.jpeg", 
        "brndName":"꼼파뇨",
        "prdPrice":"72,000",
        "dscntRate":"0.45",
        "prdCategory":"hoodie",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 20512,
        "salesQuantity":98
        },
        {
        "key" : 2,
        "invnt" : 100,
        "prdName" : "보네백 (6color)",
        "prdImg": "img/prdImg03.jpeg",
        "brndName":"무르",
        "prdPrice":"102,000",
        "dscntRate":"0.35",
        "prdCategory":"bag",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 664,
        "salesQuantity":97
        },
        {
        "key" : 3,
        "invnt" : 100,
        "prdName" : "[민니 착용] COLLAR STRIPE BOARDER KNIT···",
        "prdImg": "img/prdImg04.jpeg",
        "brndName":"로라로라",
        "prdPrice":"79,000",
        "dscntRate":"0.15",
        "prdCategory":"top",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 5797,
        "salesQuantity":96
        },
        {
        "key" : 4,
        "invnt" : 100,
        "prdName" : "러비 10Colors 미니 셔링백",
        "prdImg": "img/prdImg05.jpeg",
        "brndName":"앨리스마샤",
        "prdPrice":"69,000",
        "dscntRate":"0.15",
        "prdCategory":"bag",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 1236,
        "salesQuantity":95
        },
        {
        "key" : 5,
        "invnt" : 100,
        "prdName" : "[단독판매][WIDE] Maple jeans Black",
        "prdImg": "img/prdImg06.jpeg",
        "brndName":"판도라핏",
        "prdPrice":"56,000",
        "dscntRate":"0.25",
        "prdCategory":"pants",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 724,
        "salesQuantity":94
        },
        {
        "key" : 6,
        "invnt" : 100,
        "prdName" : "[단독판매] WITTY BUNNY HOODIE [NAVY]",
        "prdImg": "img/prdImg07.jpeg",
        "brndName":"키르시",
        "prdPrice":"69,000",
        "dscntRate":"0.5",
        "prdCategory":"hoodie",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 1501,
        "salesQuantity":93
        },
        {
        "key" : 7,
        "invnt" : 100,
        "prdName" : "[단독]퀼팅 퍼 카라 숏패딩 자켓 (2칼라)",
        "prdImg": "img/prdImg08.jpeg",
        "brndName":"오오엠엘",
        "prdPrice":"139,800",
        "dscntRate":"0.57",
        "prdCategory":"outer",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 448,
        "salesQuantity":92
        },
        {
        "key" : 8,
        "invnt" : 100,
        "prdName" : "[수지 착용][POP]여성 레글런 크롭 푸퍼",
        "prdImg": "img/prdImg09.jpeg",
        "brndName":"게스",
        "prdPrice":"158,000",
        "dscntRate":"0.4",
        "prdCategory":"outer",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 5053,
        "salesQuantity":91
        },
        {
        "key" : 9,
        "invnt" : 100,
        "prdName" : "[NCT 재현, 라붐 해인, CLC예은 착용] WOMEN 오버···",
        "prdImg": "img/prdImg10.jpeg",
        "brndName":"콜릿",
        "prdPrice":"219,000",
        "dscntRate":"0.27",
        "prdCategory":"outer",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 22733,
        "salesQuantity":90
        },
        {
        "key" : 10,
        "invnt" : 100,
        "prdName" : "PUFFER HIGH NECK SHORT PADDING_CRE···",
        "prdImg": "img/prdImg11.jpeg",
        "brndName":"닉앤니콜",
        "prdPrice":"199,000",
        "dscntRate":"0.55",
        "prdCategory":"outer",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 654,
        "salesQuantity":89
        },
        {
        "key" : 11,
        "invnt" : 100,
        "prdName" : "숏 더플 코트_아이보리",
        "prdImg": "img/prdImg12.jpeg",
        "brndName":"파르티멘토 우먼",
        "prdPrice":"144,000",
        "dscntRate":"0.42",
        "prdCategory":"outer",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 520,
        "salesQuantity":88
        },
        {
        "key" : 12,
        "invnt" : 100,
        "prdName" : "<오복컬렉션> 한율 달빛유자 2종 세트 + [사은품 증정]",
        "prdImg": "img/prdImg13.jpeg",
        "brndName":"한율",
        "prdPrice":"60,000",
        "dscntRate":"0.24",
        "prdCategory":"beauty",
        "newOrNot":true,
        "saleOrNot":true,
        "likesAmt" : 4,
        "salesQuantity":20
        },
        {
        "key" : 13,
        "invnt" : 0,
        "prdName" : "블레미쉬 효소 파우더 클렌저 [증정:블레미쉬 크림 7ml * ···",
        "prdImg": "img/prdImg14.jpeg",
        "brndName":"파파레서피",
        "prdPrice":"18,000",
        "dscntRate":"0.18",
        "prdCategory":"beauty",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 11,
        "salesQuantity":20
        },
        {
        "key" : 14,
        "invnt" : 100,
        "prdName" : "데이지크 섀도우 팔레트 1호~16호",
        "prdImg": "img/prdImg15.jpeg",
        "brndName":"데이지크",
        "prdPrice":"34,000",
        "dscntRate":"0.19",
        "prdCategory":"beauty",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 63,
        "salesQuantity":86
        },
        {
        "key" : 15,
        "invnt" : 100,
        "prdName" : "[롬앤] NEW 글래스팅 멜팅 밤",
        "prdImg": "img/prdImg16.jpeg",
        "brndName":"롬앤",
        "prdPrice":"13,000",
        "dscntRate":"0.24",
        "prdCategory":"beauty",
        "newOrNot":false,
        "saleOrNot":true,
        "likesAmt" : 75,
        "salesQuantity":85
        },
        {
        "key" : 16,
        "invnt" : 100,
        "prdName" : "Diamond Quilting Long Hood Jumper ···",
        "prdImg": "img/prdImg17.jpeg",
        "brndName":"아방",
        "prdPrice":"166,000",
        "dscntRate":"0.3",
        "prdCategory":"outer",
        "newOrNot":true,
        "saleOrNot":true,
        "likesAmt" : 22,
        "salesQuantity":40
        },
        {
        "key" : 17,
        "invnt" : 100,
        "prdName" : "Wool High Neck Toggle Half Coat Iv···",
        "prdImg": "img/prdImg18.jpeg",
        "brndName":"마나비스세븐",
        "prdPrice":"279,000",
        "dscntRate":"0.2",
        "prdCategory":"outer",
        "newOrNot":true,
        "saleOrNot":true,
        "likesAmt" : 7,
        "salesQuantity":83
        },
        {
        "key" : 18,
        "invnt" : 100,
        "prdName" : "[22FW] Landyn bag_Brown",
        "prdImg": "img/prdImg19.jpeg",
        "brndName":"밸럽",
        "prdPrice":"159,000",
        "dscntRate":"0.32",
        "prdCategory":"bag",
        "newOrNot":true,
        "saleOrNot":true,
        "likesAmt" : 6,
        "salesQuantity":82
        },
        {
        "key" : 19,
        "invnt" : 100,
        "prdName" : "[해외] 우먼스 노스페이스 써모볼 트랙션 뮬 V 블랙 NF0A···",
        "prdImg": "img/prdImg20.jpeg",
        "brndName":"노스페이스",
        "prdPrice":"154,900",
        "dscntRate":"0.45",
        "prdCategory":"shoes",
        "newOrNot":true,
        "saleOrNot":true,
        "likesAmt" : 19,
        "salesQuantity":1
        }
];

//함수선언식(호이스팅O)
function getCartSample() {
	var cartDB = [
		{"cartNo" : 0,
        "cartMemberId" : "qwer",
        "cartPrdName" : "[해외] 우먼스 노스페이스 써모볼 트랙션 뮬 V 블랙 NF0A···",
        "cartBuyCount" : 1,
        "cartPrdImage" : "img/prdImg20.jpeg",
        "cartdscntRate" : 0.5,
        "cartBuyPrdPrice" : 154900}
	];
	return cartDB;
};

require("./router/usrController")(app)

//index router setting
app.get("/", function(req, res){
    var prdData = getPrdDataSample();
    var cartDB = getCartSample();
    var usrDB = getUsrSample();
    req.session.usrDB = usrDB;
    req.session.cartDB = cartDB;
    req.session.prdData = prdData;
    res.redirect("index");
});

app.get("/index",function(req, res){
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
    var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var renderData = {
        "prdData": prdData,
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    };
    res.render("index.ejs", renderData);
});

app.get("/handbag", function(req, res){
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
        var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var renderData = {
        "prdData": prdData,
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    };
    res.render("handbag.ejs", renderData);
});

app.get("/beauty", function(req, res){
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
        var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var renderData = {
        "prdData": prdData,
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    };
    res.render("beauty.ejs", renderData);
});

app.get("/new", function(req, res){
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
        var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var renderData = {
        "prdData": prdData,
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    };
    res.render("new.ejs", renderData);
});

app.get("/best", function(req, res){
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
        var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var renderData = {
        "prdData": prdData,
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    };
    res.render("best.ejs", renderData);
});

app.get("/addCartPro", function(req, res){
    var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
    var key = req.query.key;
    for(i=0; i<prdData.length; i++){
        if(prdData[i]["key"] == key){
            var cart = {"cartNo" : prdData[i]["key"],
            "cartMemberId" : "qwer",
            "cartPrdName" : prdData[i]["prdName"],
            "cartBuyCount" : 1,
            "cartPrdImage" : prdData[i]["prdImg"],
            "cartBuyPrdPrice" : prdData[i]["prdPrice"],
            "cartdscntRate" :prdData[i]["dscntRate"],
            "cartBuyPrdPrice" : prdData[i]["BuyPrdPrice"]
        };
            cartDB.push(cart);
        }
    }
    var renderData = {
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    }
    req.session.cartDB = cartDB;
    res.render("cart.ejs", renderData);
});

app.get("/hoodie", function(req, res){
    var prdData = req.session.prdData;
    var cartDB = req.session.cartDB;
        var usrDB = req.session.usrDB;
    var loginState = req.session.loginState;
    var renderData = {
        "prdData": prdData,
        "cartDB": cartDB,
        "usrDB": usrDB,
        "loginState" : loginState,
    };
    res.render("hoodie.ejs", renderData);
});

app.get("/logout", function(req,res){
    var loginState = req.session.loginState;
    loginState = false;
    req.session.loginState = loginState;
    res.redirect("index")
})