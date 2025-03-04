var n1 = 0;
var n2 = 0;
var sn = "";
var idencont = 0;
var soma = 0;
var sub = 0;
var vezes = 0;
var divi = 0;

function zero(){
    sn += "0";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "0";
}

function one(){
    sn += "1";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "1";
}

function two(){
    sn += "2";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "2";
}

function three(){
    sn += "3";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "3";
}

function four(){
    sn += "4";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "4";
}

function five(){
    sn += "5";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "5";
}

function six(){
    sn += "6";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "6";
}

function seven(){
    sn += "7";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "7";
}

function eight(){
    sn += "8";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "8";
}

function nine(){
    sn += "9";
    console.log(sn);
    document.getElementById("telinha").innerHTML += "9";
}

function point(){
    sn += ".";
    console.log(sn)
    document.getElementById("telinha").innerHTML += ".";
}

function plus(){
    idencont != 0 ? equal() : null;

    idencont = 1;
    n1 = Number(sn);
    console.log(n1);
    sn = "";
    console.log(sn);
    document.getElementById("telinha").innerHTML += " + ";
}

function minus(){
    idencont != 0 ? equal() : null;

    idencont = 2;
    n1 = Number(sn);
    console.log(n1);
    sn = "";
    console.log(sn);
    document.getElementById("telinha").innerHTML += " - ";
}

function multi(){
    idencont != 0 ? equal() : null;

    idencont = 3;
    n1 = Number(sn);
    console.log(n1);
    sn = "";
    console.log(sn);
    document.getElementById("telinha").innerHTML += " * ";
}

function divided(){
    idencont != 0 ? equal() : null;

    idencont = 4;
    n1 = Number(sn);
    console.log(n1);
    sn = "";
    console.log(sn);
    document.getElementById("telinha").innerHTML += " / ";
}

function equal(){
    n2 = Number(sn);
    console.log(n2);
    switch(idencont){
        case 1:
            soma = Math.round((n1 + n2)*100000)/100000;
            console.log(soma);
            document.getElementById("telinha").innerHTML = soma;
            n1 = soma;
            sn = String(soma);
        break;
        
        case 2:
            sub = Math.round((n1 - n2)*100000)/100000;
            console.log(sub);
            document.getElementById("telinha").innerHTML = sub;
            n1 = sub;
            sn = String(sub);
        break;

        case 3:
            vezes = Math.round((n1 * n2)*100000)/100000;
            console.log(vezes);
            document.getElementById("telinha").innerHTML = vezes;
            n1 = vezes;
            sn = String(vezes);
        break;

        case 4:
            divi = Math.round((n1 / n2)*100000)/100000;
            console.log(divi);
            document.getElementById("telinha").innerHTML = divi;
            n1 = divi;
            sn = String(divi);

        case 0:

        break;

        default:
            document.getElementById("telinha").innerHTML = "ERROR";
    }

    idencont = 0;
}

function deletar(){
    document.getElementById("telinha").innerHTML = "";
    idencont = 0;
    sn = "";
    n1 = 0;
    n2 = 0;
}






/*
var sdig1 = "6";
var sdig2 = "4";
var sdig3 = "2";
var sdig4 = "3";

var sNum1 = sdig1 + sdig2;
var sNum2 = sdig3 + sdig4;
var Num1 = Number(sNum1);
var Num2 = Number(sNum2);
console.log(Num1 + Num2);
*/