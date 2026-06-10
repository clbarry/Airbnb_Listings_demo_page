export default function Listings() {
  const Listings = {};

  console.log("👍🏼 Listings Initialized");
  const form = document.getElementById("create-listing-form");

  const onCreate = (event) => {
    event.preventDefault();
    console.log("🤓 On create listing", event);

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
  };

  form.addEventListener("submit", onCreate);

  return Listings;
}
