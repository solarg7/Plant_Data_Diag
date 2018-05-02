import axios from "axios";

export default {
  // Gets all variables
  getVariables: function() {
    return axios.get("/api/variables");
  },
  // Gets the book with the given id
  getVariable: function(id) {
    return axios.get("/api/variables/" + id);
  },
  // Deletes the book with the given id
  deleteVariable: function(id) {
    return axios.delete("/api/variables/" + id);
  },
  // Saves a book to the database
  saveVariable: function(variableData) {
    return axios.post("/api/variables", variableData);
  },
  // Saves a value to the database 
  // saveValue: function(valueData) {
  //   return axios.post("/api/historics", valueData);
  // },
    // Gets all variables
  getVariablesD: function() {
    return axios.get("/api/historics");
  },
  getVariableD: (id) => {
    return axios.get("/api/historics/" + id);
  },
  addHistoric: function(variableData) {
    return axios.post("/api/historics/:id", variableData);
  },
  // Gets all variables
  getHistorics: function() {
    return axios.get("/api/historics/:id");
  },
  getAssetHistorics: function(variableId) {
    return axios.get("/api/historics/:id", variableId);
  }
  // getVariables: function() {
  //   return axios.get("/api/variables");
  // }
  
};
