const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://user:123@tabela.21yzjfu.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection;

db.on("error", (err) => {
    console.error(`MongoDB Error: ${err.message}`);
    process.exit(1);
});

db.once("open", () => {
    console.log("MongoDB connection successful");
});

require("./models");
