const passport = require("passport");
const passportStrategies = require("../services/passportService");

const patientService = require("../services/patientService");
const doctorService = require("../services/doctorService");
const authService = require("../services/authService");

const patientSignup = async (req, res) => {
    return res.status(201).json({
        message: "Signup successful",
        user: req.user,
    });
}

const patientLogin = async (req, res, next) => {
    passport.authenticate("loginPatient", { session: false }, async (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({
                message: "Invalid login or password",
            });
        }

        if (!user.twofaEnabled) {
            const signedToken = authService.signLoginToken(user)
            return res.json({
                message: "Login successful",
                twofaEnabled: false,
                token: signedToken
            });
        } else {
            const signedToken = authService.sign2FAToken(user)
            return res.json({
                message: "Please complete 2-factor authentication",
                twofaEnabled: true,
                loginStep2VerificationToken: signedToken
            });
        }
    })(req, res, next);
};

const patientProfile = async (req, res) => {
    return res.json({
        message: "Success",
        user: req.user,
    });
};

const patientGenerate2FASecret = async (req, res) => {
    let user = await patientService.getPatientByLogin(req.user.login)

    if (req.twofaEnabled) {
        return res.status(400).json({
            message: "2FA already verified and enabled",
            twofaEnabled: req.twofaEnabled,
        });
    }

    const secret = await authService.generateSecret();

    user.twofaSecret = secret;
    await user.save();
    const appName = "2FALogin";
    qrImage = await authService.generateQRCode(req.user.login, appName, secret)
    return res.json({
        message: "2FA secret generation successful",
        secret: secret,
        qrImageDataUrl: qrImage,
        twofaEnabled: user.twofaEnabled,
    });
};

const patientVerifyOTP = async (req, res) => {
    let user = await patientService.getPatientByLogin(req.user.login)
    if (user.twofaEnabled) {
        return res.json({
            message: "2FA already verified and enabled",
            twofaEnabled: user.twofaEnabled,
        });
    }
    const token = req.body.token.replaceAll(" ", "");

    const tokenCheck = authService.checkTokenValidity(token, user.twofaSecret)
    if (!tokenCheck) {
        return res.status(400).json({
            message: "OTP verification failed: Invalid token",
            twofaEnabled: user.twofaEnabled,
        });
    } else {
        user.twofaEnabled = true;
        user.save();

        return res.json({
            message: "OTP verification successful",
            twofaEnabled: user.twofaEnabled,
        });
    }
};

const patientLoginStep2 = async (req, res) => {
    let loginStep2VerificationToken = null;
    try {
        const step2VerificationToken = authService.verifyJwtToken(req.body.loginStep2VerificationToken)
        loginStep2VerificationToken = step2VerificationToken

    } catch (err) {
        return res.status(401).json({
            message: err,
        });
    }
    const token = req.body.twofaToken.replaceAll(" ", "");
    const user = await patientService.getPatientByLogin(loginStep2VerificationToken.user.login)

    const tokenCheck = authService.checkTokenValidity(token, user.twofaSecret)

    if (!tokenCheck) {
        return res.status(400).json({
            message: "OTP verification failed: Invalid token",
        });
    } else {
        const signedToken = authService.signLoginToken(user)
        return res.json({
            message: "OTP verification successful",
            token: signedToken
        });
    }
};

const patientDisable2FA = async (req, res) => {
    let user = await patientService.getPatientByLogin(req.user.authInfo.login)
    user.twofaEnabled = false;
    user.twofaSecret = "";
    await user.save();

    return res.json({
        message: "2FA disabled successfully",
        twofaEnabled: user.twofaEnabled,
    });
};

const doctorSignup = async (req, res) => {
    return res.status(201).json({
        message: "Signup successful",
        user: req.user,
    });
}

const doctorLogin = async (req, res, next) => {
    passport.authenticate("loginDoctor", { session: false }, async (err, user, info) => {
        if (err || !user) {
            return res.status(401).json({
                message: "Invalid login or password",
            });
        }

        if (!user.twofaEnabled) {
            signedToken = authService.signLoginToken(user)
            return res.json({
                message: "Login successful",
                twofaEnabled: false,
                token: signedToken
            });
        } else {
            loginStep2VerificationToken = authService.sign2FAToken(user)
            return res.json({
                message: "Please complete 2-factor authentication",
                twofaEnabled: true,
                loginStep2VerificationToken: loginStep2VerificationToken
            });
        }
    })(req, res, next);
};

const doctorProfile = async (req, res) => {
    return res.json({
        message: "Success",
        user: req.user,
    });
};

const doctorGenerate2FASecret = async (req, res) => {
    const user = await doctorService.getDoctorByLogin(req.user.login)

    if (req.twofaEnabled) {
        return res.status(400).json({
            message: "2FA already verified and enabled",
            twofaEnabled: req.twofaEnabled,
        });
    }

    const secret = await authService.generateSecret();

    user.twofaSecret = secret;
    await user.save();
    const appName = "2FALogin";

    return res.json({
        message: "2FA secret generation successful",
        secret: secret,
        qrImageDataUrl: authService.generateQRCode(login, appName, secret),
        twofaEnabled: user.twofaEnabled,
    });
};

const doctorVerifyOTP = async (req, res) => {
    const user = await doctorService.getDoctorByLogin(req.user.login)
    if (user.twofaEnabled) {
        return res.json({
            message: "2FA already verified and enabled",
            twofaEnabled: user.twofaEnabled,
        });
    }

    const token = req.body.token.replaceAll(" ", "");

    const tokenCheck = authService.checkTokenValidity(token, user.twofaSecret)

    if (!tokenCheck) {
        return res.status(400).json({
            message: "OTP verification failed: Invalid token",
            twofaEnabled: user.twofaEnabled,
        });
    } else {
        user.twofaEnabled = true;
        user.save();

        return res.json({
            message: "OTP verification successful",
            twofaEnabled: user.twofaEnabled,
        });
    }
};

const doctorLoginStep2 = async (req, res) => {
    let loginStep2VerificationToken = null;
    try {
        loginStep2VerificationToken = authService.verifyJwtToken(req.body.loginStep2VerificationToken)

    } catch (err) {
        return res.status(401).json({
            message: err,
        });
    }
    const token = req.body.twofaToken.replaceAll(" ", "");
    const user = await doctorService.getDoctorByLogin(loginStep2VerificationToken.loginStep2Verification.login)

    const tokenCheck = authService.checkTokenValidity(token, user.twofaSecret)

    if (!tokenCheck) {
        return res.status(400).json({
            message: "OTP verification failed: Invalid token",
        });
    } else {
        signedToken = authService.signLoginToken(user)
        return res.json({
            message: "OTP verification successful",
            token: signedToken
        });
    }
};

const doctorDisable2FA = async (req, res) => {
    let user = await doctorService.getDoctorByLogin(req.user.authInfo.login)
    user.twofaEnabled = false;
    user.twofaSecret = "";
    await user.save();

    return res.json({
        message: "2FA disabled successfully",
        twofaEnabled: user.twofaEnabled,
    });
};

module.exports = {
    patientSignup,
    patientLogin,
    patientProfile,
    patientGenerate2FASecret,
    patientVerifyOTP,
    patientLoginStep2,
    patientDisable2FA,
    doctorSignup,
    doctorLogin,
    doctorProfile,
    doctorGenerate2FASecret,
    doctorVerifyOTP,
    doctorLoginStep2,
    doctorDisable2FA
};