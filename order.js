//hopefully this becomes drag n' drop city


/*--------------------LOOK AT ME------------------------*/

/*-- Here is why the total keeps resetting --*/

var total = document.querySelector(".total").innerHTML;
total = parseFloat(total);


/*-- Every time the script runs you are 
resetting the value of total to zero.

Set it to the Cookies.get(subtotal)--*/




var orders = document.querySelector(".ordersum").innerHTML;

//duck frump small
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
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    //    document.querySelector("#form").innerHTML = "<img draggable='true' ondragstart='drag(event)' src=' /img/" +  +   "'class='stickSmall' id='smallDuck'>"
    alert("You added a 'Small Duck Frump' to your cart");
    //    document.querySelector("#message1").style.visibility = "visible";


    document.querySelector(".ordersum").innerHTML = orders + "Small Duck Frump $1<br>";
    orders = document.querySelector(".ordersum").innerHTML;
    Cookies.set("currentorders", orders);

    Cookies.set("subtotal", total);
    // Tots

    //    alert(Cookies.get("currentorders"));

}

//duck frump large
function allowDrop1(ev1) {
    ev1.preventDefault();
}

function drag1(ev1) {
    ev1.dataTransfer.setData("text", ev1.target.id);
}

function drop1(ev1) {
    ev1.preventDefault();
    var data1 = ev1.dataTransfer.getData("text");

    alert("You added a 'Large Duck Frump' to your cart");
    total += 2;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    document.querySelector(".ordersum").innerHTML = orders + "Large Duck Frump $2<br>";
    orders = document.querySelector(".ordersum").innerHTML;
    Cookies.set("currentorders", orders);


    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));

}

//dump trump small
function allowDrop2(ev2) {
    ev2.preventDefault();
}

function drag2(ev2) {
    ev2.dataTransfer.setData("text", ev2.target.id);
}

function drop2(ev2) {
    ev2.preventDefault();
    var data2 = ev2.dataTransfer.getData("text");


    total += 1;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    //    document.querySelector("#form").innerHTML = "<img draggable='true' ondragstart='drag(event)' src=' /img/" +  +   "'class='stickSmall' id='smallDuck'>"
    alert("You added a 'Small Dump Trump' to your cart");
    //    document.querySelector("#message1").style.visibility = "visible";
    document.querySelector(".ordersum").innerHTML = orders + "Small Dump Trump $1<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));


}

//dump trump large
function allowDrop3(ev3) {
    ev3.preventDefault();
}

function drag3(ev3) {
    ev3.dataTransfer.setData("text", ev3.target.id);
}

function drop3(ev3) {
    ev3.preventDefault();
    var data3 = ev3.dataTransfer.getData("text");

    alert("You added a 'Large Dump Trump' to your cart");
    total += 2;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    document.querySelector(".ordersum").innerHTML = orders + "Large Dump Trump $2<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));
    //    alert(total);
    //    ev1.target.appendChild(document.getElementById(data1));
    //    document.getElementById(data1).style.width = "100px";
}

//persist small
function allowDrop4(ev4) {
    ev4.preventDefault();
}

function drag4(ev4) {
    ev4.dataTransfer.setData("text", ev4.target.id);
}

function drop4(ev4) {
    ev4.preventDefault();
    var data4 = ev4.dataTransfer.getData("text");


    total += 1;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    //    document.querySelector("#form").innerHTML = "<img draggable='true' ondragstart='drag(event)' src=' /img/" +  +   "'class='stickSmall' id='smallDuck'>"
    alert("You added a 'Small Persist' to your cart");
    //    document.querySelector("#message1").style.visibility = "visible";
    document.querySelector(".ordersum").innerHTML = orders + "Small Persist $1<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));


}

//perisit large
function allowDrop5(ev5) {
    ev5.preventDefault();
}

function drag5(ev5) {
    ev5.dataTransfer.setData("text", ev5.target.id);
}

function drop5(ev5) {
    ev5.preventDefault();
    var data5 = ev5.dataTransfer.getData("text");

    alert("You added a 'Large Persist' to your cart");
    total += 2;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    document.querySelector(".ordersum").innerHTML = orders + "Large Persist $2<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));
    //    alert(total);
    //    ev1.target.appendChild(document.getElementById(data1));
    //    document.getElementById(data1).style.width = "100px";
}

//***** please small
function allowDrop6(ev6) {
    ev6.preventDefault();
}

function drag6(ev6) {
    ev6.dataTransfer.setData("text", ev6.target.id);
}

function drop6(ev6) {
    ev6.preventDefault();
    var data6 = ev6.dataTransfer.getData("text");


    total += 1;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    //    document.querySelector("#form").innerHTML = "<img draggable='true' ondragstart='drag(event)' src=' /img/" +  +   "'class='stickSmall' id='smallDuck'>"
    alert("You added a 'Small ***** Please' to your cart");
    //    document.querySelector("#message1").style.visibility = "visible";
    document.querySelector(".ordersum").innerHTML = orders + "Small ***** Please $1<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));


}

//***** please large
function allowDrop7(ev7) {
    ev7.preventDefault();
}

function drag7(ev7) {
    ev7.dataTransfer.setData("text", ev7.target.id);
}

function drop7(ev7) {
    ev7.preventDefault();
    var data7 = ev7.dataTransfer.getData("text");

    alert("You added a 'Large ***** Please' to your cart");
    total += 2;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    document.querySelector(".ordersum").innerHTML = orders + "Large ***** Please $2<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));
    //    alert(total);
    //    ev1.target.appendChild(document.getElementById(data1));
    //    document.getElementById(data1).style.width = "100px";
}

//carrot small
function allowDrop8(ev8) {
    ev8.preventDefault();
}

function drag8(ev8) {
    ev8.dataTransfer.setData("text", ev8.target.id);
}

function drop8(ev8) {
    ev8.preventDefault();
    var data8 = ev8.dataTransfer.getData("text");


    total += 1;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    //    document.querySelector("#form").innerHTML = "<img draggable='true' ondragstart='drag(event)' src=' /img/" +  +   "'class='stickSmall' id='smallDuck'>"
    alert("You added a 'Small Alt Trump' to your cart");
    //    document.querySelector("#message1").style.visibility = "visible";
    document.querySelector(".ordersum").innerHTML = orders + "Small Alt Trump $1<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));


}

//carrot large
function allowDrop9(ev9) {
    ev9.preventDefault();
}

function drag9(ev9) {
    ev9.dataTransfer.setData("text", ev9.target.id);
}

function drop9(ev9) {
    ev9.preventDefault();
    var data9 = ev9.dataTransfer.getData("text");

    alert("You added a 'Large Alt Trump' to your cart");
    total += 2;
    document.querySelector(".total").innerHTML = "Total: $" + total + ".00";
    document.querySelector(".ordersum").innerHTML = orders + "Large Alt Trump $2<br>";
    orders = document.querySelector(".ordersum").innerHTML;

    Cookies.set("currentorders", orders);
    Cookies.set("subtotal", total);
    //    alert(Cookies.get("currentorders"));
    //    alert(total);
    //    ev1.target.appendChild(document.getElementById(data1));
    //    document.getElementById(data1).style.width = "100px";
}


//clear cart
document.querySelector("#clear").addEventListener("click", function () {
    Cookies.remove("currentorders");
    window.location.reload();
    //    document.querySelector(".ordersum").innerHTML = orders;
    //    document.querySelector(".ordersum").innerHTML = "<h2>Order Summary</h2><hr>";
    Cookies.set("currentorders", "");
    Cookies.set("subtotal", "");

});
