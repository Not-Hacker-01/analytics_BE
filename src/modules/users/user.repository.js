const userModel = require("./user.model");

const createUser = async (data)=>{
    const existingUser = await userModel.findOne({ email: data.email });
    if (existingUser) {
        throw new AppError("User already exists", 400);
    }
    const user = await userModel.create(data);
    return user;

}
const getUsers = async () => {
    return await userModel.find();
  };
  
  const getUserById = async (id) => {
    const user = await userModel.findById(id);
    if (!user) {
        throw new AppError("User not found", 404);
    }
    return user;
  };
  
  const deleteUser = async (id) => {
    const user = await userModel.findByIdAndDelete(id);
    if (!user) {
        throw new AppError("User not found", 404);
    }
    return user;
  };
  
  module.exports = {
    createUser,
    getUsers,
    getUserById,
    deleteUser
  };