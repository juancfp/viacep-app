export class View {
    constructor(){
        this.btnSave = document.forms.newAddress.btnSave;
        this.btnClear = document.forms.newAddress.btnClear;
        this.inputCep = document.forms.newAddress.cep;
        this.inputStreet = document.forms.newAddress.street;
        this.inputCity = document.forms.newAddress.city;
        this.inputNumber = document.forms.newAddress.number;

    }

    
    setController(controller){
        this.controller = controller;
    }

    

}