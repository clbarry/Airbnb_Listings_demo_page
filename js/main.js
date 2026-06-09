/*import Listings from "./js/Listings"

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

