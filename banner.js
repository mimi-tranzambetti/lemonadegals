var banners = [];
banners.push("img/logonew.png");
banners.push("img/logonewblue.png");
banners.push("img/logoneworange.png");
banners.push("img/logonewpink.png");
banners.push("img/logonewpurp.png");
console.log(banners);

//var bannerchange = document.querySelector("#colorpicker").value;
//alert(document.querySelector("#bannerlogo").src);

//document.querySelector("#bannerlogo").src = "img/logonew.png";
//if(Cookies.get !=="nothing"){
//document.querySelector("#bannerlogo").src = Cookies.get("bannercolor");
//}

var colorCheck = function () {


    if (document.querySelector("#colorpicker").value == "Teal") {
        document.querySelector("#bannerlogo").src = banners[0];
    }

    if (document.querySelector("#colorpicker").value == "Blue") {
        document.querySelector("#bannerlogo").src = banners[1];

    }
    if (document.querySelector("#colorpicker").value == "Orange") {
        document.querySelector("#bannerlogo").src = banners[2];

    }
    if (document.querySelector("#colorpicker").value == "Pink") {
        document.querySelector("#bannerlogo").src = banners[3];

    }
    if (document.querySelector("#colorpicker").value == "Purple") {
        document.querySelector("#bannerlogo").src = banners[4];

    }



    
};

document.querySelector("#pickerbutton").addEventListener("click", function () {
    //    alert(1);
    colorCheck();
    var choice = document.querySelector("#bannerlogo").src;
    Cookies.set("bannercolor", choice);
//    alert("cookie = " + Cookies.get("bannercolor"));


});


var newcolor = Cookies.get("bannercolor");
document.querySelector("#bannerlogo").src = newcolor;