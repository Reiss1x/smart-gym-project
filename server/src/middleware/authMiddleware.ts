import { NextFunction, Request, Response } from "express";
import jwt  from "jsonwebtoken";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    
    try {
   
        const cookie = req.headers.cookie;
        if (req.headers.cookie) {
            const token = cookie?.split('; ')
                .find(cookie => cookie.startsWith('access-token='))
                ?.split('=')[1]
            
            
            if (!token) {
                return res.status(400).json({auth: false, message: "User not authenticated"})
            }

            const validToken = jwt.verify(token, process.env.JWT_PASS || '');

            if(!validToken) return res.status(400).json({auth: false, message: "Invalid token"})

            return next()
        }

        return res.status(401).json({auth: false, message: "Invalid token"});
        
    } catch (error) {
        return res.status(401).json({auth: false, message: "User not authenticated"});
    }  
}