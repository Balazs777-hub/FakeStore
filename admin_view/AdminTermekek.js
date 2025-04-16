import AdminTermek from "./AdminTermek.js";


export default class AdminTermekek {

    #lista = []
    #pElem;

    constructor(lista, pElem) {

        this.#lista = lista
        this.#pElem = pElem

        this.megjelenit();

    }

    megjelenit() {

        let html = `<table class="table table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Név</th>
                            <th scope="col">Title</th>
                            <th scope="col">Ár</th>
                            <th scope="col">Kategoria</th>
                            <th scope="col">Leírás</th>
                            <th scope="col">Kép</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    </table>`;
        
        this.#pElem.insertAdjacentHTML("beforeend",html)
        this.#lista.forEach((element, index) => {
            new AdminTermek(element, this.#pElem.querySelector("table tbody"))
        });
    }
}