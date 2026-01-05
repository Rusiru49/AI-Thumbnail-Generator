import { Request, Response } from 'express';
import User from '../models/User.js';
import bcrypt from 'bcrypt';

// Register User
export const registerUser = async (req: Request, res: Response) => {
  try {
    const { name, email, password } = req.body;
  
    // Check if user already exists
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      password: hashedPassword,
    });

    await newUser.save();

    req.session.isLoggedIn = true;
    req.session.userId = newUser._id.toString();

    return res.json({
        message: 'User registered successfully',
        user: { id: newUser._id,
                name: newUser.name,
                email: newUser.email 
            }
    })

  }catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Login User
export const loginUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }
    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid email or password' });
    }

    req.session.isLoggedIn = true;
    req.session.userId = user._id.toString();

    return res.json({
        message: 'User logged in successfully',
        user: { id: user._id,
                name: user.name,
                email: user.email 
            }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

// Logout User
export const logoutUser = async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: 'Could not log out. Please try again.' });
      }
      return res.json({ message: 'User logged out successfully' });
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}

//Verify User
export const verifyUser = async (req: Request, res: Response) => {
  try {
    const user = await User.findById(req.session.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    return res.json({
        message: 'User verified successfully',
        user: { id: user._id,
                name: user.name,
                email: user.email 
            }
    })
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server Error' });
  }
}