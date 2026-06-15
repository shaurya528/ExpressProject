
import userModel from "../model/user_schema.js";

export const userSignup = async (req, res) => {
  try {
    const { username, email, password, role } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "email is required"
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "password is required"
      });
    }

    if (!username) {
      return res.status(400).json({
        message: "username is required"
      });
    }

    const userData = await userModel.create({
      username,
      email,
      password,
      role
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user: {
        id: userData._id,
        username: userData.username,
        email: userData.email,
        role: userData.role,
        
      }
    });

  } catch (err) {
    console.error("Signup Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
