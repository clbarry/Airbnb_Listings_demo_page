/* initialize modules */
import Listings from "./Listings.js"

function MainModule() {
    const me = {};

    me.listings = Listings();

    return me;
}

/* main */
const main = MainModule();
