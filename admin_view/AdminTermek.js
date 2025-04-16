

export default class AdminTermek {

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
                        <td scope="col">${this.#adadtObj.title}</td>
                        <td scope="col">${this.#adadtObj.price}</td>
                        <td scope="col">${this.#adadtObj.category}</td>
                        <td scope="col">${this.#adadtObj.description}</td>
                        <td scope="col">${this.#adadtObj.image}</td>
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