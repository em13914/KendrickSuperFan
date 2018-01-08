// Each if the images is "listening" for a click and then will run a specific function
// https://www.w3schools.com/js/js_htmldom_eventlistener.asp

document.getElementById("kdot0").addEventListener("click", spit0);
document.getElementById("kdot1").addEventListener("click", spit1);
document.getElementById("kdot2").addEventListener("click", spit2);
document.getElementById("kdot3").addEventListener("click", spit3);
document.getElementById("kdot4").addEventListener("click", spit4);
document.getElementById("kdot5").addEventListener("click", spit5);

function spit0() {
    document.getElementById('igot').play();
}

function spit1() {
    document.getElementById('mr1thru5').play();
}

function spit2() {
    document.getElementById('miseducated').play();
}

function spit3() {
    document.getElementById('mydna').play();
}

function spit4() {
    document.getElementById('compton').play();
}

function spit5() {
    document.getElementById('pray').play();
}
