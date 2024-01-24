/**
 * @fileoverview This file contains the implementation of the authentication service.
 * It provides functions for signing login and 2FA tokens, hashing passwords, generating
 * 2FA secrets and QR codes, verifying JWT tokens, and checking token validity using
 * the 2FA secret.
 * @module authService
 */

const env = require("../env");
const qrcode = require("qrcode");
const jwt = require("jsonwebtoken");
const { authenticator } = require("otplib");
const bcrypt = require("bcrypt");

/**
 * Signs a login token for the user.
 * @param {Object} user - The user object.
 * @returns {string} - The signed login token.
 */
const signLoginToken = (user) => {
    return jwt.sign(
            {
                user: { login: user.authInfo.login },
            },
            env.JWT_SECRET
    )
}

/**
 * Hashes the given password using bcrypt.
 * @param {string} password - The password to hash.
 * @returns {Promise<string>} - A promise that resolves to the hashed password.
 */
const hashPassword = async (password) => {
    return await bcrypt.hash(password, 10);
}

/**
 * Signs a 2FA token for the user.
 * @param {Object} user - The user object.
 * @returns {string} - The signed 2FA token.
 */
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

/**
 * Generates a secret for 2FA.
 * @returns {Promise<string>} - A promise that resolves to the generated secret.
 */
const generateSecret = async () => {
    return authenticator.generateSecret();
}

/**
 * Generates a QR code for 2FA.
 * @param {string} login - The user's login.
 * @param {string} appName - The name of the application.
 * @param {string} secret - The 2FA secret.
 * @returns {Promise<string>} - A promise that resolves to the QR code image data URL.
 */
const generateQRCode = async (login, appName, secret) => {
    return await qrcode.toDataURL(
            authenticator.keyuri(login, appName, secret)
        )
}

/**
 * Verifies a JWT token.
 * @param {string} token - The JWT token to verify.
 * @returns {Object} - The decoded token payload.
 */
const verifyJwtToken = (token) => {
    return jwt.verify(
            token,
            env.JWT_SECRET
        )
}

/**
 * Checks the validity of a token using the 2FA secret.
 * @param {string} token - The token to check.
 * @param {string} secret - The 2FA secret.
 * @returns {boolean} - True if the token is valid, false otherwise.
 */
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