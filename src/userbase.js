// This file is deprecated

const express = require('express');
const businessRouter = require('./routers/businessUser');
const app = express();
require('./db/conn');
const businessUsers = require("./models/userConn");
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(businessRouter);

app.post("/business",async (req, res) => {
    try {
        console.log(`request come`);
        const abc = req.header('Content-type');
        console.log(abc);
        // const user = new businessUsers(abc);
        // const createUser = await user.save();
        res.header("Access-Control-Allow-Origin", "http://localhost:5173");
        console.log(createUser);
        res.status(201).send(createUser);
    } catch(e){ res.status(400).send('data entry fail'); }
})

app.listen(port, '127.0.0.1', () => {
    console.log(`Server running at ${port}`);
});