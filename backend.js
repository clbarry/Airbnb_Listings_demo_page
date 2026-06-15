import express from 'express';
import mainRoutes from './routes/index.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('frontend'));
app.use('/listings', mainRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});