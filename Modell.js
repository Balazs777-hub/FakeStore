export default class Modell {


    #lista= []

    constructor(lista) {

        this.#lista=lista

    }

    getAdat(vegpont, callback) {

        fetch(vegpont)
          .then(response => response.json())
          .then(data => {
            this.#lista = data
            console.log(this.#lista);
            callback(this.#lista)
        })
        .catch(error=>console.log(error));
        
    }

    deletAdat() {

    }

    postAdat() {

    }
}