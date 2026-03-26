const userRepository = require("./user.repository");
const AppError = require("../../utils/apiError");

const createUser = async (data)=>{
    const existingUser = await userRepository.getUsers();
    if (existingUser) {
        throw new AppError("User already exists", 400);
    }
    const user = await userRepository.createUser(data);

    return user;

}


const getUsers = async () => {
    return await userRepository.getUsers();
  };
  
  const getUserById = async (id) => {
  
    const user = await userRepository.getUserById(id);
  
    if (!user) {
      throw new Error("User not found");
    }
  
    return user;
  };
  
  const deleteUser = async (id) => {
    return await userRepository.deleteUser(id);
  };
  
  module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser
  };