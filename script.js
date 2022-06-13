let a;
let b;
let c;
let d;
let e;
let f;
let g;
let h;
let i;
let j;
let x;
let y;
let z;
let food;
let drink;
let dessert;
let costFood;
let costDrink;
let costDessert;
let total;
let wpp;
let wppmsg;
let uri;
let names;
let adress;

function foods(elemento) {
    
    d = elemento.innerHTML;

    a = document.querySelector(`.food .clique`);
    if (a !== null) {
        a.classList.remove("clique");
        
    } 
    elemento.classList.add("clique");
    verified();
}
function drinks(elemento) {

    e = elemento.innerHTML;

    b = document.querySelector(`.drink .clique`);
    if (b !== null) {
        b.classList.remove("clique");
        
    } 
    elemento.classList.add("clique");
    verified();
}
function desserts(elemento) {

    f = elemento.innerHTML;

    c = document.querySelector(`.dessert .clique`);
    if (c !== null) {
        c.classList.remove("clique");
        
    } 
    elemento.classList.add("clique");
    verified();
}
function foodscircle(elemento) {

    j = elemento.querySelector(`.food .off`)
    i = document.querySelector(`.food .on`);
    if (i !== null) {
        i.classList.remove(`on`)
    }
    
    j.classList.add(`on`)
} 
function drinkscircle(elemento) {

    j = elemento.querySelector(`.drink .off`)
    i = document.querySelector(`.drink .on`);
    if (i !== null) {
        i.classList.remove(`on`)
    }
    
    j.classList.add(`on`)
} 
function dessertscircle(elemento) {

    j = elemento.querySelector(`.dessert .off`)
    i = document.querySelector(`.dessert .on`);
    if (i !== null) {
        i.classList.remove(`on`)
    }
    
    j.classList.add(`on`)
} 
function verified() {
    if (d && e && f){
        g = document.querySelector(`.end-one`);
        g.classList.add(`final-button`);
        g.innerHTML = `Fechar pedido`;
    } else {
        g.classList.remove(`final-button`);
        g.innerHTML = `Selecione os 3 itens para fechar o pedido`
    }
}
function sendmessage(){
    food = document.querySelector(`.food  .clique .text-one`).textContent;
    drink = document.querySelector(`.drink  .clique .text-one`).textContent;
    dessert = document.querySelector(`.dessert  .clique .text-one`).textContent;
    costFood = document.querySelector(`.food  .clique span`).textContent;
    costDrink = document.querySelector(`.drink  .clique span`).textContent;
    costDessert = document.querySelector(`.dessert  .clique span`).textContent;
    names = prompt(`Digite seu nome:`);
    adress = prompt(`Digite seu endereço`);
    costFood = Number(costFood.replace(",","."));
    costDrink = Number(costDrink.replace(",","."));
    costDessert = Number(costDessert.replace(",","."));
    total = (costFood + costDrink + costDessert).toFixed(2);
    wpp = `https://wa.me/5586981366094?text=`;
    wppmsg = `Olá, gostaria de fazer o pedido: \n- Prato: ${food} \n- Bebida: ${drink} \n- Sobremesa: ${dessert} \nTotal: R$ ${total} \n\nNome: ${names} \nEndereço: ${adress}`;
    uri = encodeURIComponent(wppmsg);
    window.open(wpp + uri, `_blank`)
}
