const express = require('express');
const cors = require("cors");
const Patientservice = require("./service/patientService")

const app = express();
const orderRoutes = require('./controllers/orderController');
const passport = require("passport");
const db = require("./db");
const auth = require("./auth");

const PORT = 3000;
app.use(express.json());

app.use("/api", cors());

app.use('/api', orderRoutes);
app.post(
    "/api/patient/signup",
    passport.authenticate("signup", { session: false }),
    Patientservice.signup
);


app.post(
    "/api/patient/login",
    passport.authenticate("login", { session: false }),
    Patientservice.login
);

app.get(
    "/api/patient/profile",
    passport.authenticate("jwt", { session: false }),
    Patientservice.profile
);

app.post('/api/patient/generate-2fa-secret', passport.authenticate('jwt', { session: false }), Patientservice.generate2faSecret);


app.post(
    "/api/patient/verify-otp",
    passport.authenticate("jwt", { session: false }),
    Patientservice.verifyOtp
);

app.post(
    "/api/patient/login-step2", Patientservice.loginStep2
);

app.post(
    "/api/patient/disable-2fa",
    passport.authenticate("jwt", { session: false }),
    Patientservice.disable2fa
);

app.listen(PORT, () => {
  console.log(`App works on http://localhost:${PORT}`);
});