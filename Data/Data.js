const mongoose = require("mongoose");

const MBSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const MBModel = mongoose.model("Logincredentials", MBSchema);
module.exports = MBModel;
