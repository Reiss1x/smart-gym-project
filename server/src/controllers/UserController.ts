import {Request, Response} from "express";
import { UserRepository } from "../repositories/UserRepository";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
export class UserController {
    
    async getProfile(req: Request, res: Response) {
        return res.redirect(`/${res.locals.userId}/profile`);
    }

    
    async create(req: Request, res: Response){
        try {
            const passRegex: RegExp = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/
            const emailRegex: RegExp = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/

            const { name, email, password, active} = req.body
            const existingEmail = await UserRepository.findOneBy({email})

            if(!emailRegex.test(email)) return res.status(400).json({message: "Formato de e-mail inválido", code: 'email'})
            if(!passRegex.test(password)) return res.status(400).json({message: "Mínimo 8 caracteres, uma letra e um número", code: 'pass'})

            if(existingEmail) {
                return res.status(400).json({message: "E-mail já está sendo usado", code: 'email'})
            }
           
            const pass = await bcrypt.hash(password, 8)
            const newUser = UserRepository.create({
                name, 
                email, 
                password: pass, 
                active
            })
            await UserRepository.save(newUser)

            const {password: _, ...user} = newUser

            return res.status(201).json(user);
            
        } catch (error) {
            console.log(error);
            
            return res.status(500).json({message: "Error creating user"})
        }
        
    }

    async get(req: Request, res: Response){
        const { email, password } = req.body
        const user = await UserRepository.findOneBy({email})
        try {

            if(!user) {
                return res.status(400).json({message: "E-mail ou senha inválido."})
            }

            const check = await bcrypt.compare(password, user.password);

            if (!check){
                return res.status(400).json({message: "E-mail ou senha inválido."})
            }

            const token = jwt.sign({id: user.id}, process.env.JWT_PASS ?? '', {
                expiresIn: 300
            })

            const {password: _, ...userRes} = user
            
            res.cookie('access-token', token, {
                httpOnly: true,
                secure: true,
                sameSite: 'strict',
                maxAge: 60 * 60 * 24 * 30 * 1000
            });
            
            return res.json({
                user: userRes,
                token: token,
            })
            
        } catch (error) {
            return res.status(500).json({message: "E-mail ou senha inválido."})
        } 
    }
    
    async delete(req: Request, res: Response){
        const { userId } = req.params;
        const User = await UserRepository.findOneBy({id: Number(userId)})
        try {
            if(User) {
                UserRepository.delete({id: Number(userId)})
                return res.status(200).json({message: `User ${userId} deleted.`,User});
            }
            return res.status(500).json({message: `User ${userId} not found.`})
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Error deleting user."})
        }
    }

    async getAll(req: Request, res: Response){
        const deletedUserList = await UserRepository.find()

        try {
            if(deletedUserList) {
                return res.status(200).json(deletedUserList);
            }
            return res.status(500).json({message: `No users found.`})
            
        } catch (error) {
            console.log(error);
            return res.status(500).json({message: "Error fetching users."})
        } 
    }
}