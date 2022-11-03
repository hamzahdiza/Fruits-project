const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true });

// Get the documents collection
const fruitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"],
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
  },
  review: String,
});

const Fruit = mongoose.model("Fruit", fruitSchema);
// Insert some documents
const fruit = new Fruit({
  // name: "Apple",
  rating: 10,
  review: "Niece",
});

// fruit.save();

const personSchema = new mongoose.Schema({
  name: String,
  age: Number,
  favouriteFruit: fruitSchema,
});

const Person = mongoose.model("Person", personSchema);

const pineapple = new Fruit({
  name: "Pineapple",
  rating: 9,
  review: "Great fruit.",
});

// pineapple.save();

// Insert some documents
const person = new Person({
  name: "Max",
  age: 68,
  favouriteFruit: pineapple,
});

// person.save();

const mango = new Fruit({
  name: "Mango",
  rating: 6,
  review: "Decent fruit.",
});

mango.save();

// Update documents with eshtablishing Relationships
Person.updateOne({ name: "John" }, { favouriteFruit: mango }, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Succesfully updated the document");
  }
});

// Insert many fruits
const kiwi = new Fruit({
  name: "Kiwi",
  rating: 10,
  review: "The best fruit.",
});

const orange = new Fruit({
  name: "Orange",
  rating: 4,
  review: "Too sour for me.",
});

const banana = new Fruit({
  name: "Banana",
  rating: 3,
  review: "Wird texture.",
});

// Fruit.insertMany([kiwi, orange, banana], function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully saved all the fruits to fruitsDB");
//   }
// });

// Get the documents collection // Find some documents
Fruit.find(function (err, fruits) {
  if (err) {
    console.log(err);
  } else {
    // mongoose.connection.close();
    // console.log(fruits);

    fruits.forEach(function (fruit) {
      console.log(fruit.name);
    });
  }
});

// Update the documents

// Fruit.updateOne({ _id: "63119bbd637ea8d84d6f2ecd" }, { name: "Peach" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully updated the document.");
//   }
// });

// Delete the documents

// Person.deleteOne({ name: "Max" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });

// Person.deleteMany({ name: "Max" }, function (err) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("Succesfully deleted the document.");
//   }
// });
