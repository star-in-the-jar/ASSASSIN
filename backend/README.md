# Backend code

## API Specification

Specification in the openapi format is available [here](../doc/openapi.json).
For your convenience it has been converted to a more readable [markdown file](../doc/openapi.md).

## Files

- [index.js](./index.js) - creates the backend api
- [env.js](./env.js) - defines commonly used environment variables

## Subdirectories

- [controllers](./controllers/) - contains backend endpoint route controllers
- [db](./db) - contains database related files like connection definitions and model definitions
- [routes](./routes/) - contains route definitions
- [services](./services/) - contains services

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
