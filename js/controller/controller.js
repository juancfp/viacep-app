import { setInputError, clearForm } from "../utils/utils.js"
import { View } from "../view/view.js";
import * as Service from "../service/service.js";

// variáveis globais

export class Controller {
    constructor() {
        this.view = new View();
        this.view.setController(this);

        this.view.inputCep.addEventListener("change", this.handleCepChange);
        this.view.inputNumber.addEventListener("change", this.handleNumberChange);
        this.view.btnClear.addEventListener("click", this.handleBtnClearClick);
        this.view.btnSave.addEventListener("click", this.handleBtnSaveClick);

        this.view.inputCep.addEventListener("keyup", this.handleCepKeyUp);
        this.view.inputNumber.addEventListener("keyup", this.handleNumberKeyUp);

    }


    handleNumberKeyUp(event) {
        if(event.target.value.length > 0){
            setInputError("number", event.target, "");
        }
    }


    async handleCepKeyUp(event) {
        try {
            if(event.target.value.length == 8){
                const result = await Service.getJson(`https://viacep.com.br/ws/${event.target.value}/json/`)
                if(! result.erro){
                    setInputError("cep", event.target, "");
                    document.forms.newAddress.city.value = result.localidade;
                    document.forms.newAddress.street.value = result.logradouro;
                } else {

                    throw new Error("Digite um CEP válido");

                }
            }else if(event.target.value.length > 8){
                setInputError("cep", event.target, "Digite um CEP válido");

                document.forms.newAddress.city.value = "";
                document.forms.newAddress.street.value = "";
            } 
            else {
                
                setInputError("cep", event.target, "");

                document.forms.newAddress.city.value = "";
                document.forms.newAddress.street.value = "";
            }
        } catch (e) {
            
            setInputError("cep", event.target, "CEP não encontrado")
        }
    }

    async handleCepChange(event){
        try{
            if(event.target.value == "") {
                setInputError("cep", event.target, "CEP requerido");

            }
            else {

                if(event.target.value.length < 8){
                    setInputError("cep", event.target, "CEP deve conter 8 digitos.")
                    
                } 
                else {

                    if(!event.target.classList.contains("input-error")){
                        setInputError("cep", event.target, "");

                    }

                }


                
            }
        } catch (e) {
            
        }

    }
    handleNumberChange(event){
        try{
            if(event.target.value == "") {
                setInputError("number", event.target, "Número requerido")
            } else {
                setInputError("number", event.target, "");
            }
        } catch (e) {
    
        }
    }
    handleBtnClearClick(event){
        event.preventDefault()

        try {
            clearForm();
        } catch (e) {
            console.error("handleBtnClearClick: ", e)
        }
        
        
    }

    async handleBtnSaveClick(event) {
        event.preventDefault();
        // console.log(await Service.getJson(`https://viacep.com.br/ws/${document.forms.newAddress.cep.value}/json/`));

        
        try{
            if(document.forms.newAddress.number.value == "") {
                setInputError("number", document.forms.newAddress.number, "Número requerido");
            }

            if( document.forms.newAddress.cep.value == "" ){
                setInputError("cep", document.forms.newAddress.cep, "CEP requerido");
                
            }
            if(document.forms.newAddress.number.value != "" && document.forms.newAddress.cep.value.length == 8) {
                document.querySelector("section#list-section").insertAdjacentHTML("beforeend", `
                    <div class="card-item">
                            <h3 class="card-item-heading">${document.forms.newAddress.city.value.toUpperCase()}</h3>
                            <p class="card-item-address">${document.forms.newAddress.street.value}, ${document.forms.newAddress.number.value}</p>
                            <p class="card-item-cep">${document.forms.newAddress.cep.value.slice(0,5)}-${document.forms.newAddress.cep.value.slice(5)}</p>
        
                    </div>
                
                `)

                clearForm();    
            }

        } catch (e) {
            console.log(e);
        }
    }

    
}
