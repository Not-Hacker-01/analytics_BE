const userService = require("./user.service");

const createUser = async (req, res) => {
  try {

    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getUsers = async (req, res) => {
  try {

    const users = await userService.getUsers();

    res.json({
      success: true,
      data: users
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

const getUserById = async (req, res) => {
  try {

    const user = await userService.getUserById(req.params.id);

    res.json({
      success: true,
      data: user
    });

  } catch (error) {

    res.status(404).json({
      success: false,
      message: error.message
    });

  }
};

const deleteUser = async (req, res) => {
  try {

    await userService.deleteUser(req.params.id);

    res.json({
      success: true,
      message: "User deleted"
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message
    });

  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser
};