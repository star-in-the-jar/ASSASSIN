const express = require('express');
const cors = require("cors");

const app = express();
const orderRoutes = require('./routes/orderRoutes');
const hospitalRoutes = require('./routes/hospitalRoutes');
const doctorRoutes = require('./routes/doctorRoutes');
const patientRoutes = require('./routes/patientRoutes');
const authRoutes = require('./routes/authRoutes');

const passport = require("passport");

const db = require("./db/dbConnection");
const auth = require("./services/authService");

const PORT = 3000;

app.use(express.json());
app.use("/api", cors());

app.use('/api', orderRoutes);
app.use('/api', hospitalRoutes);
app.use('/api', doctorRoutes);
app.use('/api', patientRoutes);
app.use('/api', authRoutes);

app.listen(PORT, () => {
  console.log(`App works on http://localhost:${PORT}`);
});