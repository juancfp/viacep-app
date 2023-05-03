export function setInputError(key, input, mensagemDeErro){
    const divComMsgErro = document.querySelector(`div[data-error="${key}"]`);

    divComMsgErro.innerHTML = mensagemDeErro;

    if(mensagemDeErro != ""){
        input.classList.add("input-error");
    }
    else {
        input.classList.remove("input-error");
    }

}



export function clearForm(){
    document.forms.newAddress.btnSave.value = "";
    document.forms.newAddress.btnClear.value = "";
    document.forms.newAddress.cep.value = "";
    document.forms.newAddress.cep.focus();
    document.forms.newAddress.street.value = "";
    document.forms.newAddress.city.value = "";
    document.forms.newAddress.number.value = "";
    setInputError("cep", document.forms.newAddress.cep, "");
    setInputError("number", document.forms.newAddress.number, "");

}

