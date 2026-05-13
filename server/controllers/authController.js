import User from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
    const { name, email, passowrd } = req.body;

    const hashed = await bcrypt.hash(passowrd, 10);

    const user = await User.create({
        name,
        email,
        password: hashed
    });

    res.json(user);
}

export const login = async (req, res) => {
    const { email, passowrd } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(401).json("Usuário não encontrado");

    const valid = await bcrypt.compare(passowrd, user.password);
    if (!valid) return res.status(401).json("Senha invalida");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)

    res.json({ token });
}