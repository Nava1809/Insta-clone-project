const app = require("./app");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();
//connect to DataBase
const server = process.env.MONGO_URI // "mongodb://localhost:5000/post";

mongoose.connect(server, { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
        console.log("connected to DB");
    }
);
// console.log(process.env.PORT);
app.listen(process.env.PORT || 5000, () => console.log("Server running ....."));