const app = require('./app');
const config = require('dotenv').config();
const mongoose = require('mongoose');
const PORT = process.env.port || 3000;

mongoose
 .connect(`${process.env.DATABASE_LINK}`)
 .then((db) => console.log("db is connected"))
 .catch((err) => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
});
