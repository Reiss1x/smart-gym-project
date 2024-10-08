import 'dotenv/config'
import 'reflect-metadata'
import { DataSource } from "typeorm"

const port = process.env.DB_PORT as unknown as number | undefined

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: port,
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    entities: [`${__dirname}/**/entities/*.{ts,js}`],
    migrations: [`${__dirname}/**/migrations/*.{ts,js}`]
})

AppDataSource.initialize()
    .then(() => {
        console.log("Data Source initialized.")
    })
    .catch((err) => {
        console.error("Data Source initialization error.", err)
    })