const passport = require("passport");
const extractJwt = require("passport-jwt").ExtractJwt;
const jwtStrategy = require("passport-jwt").Strategy;
const localStrategy = require("passport-local").Strategy;
const PatientModel = require("./models/Patient");
const DoctorModel = require("./models/Hospital");
const env = require("./env");
const bcrypt = require("bcrypt");


passport.use(
    "signup",
    new localStrategy(
        {
            usernameField: "authInfo[login]",
            passwordField: "authInfo[password]",
            passReqToCallback: true,
        },
        async (req, login, password, done) => {
            try {
                if (await PatientModel.findOne({ "login": login })) {
                    return done(null, false, {
                        message: `User with login ${login} already exists`,
                    });
                }
                const hashedPassword = await bcrypt.hash(password, 10);


                const user = await PatientModel.create({
                    authInfo: {
                        login: login,
                        password: hashedPassword,
                    },
                });

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

passport.use(
    "login",
    new localStrategy(
        {
            usernameField: "authInfo[login]",
            passwordField: "authInfo[password]",
            passReqToCallback: true,
        },
        async (req, login, password, done) => {
            try {
                const user = await PatientModel.findOne({ "authInfo.login": login });

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

passport.use(
    "jwt",
        new jwtStrategy(
        {
            secretOrKey: env.JWT_SECRET,
            jwtFromRequest: extractJwt.fromAuthHeaderAsBearerToken(),
        },
        async (token, done) => {
            try {
                const user = await PatientModel.findOne({
                    "authInfo.login": token.user.login,
                });
                if (!user) {
                    return done(null, false);
                }
                console.log("getloginFromToken Success");
                return done(null, {
                    login: user.authInfo.login,
                    twofaEnabled: user.twofaEnabled,
                });
            } catch (error) {
                console.log("strategy error");
                return done(error);
            }
        }
    )
);

