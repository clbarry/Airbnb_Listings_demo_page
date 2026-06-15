
import express from 'express';

const router = express.Router();

const listings = [
  {id: 1, name: "Listing 1", price: 100, description: "A cozy apartment in downtown.", host: "Alice"},
  {id: 2, name: "Listing 2", price: 150, description: "A spacious house in the suburbs.", host: "Bob"},
  {id: 3, name: "Listing 3", price: 80, description: "A charming studio near the park.", host: "Charlie"},
  {id: 4, name: "Listing 4", price: 120, description: "A modern condo with a great view.", host: "David"},
  {id: 5, name: "Listing 5", price: 90, description: "A quiet cabin in the woods.", host: "Eve"},
];

router.get('/api/listings', (req, res) => {
  res.json({ data: listings });
});

export default router;