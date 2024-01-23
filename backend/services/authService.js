const env = require("../env");
const qrcode = require("qrcode");
const jwt = require("jsonwebtoken");
const { authenticator } = require("otplib");
const bcrypt = require("bcrypt");

const signLoginToken = (user) => {
    return jwt.sign(
            {
                user: { login: user.authInfo.login },
            },
            env.JWT_SECRET
    )
}

const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

const sign2FAToken = (user) => {
    return jwt.sign(
            {
                //loginStep2Verification
                user: { login: user.authInfo.login },
            },
            env.JWT_SECRET,
            { expiresIn: "5m" }
    )
}

const generateSecret = async () => {
    return authenticator.generateSecret();
}

const generateQRCode = async (login, appName, secret) => {
    return await qrcode.toDataURL(
            authenticator.keyuri(login, appName, secret)
        )
}

const verifyJwtToken = (token) => {
    return jwt.verify(
            token,
            env.JWT_SECRET
        )
}

const checkTokenValidity = (token, secret) => {
    return authenticator.check(token, secret)
}

module.exports = {
    signLoginToken,
    sign2FAToken,
    generateSecret,
    generateQRCode,
    verifyJwtToken,
    checkTokenValidity,
    hashPassword
};