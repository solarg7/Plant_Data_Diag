const router = require("express").Router();
// const bookRoutes = require("./books");
const variableRoutes = require("./variables");
const historicsRoutes = require("./historics");

// Book routes
// router.use("/historics", historicRoutes);

router.use("/variables", variableRoutes);
router.use("/historics", historicsRoutes);
module.exports = router;
