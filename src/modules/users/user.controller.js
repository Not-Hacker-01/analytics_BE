const userService = require("./user.service");

const createUser = async (req, res, next) => {
  try {

    const user = await userService.createUser(req.body);

    res.status(201).json({
      success: true,
      data: user
    });

  } catch (error) {

    next(error);

  }
};

const getUsers = async (req, res, next) => {
  try {

    const users = await userService.getUsers();

    res.json({
      success: true,
      data: users
    });

  } catch (error) {

    next(error);

  }
};

const getUserById = async (req, res, next) => {
  try {

    const user = await userService.getUserById(req.params.id);

    res.json({
      success: true,
      data: user
    });

  } catch (error) {

    next(error);

  }
};

const deleteUser = async (req, res, next) => {
  try {

    await userService.deleteUser(req.params.id);

    res.json({
      success: true,
      message: "User deleted"
    });

  } catch (error) {

    next(error);

  }
};

module.exports = {
  createUser,
  getUsers,
  getUserById,
  deleteUser
};