const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const MBModel = require("./Data/Data");
require ('dotenv').config()


const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MongoDb, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

app.post("/", (req, res) => {
  const { email, password } = req.body;
  MBModel.findOne({ email: email }).then((user) => {
    if (user) {
      if (user.password === password) {
        res.json("success");
      } else {
        res.json("incorrect deatils");
      }
    } else {
      res.json("no data found");
    }
  });
});

app.post("/Signup", (req, res) => {
  MBModel.create(req.body)
    .then((MBDetails) => res.status(201).json(MBDetails))
    .catch((err) => res.status(400).json({ error: err.message }));
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running on ${port}`));
