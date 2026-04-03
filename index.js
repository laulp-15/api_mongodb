const express = require ('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');

const userRoutes = require('./Routes/user.routes');
const productRoutes = require('./Routes/product.routes');

dotenv.config();
connectDB();

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));