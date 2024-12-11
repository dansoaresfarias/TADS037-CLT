import { AppDataSource } from "./db/data-source";

console.log("Olá eu sou a LocaDorama da TADS037.");

AppDataSource.initialize()
    .then(() => {
        // here you can start to work with your database
        console.log(`Database is running.`);
    })
    .catch((error) => console.log(error))

