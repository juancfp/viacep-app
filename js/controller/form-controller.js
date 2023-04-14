import Address from '../models/address.js'
function State() {
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
    state.errorCep = document.querySelector(`div[data-error="cep"]`);
    state.errorNumber = document.querySelector(`div[data-error="number"]`);

    console.log(state);

    state.inputCep.addEventListener("change", e => {
        console.log(e.target.value == '');
        if(e.target.value == ''){
            state.errorCep.style.display='block';
            e.target.classList.toggle("input-error");

        } else {
            state.errorCep.style.display='none';
        }
    })
}