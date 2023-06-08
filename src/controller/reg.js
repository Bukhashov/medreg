const reqModel = require('../models/reg');

class Reg{
    getInfo = async (req, res) => {
        const {iin} = req.params;
        const user = await reqModel.findOne({iin: iin});
        if(user) {
            res.status(200).json({ massage: "yes" });
        }else{
            res.status(400).json({ massage: "400" });
        }
    }
    // post
    addUser = async (req, res) => {
        const { iin, uid } = req.body;
        new reqModel({
            iin: iin,
            uid: uid,
            
        }).save();

        res.status(200).json({ massage: "saved" });
    }

}

module.exports = new Reg