const express = require('express');
const dotenv = require('dotenv');
const contactRoutes = require('./routes/contactRoutes');
const cors = require('cors');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use('/api', contactRoutes);

const PORT = process.env.PORT || 3100;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));