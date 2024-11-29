const router = require("express").Router();

const taskController = require("../controllers/taskController");

router.route("/task").post((req, res) =>
    taskController.createTask(req, res));

router.route("/task").get((req, res) =>
    taskController.getAll(req, res)
);

router.route("/task/:id").get((req, res) =>
    taskController.getById(req, res)
);


module.exports = router