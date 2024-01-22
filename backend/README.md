# Backend code

## API Specification

Specification in the openapi format is available [here](openapi.yaml).
For your convenience it has been converted to a more readable [markdown file](../doc/openapi.md).
Additionally Swagger documentation is available at the '/docs' path once the backend is running.

## Files

- [server.js](./server.js) - loads the backend and middleware
- [index.js](./index.js) - creates the backend api
- [env.js](./env.js) - defines commonly used environment variables

## Subdirectories

- [controllers](./controllers/) - contains backend endpoint route controllers
- [db](./db) - contains database related files like connection definitions and model definitions
- [routes](./routes/) - contains route definitions
- [services](./services/) - contains services
- [tests](./__tests__/) - contains backend tests
- [middleware](./middleware/) - contains backend middleware like logger

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
