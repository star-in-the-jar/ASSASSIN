# Backend

## API Specification

Specification in the openapi format is available [here](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/openapi.yaml).
For your convenience it has been converted to a more readable [markdown file](https://github.com/Stanlee77/ASSASSIN/blob/master/doc/openapi.md).
Additionally Swagger documentation is available at the '/docs' path once the backend is running.

## Files

- [server.js](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/server.js) - loads the backend and middleware
- [index.js](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/index.js) - creates the backend api
- [env.js](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/env.js) - defines commonly used environment variables

## Subdirectories

- [controllers](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/controllers/) - contains backend endpoint route controllers
- [db](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/db) - contains database related files like connection definitions and model definitions
- [routes](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/routes/) - contains route definitions
- [services](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/services/) - contains services
- [tests](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/__tests__/) - contains backend tests
- [middleware](https://github.com/Stanlee77/ASSASSIN/blob/master/backend/middleware/) - contains backend middleware like logger

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

You can find more broad documentation on backend architecture and design [here](https://github.com/Stanlee77/ASSASSIN/blob/master/doc/backend.pdf)
