
import userModel from "../model/user_schema.js";
import bcrypt from "bcrypt";
import { jwtTokenGenerator } from "../services/token_generator.js";

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Email is required"
      });
    }

    if (!password) {
      return res.status(400).json({
        message: "Password is required"
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const isPasswordMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordMatch) {
      return res.status(401).json({
        message: "Invalid credentials"
      });
    }

    const token = jwtTokenGenerator(user);

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    console.error("Login Error:", err);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error"
    });
  }
};
