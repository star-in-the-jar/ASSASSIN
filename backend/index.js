const express = require('express');
const cors = require("cors");
const controllers = require("./controllers")
const app = express();

const passport = require("passport");
const db = require("./db");
const auth = require("./auth");

const PORT = 3000;
app.use(express.json());

app.use("/api", cors());

app.post(
    "/api/signup",
    passport.authenticate("signup", { session: false }),
    controllers.signup
);

app.post("/api/login", controllers.login);

app.get(
    "/api/profile",
    passport.authenticate("jwt", { session: false }),
    controllers.profile
);

app.listen(PORT, () => {
  console.log(`App works on http://localhost:${PORT}`);
});