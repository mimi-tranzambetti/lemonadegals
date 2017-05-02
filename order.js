//hopefully this becomes drag n' drop city
//var sticker = img/duck-frump.png;

var total = 0;

function allowDrop(ev) {
    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");


    total += 1;
    document.querySelector("#total").innerHTML = "Total: $" + total + ".00";
    //    document.querySelector("#form").innerHTML = "<img draggable='true' ondragstart='drag(event)' src=' /img/" +  +   "'class='stickSmall' id='smallDuck'>"
 alert("You added a small duck frump to your cart");
//    document.querySelector("#message1").style.visibility = "visible";

    var orders = document.querySelector("aside").innerHTML;
    document.querySelector("aside").innerHTML = orders + "Small Duck Frump $1<br>";
//I broke this intentionally
    ev.target.apppendChild(document.getElementById(data));
    document.getElementById(data).style.width = "50px";




}

function allowDrop1(ev1) {
    ev1.preventDefault();
}

function drag1(ev1) {
    ev1.dataTransfer.setData("text", ev1.target.id);
}

function drop1(ev1) {
    ev1.preventDefault();
    var data1 = ev1.dataTransfer.getData("text");

 alert("You added a large duck frump to your cart");
    total += 2;
    document.querySelector("#total").innerHTML = "Total: $" + total + ".00";
    var orders = document.querySelector("aside").innerHTML;
    document.querySelector("aside").innerHTML = orders + "Small Duck Frump $2<br>";
    

    //    alert(total);
    ev1.target.appendChild(document.getElementById(data1));
    document.getElementById(data1).style.width = "100px";
}
var orders = document.querySelector("aside").innerHTML;
Cookies.set("currentorders", orders);
alert(Cookies.get("currentorders"));




//adding the money everytime the drag event happens
//var total = 0;
//if(ev == document.querySelector(".stickSmall")){
//    total += 1;
//    document.querySelector("#total").innerHTML = "Total: $" + total +".00";
//}
//if(ev == document.querySelector(".stickLarge")){
//    total+= 2;
//    document.querySelector("#total").innerHTML = "Total: $" + total +".00";
//}
