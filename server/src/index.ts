import express from "express";
import { AppDataSource } from "./data-source";
import routes from "./routes";
import cors from 'cors'
import session from 'express-session'
import { User } from "./entities/User";

declare module "express-session" {
  interface SessionData {
    user: User;
  }
}

AppDataSource.initialize().then(() => {
    
    const app = express();
    app.use(cors({
        origin: ['http://localhost:5173'],
        methods: ['GET', 'POST'],
        credentials: true
    }))
    app.use(express.json());
    app.use(
        session({
            secret: process.env.SESSION_SECRET ?? '',
            resave: false,
            saveUninitialized: false,
            cookie: {
                maxAge: 60 * 60 *24,              
            }
        })
    )

    app.use(routes)
    return app.listen(3000, () => {console.log("Express initialized.");});
})
