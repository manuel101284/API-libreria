require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const { corsOptions } = require("./config/corsConfig")

mongoose.set("strictQuery", false);
const Routes = require("./routes/BooksRoute");
const app = express();
const PORT = process.env.PORT || 3000

app.use(bodyParser.json());
app.use(express.json());
app.use(cors(corsOptions));

app.use("/api/", Routes);

mongoose
    .connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@prueba01.yoxohxc.mongodb.net/DBPrueba01`)
    .then(() => console.log("Conectado con éxito"))
    .catch((err) => console.error(err));

app.listen(PORT, () => { console.log(`✅ Server listening on port ${PORT}`) });