export default class User {

    #adadtObj={}
    #pElem;

    constructor(adatObj, pElem) {

        this.#adadtObj=adatObj
        this.#pElem=pElem

        this.megjelenit();
        this.torolGOMB = this.#pElem.querySelector("tr:last-child td:last-child .torol")
        console.log(this.torolGOMB)
    }

    megjelenit() {

        let html = ` <tr>
                        <td scope="col">${this.#adadtObj.id}</td>
                        <td scope="col">${this.#adadtObj.username}</td>
                        <td scope="col">${this.#adadtObj.email}</td>
                        <td scope="col">${this.#adadtObj.password}</td>
                        <td scope="col">
                            <button class="torol">🗑</button>
                        <td>
                    </tr>`;

        this.#pElem.insertAdjacentHTML("beforeend", html);
    }

    esemenykezeles() {
        this.torolGOMB.addEventListener("click", () => 
            window.dispatchEvent(new CustomEvent("torol", {detail:this.#adadtObj.id}))
        );
    }
}