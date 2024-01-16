const express = require('express');
const passport = require("passport");
const Patientservice = require("../service/patientService");
const Doctorservice  = require("../service/doctorService");

const router = express.Router();

router.post(
    "/patient/signup",
    passport.authenticate("signup", { session: false }),
    Patientservice.signup
);


router.post(
    "/patient/login",
    passport.authenticate("login", { session: false }),
    Patientservice.login
);

router.get(
    "/patient/profile",
    passport.authenticate("jwt", { session: false }),
    Patientservice.profile
);

router.post(
    '/patient/generate-2fa-secret',
    passport.authenticate('jwt', { session: false }),
    Patientservice.generate2faSecret
);


router.post(
    "/patient/verify-otp",
    passport.authenticate("jwt", { session: false }),
    Patientservice.verifyOtp
);

router.post(
    "/patient/login-step2", Patientservice.loginStep2
);

router.post(
    "/patient/disable-2fa",
    passport.authenticate("jwt", { session: false }),
    Patientservice.disable2fa
);

router.post(
    "/doctor/signup",
    passport.authenticate("signup", { session: false }),
    Doctorservice.signup
);


router.post(
    "/doctor/login",
    passport.authenticate("login", { session: false }),
    Doctorservice.login
);

router.get(
    "/doctor/profile",
    passport.authenticate("jwt", { session: false }),
    Doctorservice.profile
);

router.post(
    '/doctor/generate-2fa-secret',
    passport.authenticate('jwt', { session: false }),
    Doctorservice.generate2faSecret
);


router.post(
    "/doctor/verify-otp",
    passport.authenticate("jwt", { session: false }),
    Doctorservice.verifyOtp
);

router.post(
    "/doctor/login-step2",
    Doctorservice.loginStep2
);

router.post(
    "/doctor/disable-2fa",
    passport.authenticate("jwt", { session: false }),
    Doctorservice.disable2fa
);

module.exports = router;