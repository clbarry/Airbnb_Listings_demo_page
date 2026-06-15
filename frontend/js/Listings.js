export default function Listings() {
  const listing = {};
  console.log("👍🏼 Listings Initialized");

  const form = document.getElementById("create-listing-form");
  const listingsContainer = document.querySelector("#listings-container");

  /* append listing to the page */
  /* object destructuring */
  const appendListing = ({title, price, description, host = 'Sally'}) => {
    console.log("Append Listing", title);

    const listingDiv = document.createElement('div');
    listingDiv.className = 'listing col-6';
    listingDiv.innerHTML = `<!--article for each card-->
        <article class="card">
          <img
            src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
            class="card-img-top"
            alt="thumnail photo of an appartment, showing a double bed, a futon, and a rocking chair. The rocking chair and futon are arranged as a seating are with a small table."
          />

          <div class="card-body">
            <h3>
              ${title}
            </h3>
            <div class="host">${host}</div>
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
