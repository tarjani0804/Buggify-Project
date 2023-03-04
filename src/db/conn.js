const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })




const pass = 'mongodb+srv://tusharmotka19cs:' + process.env.password + ' @buggifycluster.gnqrl4p.mongodb.net/userDB'


mongoose.set('strictQuery', true);
mongoose.connect(pass, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`connection established`);
}).catch((err) => {
    console.log(err);
});

