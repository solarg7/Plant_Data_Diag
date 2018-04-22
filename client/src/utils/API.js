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
  }
};
