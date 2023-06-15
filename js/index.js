import {Controller} from "./controller/controller.js";

const controller = new Controller();

//caso tenha algo no session storage...
if(sessionStorage.isVisited === undefined){
    sessionStorage.setItem("isVisited", true);
    sessionStorage.setItem("address", "[]");
}
controller.populate()