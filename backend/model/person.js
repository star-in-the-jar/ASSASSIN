const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const personSchema= new Schema({
   firstName: {
        type: String,
        required: true
   },
   lastName:{
        type: String,
        required: true
   },
   age:{
     type: Number,
     required: true,
     min: 0
   }

});

const Person = mongoose.model("person", personSchema);

module.exports = Person;