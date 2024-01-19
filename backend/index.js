const express = require('express');
const cors = require("cors");
const routes = require('./routes');
const db = require("./db/dbConnection");
const logger = require("./middleware/loggerMiddleware");
const YAML = require('yamljs');
const swaggerUi = require('swagger-ui-express');

const openApiDocument = YAML.load('openapi.yaml');

const PORT = 3000;
const app = express();
app.use(express.json());
app.use('/docs', swaggerUi.serve, swaggerUi.setup(openApiDocument));
app.use(cors());
app.use("", routes);
app.use(logger);

app.listen(PORT, () => {
  console.log(`App works on http://localhost:${PORT}`);
});