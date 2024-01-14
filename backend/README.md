# Backend code

## API Specification

All endpoints expect the requests to carry JSON content.

### POST /api/signup

This endpoint is used to sign up a new user.

---

### POST /api/login

This endpoint is used to log in an existing user, or move towards the next step of the login.

---

### POST /api/login-step2

This endpoint is used to perform the second step of the login process.

---

### GET /api/profile

This endpoint is used to get the profile of the logged-in user.

---

### POST /api/generate-2fa-secret

This endpoint returns a new 2FA secret for the user.

---

### POST /api/verify-otp

This endpoint is used to verify a 2FA OTP.

---

### POST /api/disable-2fa

This endpoint is used to disable 2FA for a specific account.

## Files

- [models.js](./models.js) - defines ODM models
- [index.js](./index.js) - defines the backend API
- [env.js](./env.js) - defines commonly used environment variables
- [db.js](./db.js) - connects with the database and initializes the models from [models.js](./models.js)
- [controllers.js](./controllers.js) - defines route controllers
- [auth.js](./auth.js) - declares authentication strategies for passport.js
