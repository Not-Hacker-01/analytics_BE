const userModel = require("./user.model");

const createUser = async (data)=>{
    const existingUser = await userModel.findOne({ email: data.email });
    if (existingUser) {
        throw new Error("User already exists");
    }
    const user = await userModel.create(data);
    return user;

}
const getUsers = async () => {
    return await userModel.find();
  };
  
  const getUserById = async (id) => {
    return await userModel.findById(id);
  };
  
  const deleteUser = async (id) => {
    return await userModel.findByIdAndDelete(id);
  };
  
  module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser
  };