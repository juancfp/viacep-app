

let handler = {}



handlerFactory("cep", "change", (e) => {
    if (e.target.value == "") {
        try {
            setFormError("cep", "Campo requerido");
            e.target.classList.add("input-error");

        } catch (e) {
            console.error("handleInputCepChange error");
        }
    } else {
        try {
            setFormError("cep", "");
            e.target.classList.remove("input-error");

        } catch (e) {
            console.error("handleInputCepChange error");
        }
    }
})
handlerFactory("number", "change", e => {
    if (e.target.value == "") {
        try {
            setFormError("number", "Campo requerido");
            e.target.classList.add("input-error");

        } catch (e) {
            console.error("handleInputNumberChange error");
        }
    } else {
        try {
            setFormError("number", "");
            e.target.classList.remove("input-error");

        } catch (e) {
            console.error("handleInputNumberChange error");
        }
    }
});



function handlerFactory(key, event, callback) {
    
    handler[key] = {[event] : callback};
}

function setFormError(key, message) {
    const inputElementMessage = document.querySelector(`div[data-error="${key}"]`);
    
    try {
        inputElementMessage.innerHTML = message;
        
    } catch (e) {
        throw "setInputError";
    }
    
}

export { handler };