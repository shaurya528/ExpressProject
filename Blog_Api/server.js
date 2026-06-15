import express from 'express';
import dbConnect from './config/dbConnection.js';
import 'dotenv/config';
import allRoutes from './routes/define_routes.js'

const PORT = process.env.PORT || 3008;
const app = express();

dbConnect();
app.use(express.json());

// Use all routes with /api prefix
app.use('/api', allRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
