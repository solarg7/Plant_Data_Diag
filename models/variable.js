const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const variableSchema = new Schema({
  assetName: { type: String, required: true },
  assetLocation: { type: String, required: true },
  assetE_U:{ type: String, required: true },
  upperRange:{ type: Number, required:false},
  lowerRange:{ type: Number, required: true},
  // alarm_1:[
  //   {alarmValue1:{ type: Number, required: true}},
  //   {alarmType:{ type: String, required: true}}
  // ]

  // minValue:{ type: Number, required: true},
  // alarmValue1:{ type: Number, required: true},  
  // historical:[
  //   {date: { type: Date, default: Date.now }},
  //   {value:{ type: Number, required: true}},
  //   {logMark: { type: String, required: true }}
  // ]
});

const Variable = mongoose.model("Variable", variableSchema);

module.exports = Variable;
