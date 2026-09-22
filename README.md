# Modwerks website

A responsive, static Modwerks landing site inspired by the supplied Avant Garde Collection screenshots. It uses the supplied Modwerks logo, dark layout, red accents, two Services pages, and a direct Our Shop page with Google Maps, Apple Maps, and Waze directions.

## Run locally

```sh
npm run build
npm start
```

Open `http://localhost:8080`. There are no npm dependencies. The generated HTML files can also be served by any static host.

## Pages

- `index.html` — landing page
- `services/vehicle-service.html` — service details
- `services/vehicle-storage.html` — storage inquiry
- `services/request-service.html` — service intake preview
- `services/request-storage.html` — storage intake preview
- `our-shop.html` — address, hours, phone, and map links

Edit `build.mjs` for page copy or navigation, then run `npm run build`. Edit `styles.css` for visual changes.

The shop exterior and interior photos were provided by Modwerks. The red car hero and vehicle storage images are illustrative. Storage availability, rates, and facility details are intentionally left for the shop to confirm.

The two intake pages collect vehicle and contact details, then show a review screen. They intentionally do not submit or transmit data until a backend is connected.

The Our Shop page has an interactive OpenStreetMap preview centered on the shop. Map tiles require an internet connection. The local Leaflet files and license are in `assets/vendor/`.

## Production deployment

The Vercel project is `logan-gilley-s-projects/modwerks`, live at https://modwerks.vercel.app. `vercel.json` runs `npm run build:vercel`, which regenerates the pages and copies only the site files into `public/` for deployment.

To publish later changes from this directory, run `vercel deploy --prod`. The two intake forms remain previews and do not transmit submissions.
