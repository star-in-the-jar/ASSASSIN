const express = require('express');
const cors = require("cors");
const services = require("./service/patientService")
const app = express();

const passport = require("passport");
const db = require("./db");
const auth = require("./auth");

const PORT = 3000;
app.use(express.json());

app.use("/api", cors());

app.post(
    "/api/patient/signup",
    passport.authenticate("signup", { session: false }),
    services.signup
);


app.post(
    "/api/patient/login",
    passport.authenticate("login", { session: false }),
    services.login
);

app.get(
    "/api/patient/profile",
    passport.authenticate("jwt", { session: false }),
    services.profile
);

app.post('/api/patient/generate-2fa-secret', passport.authenticate('jwt', { session: false }), services.generate2faSecret);


app.post(
    "/api/patient/verify-otp",
    passport.authenticate("jwt", { session: false }),
    services.verifyOtp
);

app.post(
    "/api/patient/login-step2", services.loginStep2
);

app.post(
    "/api/patient/disable-2fa",
    passport.authenticate("jwt", { session: false }),
    services.disable2fa
);
app.listen(PORT, () => {
  console.log(`App works on http://localhost:${PORT}`);
});