/**
 * This is the main file of the backend application.
 * It sets up the Express server, loads the OpenAPI document,
 * and defines the routes for the application.
 * @module index
 */

const express = require('express');
const cors = require("cors");
const routes = require('./routes');
const db = require("./db/dbConnection");
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

/**
 * The OpenAPI document loaded from the 'openapi.yaml' file.
 * @type {object}
 */
const openApiDocument = YAML.load('openapi.yaml');

const app = express();
app.use(express.json());

/**
 * Serves the Swagger UI for the OpenAPI documentation at the '/docs' endpoint.
 */
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));

app.use(cors());
app.use("", routes);

module.exports = app;