export default function Listings() {
  const listing = {};
  console.log("👍🏼 Listings Initialized");

  const form = document.getElementById("create-listing-form");
  const listingsContainer = document.querySelector("#listings-container");

  /* append listing to the page */
  /* object destructuring */
  const appendListing = ({name, price, description, host_name = 'Sally', picture_url}) => {
    console.log("Append Listing", name);

    const listingDiv = document.createElement('div');
    listingDiv.className = 'listing col-6';
    listingDiv.innerHTML = `<!--article for each card-->
        <article class="card">
          <img
            src="${picture_url}"
            class="card-img-top"
            alt="thumbnail photo of listing"
          />

          <div class="card-body">
            <h3>
              ${name}
            </h3>
            <div class="host">${host_name}</div>
            <div class="price">${price}</div>
            <div class="rating">⭐️4.87</div>
            <div
              class="description overflow-scroll"
              style="max-height: 200px"
            >
              ${description}
            </div>
            <!-- /.description -->
            <div class="actions">
              <button class="btn btn-primary">Rent</button>
            </div>
            <!-- /.actions-->
          </div>
          <!-- /.card-body -->
        </article>
        <br>
      <!-- /.listing -->`;
    listingsContainer.appendChild(listingDiv);
  };

  /* event handler for creating a listing */
  const onCreate = (event) => {
    event.preventDefault(); // avoid browser from doing typical refresh
    console.log("🌺 On create listing", event);

    const formData = new FormData(form);
    const newListing = Object.fromEntries(formData.entries());
    appendListing(newListing);
  };

  const fetchListings = async () => {
    console.log("🐰 Fetch Listings");
    const response = await fetch("/api/listings");

    if (!response.ok) {
      console.error("Failed to fetch listings");
      return;
    }

    const data = await response.json();
    console.log("Fetched listings", data);
    data.data.forEach(appendListing);
  };

  form.addEventListener("submit", onCreate);
  fetchListings();

  return listing;
}
