const User = require('../models/userModel');
const UserType = require('../models/userTypeModel');
const bcrypt = require('bcrypt');


const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, userTypeId, password:plainPassword } = req.body;

    if (!firstName || !lastName || !email || !userTypeId || !plainPassword)   {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const userType = await UserType.findByPk(userTypeId);
    if (!userType) {
      return res.status(400).json({ error: 'Tipo de usuário inválido.' });
    }

    try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
      password = hashedPassword;
    } catch (error) {
      console.error("Erro ao criptografar:", error);
      return res.status(500).json({ error: 'Erro ao criptografar a senha.' });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      userTypeId,
      password
    });

    return res.status(201).json({'Usuário criado!':newUser});
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Erro ao criar usuário.' });
  }
};

const readUsers = async (req,res) => {
  
  try{
    listUsers = await User.findAll();
    return res.status(200).json(listUsers)
  }catch(error){
    console.error(error);
    return res.status(403).json({ error: 'Erro ao listar usuários.' });
  }
  
}

module.exports = {
  createUser,
  readUsers
};
