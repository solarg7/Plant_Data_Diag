const db = require("../models");

// Defining methods for the variablesController
module.exports = {
  getHistorics: function(req, res) {
    db.Historic
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  getAssetHistorics: function(req, res) {
    db.Historic
      .find({ savedAssetId: { $in: [req.body.variableId] } })
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  // findByIdData: function(req, res) {
  //   db.Historic
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findById: function(req, res) {
  //   db.Variable
  //     .findById(req.params.id)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  addHistoric: function(req, res) {
    // const {savedValue} = req.body;

    db.Historic
      .create(req.body)
      .then(dbHistoric => {
        return db.Variable.findOneAndUpdate({_id: req.body.variableId}, {$push:{historical: dbHistoric._id}}, {new:true});
      })
      // .then(dbVariable => res.jason(dbVariable))
      .then(dbHistoric => res.json(dbHistoric))
      .catch(err => res.status(422).json(err));
  }



  // update: function(req, res) {
  //   db.Variable
  //     .findOneAndUpdate({ _id: req.params.id }, req.body)
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // remove: function(req, res) {
  //   db.Variable
  //     .findById({ _id: req.params.id })
  //     .then(dbModel => dbModel.remove())
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // createData: function(req, res) {
  //   db.Historic
  //     .create(req.body)
  //     .then(dbHistoric => db.Variable.findOneAndUpdate({}, { $push:{historical: dbHistoric._id}}, {new: true}))
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },
  // findAllData: function(req, res) {
  //   db.Historic
  //     .find(req.query)
  //     .sort({ date: -1 })
  //     .then(dbModel => res.json(dbModel))
  //     .catch(err => res.status(422).json(err));
  // },

};
