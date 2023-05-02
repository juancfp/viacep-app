import Address from '../models/address.js';
import { handler } from "./form-error.js";



function State() {
    this.address = new Address();

    this.btnSave = null;
    this.btnClear = null;
    this.inputCep = null;
    this.inputStreet = null;
    this.inputCity = null;
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


    state.inputCep.addEventListener("change",  handler .cep.change);
    state.inputNumber.addEventListener("change",  handler .number.change)


}