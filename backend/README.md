# Backend code

## API Specification

All endpoints expect the requests to carry JSON content.
In the following specification fields mean JSON object keys.
Most endpoints not related to login use the JWT authentication method, and require all requests to have a token within the "Authorization" header.

```HTTP
Authorization: Bearer <yourtoken>
```

### POST /api/signup

This endpoint is used to sign up a new user.

**Body**

| Field name | Type    | Value                |
| ---------- | ------- | -------------------- |
| email      | string  | New user's email     |
| password   | string  | New user's password  |
| age        | integer | New user's age       |

**Return**

```JSON
{
    "message":string,
    "user":{

    }
}
```

---

### POST /api/login

This endpoint is used to log in an existing user, or move towards the next step of the login.

**Body**

| Field name | Type    | Value            |
| ---------- | ------- | ---------------- |
| email      | string  | User's email     |
| password   | string  | User's password  |

**Return**

```JSON
{
    "message":string,
    "twofaEnabled":boolean,
    ...
}
```

Depending on the twofaEnabled field there will be either a "token" field, or "loginStep2VerificationToken" field.
If 2FA is disabled for the user trying to log in, then the login process is complete and the provided token is the auth token.
Otherwise you must perform a [second call](#post-apilogin-step2) to finish the log in.

---

### POST /api/login-step2

This endpoint is used to perform the second step of the login process.

**Body**

| Field name                       | Type    | Value                   |
| -------------------------------- | ------- | ----------------------- |
| loginStep2VerificationToken      | string  | Token from login step 1 |
| twofaToken                       | string  | User's 2FA OTP token    |

**Return**

```JSON
{
    "message":string,
    "token":string
}
```

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
