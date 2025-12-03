var burger;
var boisson;
var principal;
var sauce;
var dessert;

document.getElementById("coca").onclick = coc;
document.getElementById("fanta").onclick = fan;
document.getElementById("sprite").onclick = spr;
document.getElementById("oasis").onclick = oas;
document.getElementById("schweppes").onclick = sch;
document.getElementById("up7").onclick = up7;

document.getElementById("frites").onclick = fri;
document.getElementById("nuggets").onclick = nug;

document.getElementById("ketchup").onclick = ket;
document.getElementById("mayonnaise").onclick = may;

document.getElementById("glace").onclick = gla;
document.getElementById("yaourt").onclick = yao;
document.getElementById("donut").onclick = don;

function che() {
    burger = "Chesseburger";
}

function ham() {
    burger = "Hamburger";
}

function dob() {
    burger = "Double burger";
}

function fis() {
    burger = "Fishburger";
}

function coc() {
    boisson = "Coca";
}

function fan() {
    boisson = "Fanta";
}

function spr() {
    boisson = "Sprite";
}

function oas() {
    boisson = "Oasis";
}

function sch() {
    boisson = "Schweppes";
}

function up7() {
    boisson = "7up";
}

function fri() {
    principal = "Frites";
}

function nug() {
    principal = "Nuggets";
}

function ket() {
    sauce = "Ketchup";
}

function may() {
    sauce = "Mayonnaise";
}

function gla() {
    dessert = "Glaces";
}

function yao() {
    dessert = "Yaourt";
}

function don() {
    dessert = "Donut";
}

function commande() {
    window.location.href= "Commande.html"
}