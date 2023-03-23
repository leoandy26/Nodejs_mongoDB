const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 3000;
const Thread = require("./models/thread");

app.use(express.json());
app.use(express.static("public"));

mongoose
  .connect(
    "mongodb+srv://leoandy26:goldpony69@myfirstdatabase.7wbrkfo.mongodb.net/myfirstdatabase?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected to MongoDB."))
  .catch((err) => console.log(err));

app.get("/api/v1/thread", async (req, res) => {
  try {
    const allThreads = await Thread.find({});
    res.status(200).json(allThreads);
  } catch (err) {
    console.log(err);
  }
});

app.post("/api/v1/thread", async (req, res) => {
  try {
    const createThread = await Thread.create(req.body);
    res.status(200).json(createThread);
  } catch (err) {
    console.log(err);
  }
});
app.listen(PORT, console.log(`Server is running on port ${PORT}.`));
