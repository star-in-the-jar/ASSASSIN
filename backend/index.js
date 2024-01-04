const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Person = require('./model/person.js'); 

const uri = 'mongodb+srv://user:123@tabela.21yzjfu.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const connection = mongoose.connection;
connection.once("open", () => {
  console.log("MongoDB database connection established successfully.");
});

app.use(express.json());

app.get("/person/get", async (req, res) => {
  try {
    const people = await Person.find({});
    console.log("People from db: ", people);
    res.json(people);
  } catch (err) {
    console.error("Error fetching people from the database:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post("/person/add", async (req, res) => {
  try {
    console.log("req.body: ", req.body);

    const newPerson = new Person({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      age: req.body.age,
    });

    await newPerson.save();
    res.status(201).json({ message: 'Person added successfully' });
  } catch (err) {
    console.error("Error adding person to the database:", err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Aplikacja działa na http://localhost:${PORT}`);
});