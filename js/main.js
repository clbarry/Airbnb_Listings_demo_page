/* initialize modules */
import Listings from "./Listings.js"

/* define constants */
const inTitle = document.querySelector("#input-title")
const inPrice = document.querySelector("#input-price")
const inDescription = document.querySelector("#input-description")
const btnCancel = document.querySelector("#btn-cancel")



/* event handlers */

/* cancel button */
const onClickCancel = (event) => {
    /* don't navigate to another page */
    event.preventDefault();
    inTitle.value = "";
    inPrice.value = "200";
    inDescription.value = "";
}    

btnCancel.addEventListener("click", onClickCancel);



function MaineModule(name ="Main Module") {
    const me = {};

    console.log(`${name} initialized`)

    let count = 0

    function incr() {
        count += 1;
        return count;
    }

    me.incr = incr;
    me.name=name;
    return me;
}

/* main */
const main= MaineModule();
const secondary = MaineModule("Secondary Module");

console.log("main incr", main.incr());
console.log("main incr", main.incr());
console.log('secondary incr', secondary.incr());
console.log("main incr", main.incr());
