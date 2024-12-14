import "reflect-metadata"
import { DataSource } from "typeorm"
import { config, dialect } from "../config/bd.config"
import { Genero } from "../models/Genero"

export const AppDataSource = new DataSource({
    type: dialect,
    host: config.HOST,
    port: config.PORT,
    username: config.USER,
    password: config.PASSWORD,
    database: config.DB,
    entities: [Genero],
    synchronize: false,
    logging: false,
})
