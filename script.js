let a;
let b;
let c;
let d;
let e;
let f;
let g;

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

}
