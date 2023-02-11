import MongoDB from "./models/mongodb.js";

// Initializing mongodb singleton

console.log("\uf12a Initializing MongoDB singleton...");
const db = new MongoDB();
Object.freeze(db);

// Initializing mongo connection
db.init();
db.createModels();
db.createExampleModel();