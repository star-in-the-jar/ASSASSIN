const app = require("./index");
const logger = require("./middleware/loggerMiddleware");
const PORT = 3000;
app.use(logger);
app.listen(PORT, () => {
    console.log(`App works on http://localhost:${PORT}`);
});