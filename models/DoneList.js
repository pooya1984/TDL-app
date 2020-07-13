const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const DoneListSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  title: {
    type: String,
    required: false,
  },
  doneTxt: {
    type: String,
  },
  name: {
    type: String,
  },
  //Audio Part
  blobURL: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = DoneList = mongoose.model("doneList", DoneListSchema);
