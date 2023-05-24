const docterModel = require('../models/doctor');
const bcrypt = require('bcrypt');

const saltRounds = 4;
const salt = bcrypt.genSaltSync(saltRounds);

class Docter{ 
    singin = async (req, res) => {
        const { password, iin } = req.body;

        if(password.length >= 8){
            const user = await docterModel.findOne({Iin: iin});
            if(user) {
                const PasswordController = bcrypt.compareSync(password, user.password);
                if(PasswordController) {
                    res.status(200).json({ 
                       uid: user._id,
                       lastname: user.lastname,
                       firstname: user.firstname,
                       iin: user.Iin,
                       patronymic: user.patronymic
                    })
                }else {
                    res.status(400).json({ massage: "password or email is wrong"})
                }
            }else {
                res.status(400).json({ massage: "password or email is wrong"})
            }
        }else {
            res.status(400).json({ massage: "password or email is wrong"})
        }

    }
    singup = async (req, res) => {
        const {lastname, firstname, post, patronymic, iin, password} = req.body;
        
        if (lastname != "" && lastname.length > 4){
            if (password.length >= 8) {
                
                const emailController = await userModel.find({Iin: iin})
                console.log(emailController);
                if (emailController.length == 0){
                    const newUser = new userModel({
                        lastname: lastname,
                        firstname: firstname,
                        Iin: iin,
                        post: post,
                        patronymic: patronymic,
                        password: bcrypt.hashSync(password, salt),
                    }).save();
                    res.status(200).json({ massage: 'user created' })
                }else {
                    res.status(400).json({ massage: 'email already exists' })
                }   
            }else {
                res.status(400).json({massage: 'password must be more than 4 characters'})
            }
        }else {
            res.status(400).json({ massage: 'enter full name' })
        }
    }
}

module.exports = new Docter;