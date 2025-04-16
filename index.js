import AdminTermekek from "./admin_view/AdminTermekek.js"
import Modell from "./Modell.js"
import Users from "./Users.js"


const ADMINGOMB = document.getElementById("admin")
const TERMEKGOMB = document.getElementById("termekek")
const KOSARGOMB = document.getElementById("kosar")
const TAROLO = document.querySelector(".tarolo")
const USERSGOMB = document.getElementById(".users")
let LISTA = []

const modell = new Modell(LISTA)
modell.getAdat('https://fakestoreapi.com/products', adminPeldanyosit)

TERMEKGOMB.addEventListener("click", () => {

    TAROLO.innerHTML=`<article class="col-lg-9">Termékek</article>
                    <aside class=""col-lg3>Kosár</aside>`;
    const modell = new Modell(LISTA)
    modell.getAdat('https://fakestoreapi.com/products', adminPeldanyosit)
                    
});

KOSARGOMB.addEventListener("click", () => {

    TAROLO.innerHTML=`<article class="col-lg-12">Kosár</article>`;
    const modell = new Modell(LISTA)
    modell.getAdat('https://fakestoreapi.com/carts', adminPeldanyosit)
});

ADMINGOMB.addEventListener("click", () => {

    TAROLO.innerHTML=`<article class="col-lg-12">Admin</article>`;
    new AdminTermekek(LISTA, TAROLO.querySelector("article"))
    const modell = new Modell(LISTA)
    modell.getAdat('https://fakestoreapi.com/products', adminPeldanyosit)

});

USERSGOMB.addEventListener("click", () => {

  TAROLO.innerHTML=`<article class="col-lg-12">Felhasználók</article>`;
  new Users(LISTA, TAROLO.querySelector("article"))
  const modell = new Modell(LISTA)
  modell.getAdat('https://fakestoreapi.com/users', adminPeldanyosit)

});

function adminPeldanyosit(lista) {

    TAROLO.innerHTML=`<article class="col-lg-12">Admin</article>`;
    new AdminTermekek(lista, TAROLO.querySelector("article"));

}

window.addEventListener("torol", () => {

  console.log(event.detail)
  
})