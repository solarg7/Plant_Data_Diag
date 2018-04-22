const router = require("express").Router();
const variablesController = require("../../controllers/variablesController");

// Matches with "/api/variables"
router.route("/")
  .get(variablesController.findAll)
  .post(variablesController.create);

// Matches with "/api/variables/:id"
router
  .route("/:id")
  .get(variablesController.findById)
  .put(variablesController.update)
  .delete(variablesController.remove);

module.exports = router;
