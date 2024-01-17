const express = require('express');
const passport = require("passport");
const authController = require("../controllers/authController");

const router = express.Router();

router.post(
    "/patient/signup",
    passport.authenticate("signup", { session: false }),
    authController.patientSignup
);

router.post(
    "/patient/login",
    passport.authenticate("login", { session: false }),
    authController.patientLogin
);

router.get(
    "/patient/profile",
    passport.authenticate("jwt", { session: false }),
    authController.patientProfile
);

router.post(
    '/patient/generate-2fa-secret',
    passport.authenticate('jwt', { session: false }),
    authController.patientGenerate2FASecret
);


router.post(
    "/patient/verify-otp",
    passport.authenticate("jwt", { session: false }),
    authController.patientVerifyOTP
);

router.post(
    "/patient/login-step2", authController.patientLoginStep2
);

router.post(
    "/patient/disable-2fa",
    passport.authenticate("jwt", { session: false }),
    authController.patientDisable2FA
);

router.post(
    "/doctor/signup",
    passport.authenticate("signup", { session: false }),
    authController.doctorSignup
);


router.post(
    "/doctor/login",
    passport.authenticate("login", { session: false }),
    authController.doctorLogin
);

router.get(
    "/doctor/profile",
    passport.authenticate("jwt", { session: false }),
    authController.doctorProfile
);

router.post(
    '/doctor/generate-2fa-secret',
    passport.authenticate('jwt', { session: false }),
    authController.doctorGenerate2FASecret
);


router.post(
    "/doctor/verify-otp",
    passport.authenticate("jwt", { session: false }),
    authController.doctorVerifyOTP
);

router.post(
    "/doctor/login-step2",
    authController.doctorLoginStep2
);

router.post(
    "/doctor/disable-2fa",
    passport.authenticate("jwt", { session: false }),
    authController.doctorDisable2FA
);

module.exports = router;