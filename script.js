var m = [" the Outworlder","Starfunk"," Atom"," flip"," Nova","DJ Stone" ];
var f = ["Sharp Violet", " the G0ddess","Digital Rose"," Thorns","Redfeather" , "Lavender"];
var strOne;
var strTwo;


function myFunction(){
    var n = Math.floor(6 * Math.random());
    var randName = m[n];
    strOne = document.querySelector(".iptOne").value;
    strTwo = document.querySelector(".iptTwo").value;

console.log(n);
var full = strOne+strTwo;
switch(full){
    case "ZionWillett": alert("Ah, the maker of this site");
    break;
    default: var a = strOne+ " " + randName + " "+strTwo;
    document.querySelector(".target").innerHTML = a;
 }
}
function myFunction2(){
    var n = Math.floor(6 * Math.random());
    var rondName = f[n];
    strOne = document.querySelector(".iptOne").value;
    strTwo = document.querySelector(".iptTwo").value;

var full = strOne+strTwo;
switch(full){
    case "ZionWillett": alert("Ah, the maker of this site");
    break;
    default: var b = strOne+ " " + rondName + " "+strTwo;
    document.querySelector(".target").innerHTML = b;
 }
}







//maybe another function

//random name from first or last array

//switch to check for "special name"

//user name should have toUpperCase