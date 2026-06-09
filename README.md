# SF Airbnb Listings Demo

## Table of Contents
- [Project Objective](#project-objective)
- [Screenshot](#screenshot)
- [Demo](#demo)
- [Features](#features)
- [Tech Requirements](#tech-requirements)
- [Project Structure](#project-structure)
- [How To Install / Use](#how-to-install--use)
- [Available Scripts](#available-scripts)
- [Data Source](#data-source)
- [Linting and Code Style](#linting-and-code-style)
- [Known Issues](#known-issues)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [Author](#author)
- [Class Reference](#class-reference)
- [Acknowledgments](#acknowledgments)
- [License](#license)
- [Contact](#contact)

## Project Objective
Build a responsive demo web page that presents Airbnb-style listings for San Francisco using semantic HTML, custom CSS, and Bootstrap. The goal is to practice front-end structure, layout, styling, and basic modular JavaScript organization in a realistic mini project.

## Screenshot
![Project Screenshot Placeholder](./docs/screenshot-placeholder.png)

> Add your screenshot file at `docs/screenshot-placeholder.png` or update this path to your final image.

## Demo
- Live demo: _Add deployed URL here_
- Optional walkthrough video: _Add video URL here_

## Features
- Responsive page layout using Bootstrap grid.
- Dedicated navigation across Home and About pages.
- Listing cards with image, host, price, rating, and description blocks.
- Modular JavaScript starter structure in `js/main.js` and `js/Listings.js`.

## Tech Requirements
- Node.js 18+ (recommended)
- npm 9+ (recommended)
- Modern web browser (Chrome, Edge, or Firefox)
- Bootstrap 5.3.8
- ESLint and Prettier compatibility tooling

## Project Structure
```text
Airbnb_Listings_demo_page/
├── about.html
├── index.html
├── README.md
├── package.json
├── package-lock.json
├── eslint.config.mjs
├── css/
│   └── main.css
├── js/
│   ├── Listings.js
│   └── main.js
├── data/
│   └── airbnb_sf_listings_500.json
└── scripts/
```

## How To Install / Use
1. Clone the repository:
   ```bash
   git clone https://github.com/clbarry/Airbnb_Listings_demo_page.git
   cd Airbnb_Listings_demo_page
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the project locally:
   - Open `index.html` directly in your browser, or
   - Use a local server (recommended), for example VS Code Live Server.
4. Explore the pages:
   - `index.html` for listings
   - `about.html` for project background

## Available Scripts
- `npm test`: placeholder test script (currently returns a default message).

## Data Source
- Dataset file: `data/airbnb_sf_listings_500.json`
- Source context: Airbnb listings sample data used for educational demo purposes.

## Linting and Code Style
- ESLint is configured through `eslint.config.mjs`.
- To run linting, add a script such as `"lint": "eslint ."` to `package.json`, then run:
   ```bash
   npm run lint
   ```

## Known Issues
- No production build process yet.
- Test script is still a placeholder.
- Screenshot path is currently a placeholder.

## Roadmap
- Render listing cards dynamically from JSON data.
- Add filtering/search controls for listings.
- Add form validation for Create Listing workflow.
- Add automated tests and CI checks.

## Contributing
This project is currently coursework-focused, but suggestions and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Commit your changes.
4. Open a pull request with a clear description.

## Author
Carey Barry

## Class Reference
This project was created for Northeastern University Web Development coursework.

- Course homepage: [Northeastern University Khoury College, CS 5610 Web Development (Online)
Northeastern University Oakland
Summer 2026](https://johnguerra.co/classes/webDevelopment_online_summer_2026/)

## Acknowledgments
- Course instruction and materials from CS 5610 Web Development.
- Bootstrap documentation and components.

## License
MIT (as specified in `package.json`).

## Contact
For questions about this project, contact the author through GitHub:
- https://github.com/clbarry
