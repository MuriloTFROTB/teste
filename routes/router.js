const router = require("express").Router();

const serviceRouter = require("./service");

router.use("/", serviceRouter);


const partieRouter = require("./parties");

router.use("/", partieRouter);

const taskRouter = require("./task");

router.use("/", taskRouter)


module.exports = router;