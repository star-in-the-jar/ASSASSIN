const passport = require("passport");
const extractJwt = require("passport-jwt").ExtractJwt;
const jwtStrategy = require("passport-jwt").Strategy;
const localStrategy = require("passport-local").Strategy;
const { PatientModel } = require("./models/Patient");
const env = require("./env");
const bcrypt = require("bcrypt");

passport.use(
    "signup",
    new localStrategy(
        {
            usernameField: "login",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, login, password, done) => {
            try {
                console.log(req.body);
                if (await PatientModel.findOne({ login: login })) {
                    return done(null, false, {
                        message: `User with login ${login} already exists`,
                    });
                }

                const hashedPassword = await bcrypt.hash(password, 10);

                const user = await PatientModel.create({
                    login: login,
                    password: hashedPassword,
                });

                return done(null, {
                    login: user.login,
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
            usernameField: "login",
            passwordField: "password",
            passReqToCallback: true,
        },
        async (req, login, password, done) => {
            try {
                const user = await PatientModel.findOne({ login: login });

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
                    login: token.user?.login,
                });
                return done(null, {
                    login: user.login,
                    twofaEnabled: user.twofaEnabled,
                });
            } catch (error) {
                return done(error);
            }
        }
    )
);
