const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variableSchema = new Schema({
  assetName: { type: String, required: true },
  assetLocation: { type: String, required: true },
  assetE_U:{ type: String, required: true },
  upperRange:{ type: Number, required:false},
  lowerRange:{ type: Number, required: false},

  alarmValue1:{ type: Number, required: false},
  alarmType:{ type: String, required: false},

  historical:[
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Note model
      ref: "historic"
    }
  ]
});

const Variable = mongoose.model("Variable", variableSchema);

module.exports = Variable;
