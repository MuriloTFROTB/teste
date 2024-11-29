const Task = require("../models/Task");

const taskController = {
    createTask: async (req, res) => {
        try {
            const { title, text } = req.body;
            const newTask = await Task.create({
                title, text
            })
            res.status(201).json({ newTask, msg: "Criado com sucesso" });
        } catch (error) {
            res.status(500).json({ error: "Erro ao criar" });
        }
    },
    getAll: async (req, res) => {
        try {
            const tasks = await Task.find();
            res.status(200).json(tasks);

        } catch (error) {
            res.status(500).json({ error: "Erro ao criar" });
        }
    },
    getById: async (req, res) => {
        try {
            const { id } = req.params;
            const task = await Task.findById(id);

            if (!task) {
                return res.status(404).json({ error: "Nao econtrada" });
            }
            res.status(200).json(task)
        } catch (error) {

        }
    }
};

module.exports = taskController;