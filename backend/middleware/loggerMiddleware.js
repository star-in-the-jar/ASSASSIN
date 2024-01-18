const logger = (req, res, next) => {
    const timestamp = new Date().toLocaleString();
    console.log(`[${timestamp}] - ${req.method} ${req.url} [${res.statusCode}]`);
    next();
};

module.exports = logger;