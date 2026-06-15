export default function Listings() {
  const listing = {};
  console.log("👍🏼 Listings Initialized");

  const form = document.getElementById("create-listing-form");
  const listingsContainer = document.querySelector("#listings-container");

  /* append listing to the page */
  /* object destructuring */
  const appendListing = ({title, price, description, host = 'Sally'}) => {
    console.log("Append Listing", listing);

  const listingDiv = document.createElement('div');
  listingDiv.className = 'listing col-6'
  listingDiv.innerHTML = `<!--article for each card-->;
        <article class="card">;
          <img
            src="https://a0.muscache.com/pictures/b7c2a199-4c17-4ba6-b81d-751719d2dac6.jpg"
            class="card-img-top"
            alt="thumnail photo of an appartment, showing a double bed, a futon, and a rocking chair. The rocking chair and futon are arranged as a seating are with a small table."
          />

          <div class="card-body">
            <h3>
              ${title}
            </h3>
            <div class="host">Holly</div>
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
      <!-- /.listing -->`
  };
          

  /* event handler for creating a listing */
  const onCreate = (event) => {
    event.preventDefault(); // avoid browser from doing typical refresh 
    console.log("🌺 On create listing", event);

    const formData = new FormData(form);
    const listing = Object.fromEntries(formData.entries());
  };

  form.addEventListener("submit", onCreate);

  appendListing(listing);

  return listing;
}
