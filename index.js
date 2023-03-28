import MongoDB from "./models/mongodb.js";

function initDB() {
  // Initializing mongodb singleton
  console.log("\uf12a Initializing MongoDB singleton...");
  const db = new MongoDB();
  Object.freeze(db);

  // Initializing mongo connection
  db.init();
  db.createModels();
  return db
}

const db = initDB();
import startServer from "./utils/graphql.js";
startServer(db);