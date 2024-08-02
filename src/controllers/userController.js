const User = require('../models/userModel');
const UserType = require('../models/userTypeModel');

const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, userTypeId } = req.body;

    if (!firstName || !lastName || !email || !userTypeId) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
    }

    const userType = await UserType.findByPk(userTypeId);
    if (!userType) {
      return res.status(400).json({ error: 'Tipo de usuário inválido.' });
    }

    const newUser = await User.create({
      firstName,
      lastName,
      email,
      userTypeId
    });

    return res.status(201).json(newUser);
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
