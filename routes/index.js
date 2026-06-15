
import express from 'express';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const router = express.Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const listings = JSON.parse(
  readFileSync(join(__dirname, '../frontend/data/airbnb_sf_listings_500.json'), 'utf-8')
);

router.get('/api/listings', (req, res) => {
  res.json({ data: listings });
});

export default router;