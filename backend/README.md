# Backend code

## API Specification

Specification in the openapi format is available [here](../doc/openapi.json).
For your convenience it has been converted to a more readable [markdown file](../doc/openapi.md).

## Files

- [index.js](./index.js) - creates the backend api
- [env.js](./env.js) - defines commonly used environment variables
- [db.js](./db.js) - connects with the database
- [auth.js](./auth.js) - declares authentication strategies for passport.js

## Subdirectories

- [controllers](./controllers/) - contains backend endpoint route controllers
- [models](./models) - contains database model definitions
- [routes](./routes/) - contains route definitions
- [service](./service/) - contains some services
- [services](./services/) - contains the other services

~~code quality increases with the number of service folders~~

## How to start

1. Ensure you have node.js installed

    ```bash
    node -v
    ```

2. Ensure you have npm installed

    ```bash
    npm -v
    ```

3. Install the necessary packages

    ```bash
    npm install
    ```

4. Start the backend

    ```bash
    node index.js
    ```
