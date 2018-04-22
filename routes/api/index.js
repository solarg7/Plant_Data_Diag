const router = require("express").Router();
// const bookRoutes = require("./books");
const variableRoutes = require("./variables");

// Book routes
// router.use("/books", bookRoutes);
router.use("/variables", variableRoutes);
module.exports = router;
