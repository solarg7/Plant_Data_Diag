const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const historicSchema = new Schema({
  
  date: { type: Date, default: Date.now },
  savedValue:{ type: Number, required: true},
  savedAssetId:{type: String, required: true }
  // logMark: { type: String, required: true },
  // userPlant: { type: String, required: true }

});




const Historic = mongoose.model("Historic", historicSchema);

module.exports = Historic;
