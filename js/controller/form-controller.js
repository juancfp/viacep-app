import Address from '../models/address.js';


function State() {
    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;
    this.inputCep = null;
    this.inputStreet = null;
    this.inputCity = null;
    this.errorCep = null;
    this.errorNumber = null;
}

//função construtora
const state = new State();


export function init() {
    const formNewAddress = document.forms.newAddress;

    state.btnSave = formNewAddress.btnSave;
    state.btnClear = formNewAddress.btnClear;
    state.inputCep = formNewAddress.cep;
    state.inputStreet = formNewAddress.street;
    state.inputCity = formNewAddress.city;
    state.inputNumber = formNewAddress.number;
    state.errorCep = document.querySelector(`div[data-error="cep"]`);
    state.errorNumber = document.querySelector(`div[data-error="number"]`);

    console.log(state);

    setInputError("cep", "missing")
    //cep apenas números:
    state.inputCep.addEventListener("keyup", (e) => {
        e.target.value = e.target.value.replace(/[^0-9]/g, '');

    })

    setInputError("number", "missing")

}

function setInputError(key, type) {
    const keyCapitalized = `${key.charAt(0).toUpperCase() + key.slice(1)}`; //valor da propriedade 

    //types of error:
    // 1 = missing arguments
    // 2 = ?


    const inputElementMessage = state["error" + keyCapitalized]

    state["input" + keyCapitalized].addEventListener("change", (e) => {
        console.log(state["input" + keyCapitalized])
        console.log("e.value=", e.target.value);
        switch (type) {
            case ("missing" || 1):
                if (e.target.value == "") {
                    inputElementMessage.classList.remove("form-error-hide");
                    inputElementMessage.classList.add("form-required-field-error");
                    e.target.classList.add("input-error");
                } else {
                    inputElementMessage.classList.add("form-error-hide");
                    inputElementMessage.classList.remove("form-required-field-error");
                    e.target.classList.remove("input-error");
                }
                break;

        }
    })

}