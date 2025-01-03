
const PartyModel = require("../models/Party");

const checkPartyBudget = (budget, services) => {
    const priceSum = services.reduce((sum, service) => sum + service.price, 0);

    if (priceSum > budget) {
        return false;
    }

    return true;
}

const partyController = {
    create: async (req, res) => {
        try {
            const party = {
                title: req.body.title,
                author: req.body.author,
                description: req.body.description,
                budget: req.body.budget,
                image: req.body.image,
                services: req.body.services,
            }
            if (party.services && !checkPartyBudget(party.budget, party.services)) {
                res.status(406).json({ msg: "Seu orcamento e insuficiente" });
                return
            }
            const response = await PartyModel.create(party)
            res.status(201).json({ response, msg: "Festa criada com sucesso" })
        } catch (error) {
            console.log(`erro encontrado ${error}`);
        }
    },

    getAll: async (req, res) => {
        try {
            const parties = await PartyModel.find();
            res.json(parties);
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = partyController;