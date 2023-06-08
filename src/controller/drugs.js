const drugsModel = require('../models/drugs');

class Drugs {
    getByInn = async (req, res) => {
        const { iin } = req.params;
        const drugs = await drugsModel.find({ iin: iin });
        res.status(200).json(drugs);
    }
    add = async (req, res) => {
        const { iin, title, subject } = req.body;
        new drugsModel({
            inn: iin,
            title: title,
            subject: subject   
        }).save();

        res.status(200).json({ massage: "saved" });
    }
}

module.exports = new Drugs;