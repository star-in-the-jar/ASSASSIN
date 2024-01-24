/**
 * @fileoverview Passport service module for authentication and authorization.
 * @module passportService
 */

const passport = require("passport");
const extractJwt = require("passport-jwt").ExtractJwt;
const jwtStrategy = require("passport-jwt").Strategy;
const localStrategy = require("passport-local").Strategy;

const patientService = require("../services/patientService");
const doctorService = require("../services/doctorService");

const env = require("../env");
const bcrypt = require("bcrypt");

/**
 * Passport strategy for signing up a patient.
 * @name signupPatient
 * @function
 * @memberof module:passportService
 * @param {Object} req - The request object.
 * @param {string} login - The login username.
 * @param {string} password - The password.
 * @param {function} done - The callback function.
 * @returns {Promise} - A promise that resolves when the signup process is complete.
 */
passport.use(
    "signupPatient",
    new localStrategy(
        {
            usernameField: "authInfo[login]",
            passwordField: "authInfo[password]",
            passReqToCallback: true,
        },
        async (req, login, password, done) => {
            try {
                const patientExists = await patientService.getPatientByLogin(login);
                if (patientExists) {
                    return done(null, false, {
                        message: `User with login ${login} already exists`,
                    });
                }
                const hashedPassword = await bcrypt.hash(password, 10);

                const user = await patientService.createPatientAuth({
                    login: login,
                    password: hashedPassword,
                });
                await user.save();

                return done(null, {
                    login: user.authInfo.login,
                });
            } catch (error) {
                console.error(error);
                return done(error);
            }
        }
    )
);

/**
 * Passport strategy for logging in a patient.
 * @name loginPatient
 * @function
 * @memberof module:passportService
 * @param {Object} req - The request object.
 * @param {string} login - The login username.
 * @param {string} password - The password.
 * @param {function} done - The callback function.
 * @returns {Promise} - A promise that resolves when the login process is complete.
 */
passport.use(
    "loginPatient",
    new localStrategy(
        {
            usernameField: "authInfo[login]",
            passwordField: "authInfo[password]",
            passReqToCallback: true,
        },
        async (req, login, password, done) => {
            try {
                const user = await patientService.getPatientByLogin(login);
                if (!user) {
                    return done(null, false, {
                        message: "Invalid login or password",
                    });
                }
                const validate = await user.verifyPassword(password);

                if (!validate) {
                    return done(null, false, {
                        message: "Invalid login or password",
                    });
                }

                return done(null, user, {
                    message: "Logged in successfully",
                });
            } catch (error) {
                return done(error);
            }
        }
    )
);

/**
 * Passport strategy for authenticating a patient using JWT.
 * @name jwtPatient
 * @function
 * @memberof module:passportService
 * @param {Object} token - The JWT token.
 * @param {function} done - The callback function.
 * @returns {Promise} - A promise that resolves when the authentication process is complete.
 */
passport.use(
    "jwtPatient",
    new jwtStrategy(
        {
            secretOrKey: env.JWT_SECRET,
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
            try {
                const user = await patientService.getPatientByLogin(token.user.login);
                if (!user) {
                    return done(null, false);
                }
                return done(null, {
                    login: user.authInfo.login,
                    twofaEnabled: user.twofaEnabled,
                });
            } catch (error) {
                return done(error);
            }
        }
    )
);

// passport.use(
//     "signupDoctor",
//     new localStrategy(
//         {
//             usernameField: "authInfo[login]",
//             passwordField: "authInfo[password]",
//             passReqToCallback: true,
//         },
//         async (req, login, password, done) => {
//             try {
//                 const patientExists = await doctorService.getDoctorByLogin(login);
//                 if (patientExists) {
//                     return done(null, false, {
//                         message: `User with login ${login} already exists`,
//                     });
//                 }
//                 const hashedPassword = await bcrypt.hash(password, 10);
//
//                 const user = await doctorService.createDoctorAuth({ //??????????
//                     login: login,
//                     password: hashedPassword,
//                 });
//
//                 if (!user) {
//                     return done(null, false, {
//                         message: "Invalid hospital login or password",
//                     });
//                 }
//                 await user.save();
//
//                 return done(null, {
//                     login: user.authInfo.login,
//                 });
//             } catch (error) {
//                 console.error(error);
//                 return done(error);
//             }
//         }
//     )
// );
//
// passport.use(
//     "loginDoctor",
//     new localStrategy(
//         {
//             usernameField: "authInfo[login]",
//             passwordField: "authInfo[password]",
//             passReqToCallback: true,
//         },
//         async (req, login, password, done) => {
//             try {
//                 const user = await doctorService.getDoctorByLogin(login);
//                 if (!user) {
//                     return done(null, false, {
//                         message: "Invalid login or password",
//                     });
//                 }
//                 const validate = await user.verifyPassword(password);
//
//                 if (!validate) {
//                     return done(null, false, {
//                         message: "Invalid login or password",
//                     });
//                 }
//
//                 return done(null, user, {
//                     message: "Logged in successfully",
//                 });
//             } catch (error) {
//                 return done(error);
//             }
//         }
//     )
// );
//
// passport.use(
//     "jwtDoctor",
//         new jwtStrategy(
//         {
//             secretOrKey: env.JWT_SECRET,
//             jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
//         },
//         async (token, done) => {
//             try {
//                 const user = await doctorService.getDoctorByLogin(token.user.login);
//                 if (!user) {
//                     return done(null, false);
//                 }
//                 return done(null, {
//                     login: user.authInfo.login,
//                     twofaEnabled: user.twofaEnabled,
//                 });
//             } catch (error) {
//                 return done(error);
//             }
//         }
//     )
// );
