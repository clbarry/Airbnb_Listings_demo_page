export default function Listings() {
  const Listings = {};

  /* Initialize Listings - From the HTML create-listings-form */
  console.log("👍🏼 Listings Initialized");
  const form = document.getElementById("create-listing-form");

    const listingsContainer = document.querySelector("#listings-container");

  /* append listing to the page */
  const appendListing = (listing) => {
    console.log("Append Listing", listing);
  };

  /* event handler for creating a listing */
  const onCreate = (event) => {
    event.preventDefault();
    console.log("🤓 On create listing", event);

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
  };

  form.addEventListener("submit", onCreate);

  appendListing(listing);

  return Listings;
}
