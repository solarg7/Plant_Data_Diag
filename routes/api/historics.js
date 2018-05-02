const router = require("express").Router();
const historicsController = require("../../controllers/historicsController");

// // Matches with "/api/variables"
// router.route("/")
//   .get(variablesController.findAll)
//   .post(variablesController.create);

// // Matches with "/api/variables/:id"
// router
//   .route("/:id")
//   .get(variablesController.findById)
//   .put(variablesController.update)
//   .delete(variablesController.remove);

// Matches with "/api/historics"
// router.route("/")
//   .get(historicsController.findAll)
  // .post(variablesController.createData);

router
  .route("/:id")
  // .get(historicsController.findAllData)
  .get(historicsController.getHistorics)
  .get(historicsController.getAssetHistorics) 
  .post(historicsController.addHistoric)
  // .put(variablesController.update)
  // .delete(variablesController.remove);  


module.exports = router;
