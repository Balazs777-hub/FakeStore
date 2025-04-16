import User from "./User.js";


export default class Users {

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
                            <th scope="col">Felhasználó Név</th>
                            <th scope="col">Email</th>
                            <th scope="col">Jelszó</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    </table>`;
        
        this.#pElem.insertAdjacentHTML("beforeend",html)
        this.#lista.forEach((element, index) => {
            new User(element, this.#pElem.querySelector("table tbody"))
        });
    }
}
