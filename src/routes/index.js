const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const jwt = require("jsonwebtoken")
const cookieParser = require('cookie-parser');
const express = require("express")
require('dotenv').config();
const cors = require('cors');
const app = express();
const hasher = require('./generator');
require('../db/conn')
const Buss = require('../models/businessaccs')
const Rsrc = require('../models/researcheraccs')
const BussStats = require('../models/bussstats')



//vars
const KEY = process.env.SECRET_KEY
const port = process.env.PORT

const corsOptions = {
  origin: '*',
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const middleware = (req, res, next) => {
  const token = req.body.myCookie;
  const decode = jwt.verify(token, KEY);
  const auth = decode._id;
  req.auth = auth
  next();
}



// using async
app.post('/business', async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password || !req.body.company_name || !req.body.position || !req.body.country || !req.body.accepted_terms) {
    return res.status(422).json({ error: "Plz fill all the field" })
  }
  try {
    const userExist = await Buss.findOne({ email: req.body.email })
    if (userExist) {
      return res.status(422).json({ error: "email already exist" })
    } else {
      console.log(`Business Endpoint Hit`);
      let number = '';
      for (let i = 0; i < 20; i++) {
        number += Math.floor(Math.random() * 10);
      }
      let bussuser = req.body;
      const hash = req.body.password;
      bussuser['password'] = hash;
      bussuser['isAgree'] = false;
      bussuser['buss_id'] = number;
      const buss_id = number;
      const user = new Buss(bussuser)
      const token = await user.generateAuthToken()
      console.log(token);
      res.status(200).json({ 'status': 'Account Created', 'jwttoken': `${token}`, 'buss_id': `${buss_id}`, 'username': `${req.body.username}` })
    }
  } catch (err) {
    console.log(err)
  }
})

app.post('/researcher', async (req, res) => {
  if (!req.body.username || !req.body.email || !req.body.password || !req.body.country || !req.body.accepted_terms) {
    return res.status(422).json({ error: "Plz fill all the field" })
  }
  try {
    const userExist = await Buss.findOne({ email: req.body.email })
    const userExist2 = await Buss.findOne({ username: req.body.username })
    const userExist3 = await Rsrc.findOne({ email: req.body.email })
    if (userExist || userExist2) {
      return res.status(422).json({ error: "email already exist" })
    } else {
      if (userExist3) {
        return res.status(422).json({ error: "email already exist" })
      } else {
        console.log(`Resercher Endpoint Hit`);
        let number = '';
        for (let i = 0; i < 20; i++) {
          number += Math.floor(Math.random() * 10);
        }
        let bussuser = req.body;
        const hash = req.body.password;
        bussuser['password'] = hash;
        bussuser['isAgree'] = false;
        bussuser['rsrc_id'] = number;
        const rsrc_id = number;
        const user = new Rsrc(bussuser)
        const token = await user.generateAuthToken()
        console.log(token);
        res.status(200).json({ 'status': 'Account Created', 'jwttoken': `${token}`, 'rsrc_id': `${rsrc_id}`, 'username': `${req.body.username}` })
      }
    }
  } catch (err) {
    console.log(err)
  }
})

app.post('/userfetch', async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Plz fill the data" })
    }
    else {
      const user1Login = await Buss.findOne({ username: username })
      const user2Login = await Rsrc.findOne({ username: username })
      if (user1Login !== null) {
        const password = user1Login.password;
        const password2 = hasher(req.body.password);
        console.log(password)
        console.log(password2)
        if (password == password2) {
          const token = user1Login.tokens[0].token;
          const buss_id = user1Login.buss_id;
          const username = user2Login.username;
          console.log(token);
          console.log(username);
          console.log(buss_id);
          res.status(200).json({ 'status': 'Credentials Matched', 'jwttoken': `${token}`, 'buss_id': `${buss_id}`, 'username': `${username}` })
        } else {
          res.status().json({ 'status': 'Wrong Credentials' })
        }
      } else {
        if (user2Login !== null) {
          const password = user2Login.password;
          const password2 = hasher(req.body.password);
          console.log(password)
          console.log(password2)
          if (password == password2) {
            const token = user2Login.tokens[0].token;
            const rsrc_id = user2Login.rsrc_id;
            const username = user2Login.username;
            console.log(token);
            console.log(username);
            console.log(rsrc_id);
            res.status(200).json({ 'status': 'Credentials Matched', 'jwttoken': `${token}`, 'rsrc_id': `${rsrc_id}`, 'username': `${username}` })
          } else {
            res.status().json({ 'status': 'Wrong Credentials' })
          }
        }
      }
    }
  } catch (e) {
    {
      console.log(e);
    }
  }
})


app.post('/agreement', middleware, async (req, res) => {
  const jwt = req.auth;
  const isAgree = req.body.isAgree;
  try {
    const dbresp = await Buss.find({ '_id': `${jwt}` })
    console.log(dbresp);
    const insertdoc = { isAgree: `${isAgree}` }
    console.log(insertdoc);
    const val = await Buss.findByIdAndUpdate(jwt, { isAgree: `${isAgree}` })
    console.log(val.isAgree);
    const data = { buss_id: `${jwt}`, stats: { monthly_report: 0, monthly_paid: 0, avg_paid: 0, mmm_reports: 0, mmm_paid: 0, mmm_avg: 0 }, report_counts: { open: 0, resolved: 0 }, report_cvss: { NA: 0, dups: 0, info: 0, medium: 0, high: 0, critical: 0 } }
    const stats = new BussStats(data);
    const statsres = stats.save()
    console.log(statsres);
    res.status(200).json({ isAgree: true });
  } catch (e) {
    res.status(200).json({ status: 'Something Went Wrong' });
  }
})

app.post('/profileStats', middleware, async (req, res) => {
  const id = res.auth;
  try {
    // define new schema bussstats and export here, add 1 sample business data
    const prof = await BussStats.find(id)
    const parsed = prof[0].stats.monthly_report
    console.log(parsed);
    res.status(200).json({ stats: { monthly_report: `${prof[0].stats.monthly_report}`, monthly_paid: `${prof[0].stats.monthly_paid}`, avg_paid: `${prof[0].stats.avg_paid}`, mmm_reports: `${prof[0].stats.mmm_reports}`, mmm_paid: `${prof[0].stats.mmm_paid}`, mmm_avg: `${prof[0].stats.mmm_avg}` }, report_counts: { open: `${prof[0].report_counts.open}`, resolved: `${prof[0].report_counts.resolved}` }, report_cvss: { NA: `${prof[0].report_cvss.NA}`, dups: `${prof[0].report_cvss.dups}`, info: `${prof[0].report_cvss.info}`, medium: `${prof[0].report_cvss.medium}`, high: `${prof[0].report_cvss.high}`, critical: `${prof[0].report_cvss.critical}` }, buss_id: `${id}` })
  } catch (error) {
    console.log(error)
  }
})

app.get('/insertStats', middleware, async (req, res) => {
  const id = req.auth
  const data = { buss_id: `${id}`, stats: { monthly_report: 0, monthly_paid: 0, avg_paid: 0, mmm_reports: 0, mmm_paid: 0, mmm_avg: 0 }, report_counts: { open: 0, resolved: 0 }, report_cvss: { NA: 0, dups: 0, info: 0, medium: 0, high: 0, critical: 0 } }
  // const jsondata = JSON.stringify(data);
  const user = new BussStats(data);
  const result = await user.save();
  res.status(200).json({
    "buss_id": `${result.buss_id}`,
    "stats": {
      "monthly_report": `${result.monthly_report}`,
      "monthly_paid": `${result.monthly_paid}`,
      "avg_paid": `${result.avg_paid}`,
      "90_reports": `${result.mmm_reports}`,
      "90_paid": `${result.mmm_paid}`,
      "90_avg": `${result.mmm_avg}`
    },
    report_counts: {
      "open": 32,
      "resolved": 1345
    },
    report_cvss: {
      "N/A": 48,
      "dup": 400,
      "info": 200,
      "medium": 177,
      "high": 390,
      "critical": 130
    }
  });
})

app.post('/setScope', middleware, async (req, res) => {
  const id = req.auth
  const in_scope = req.body.in_scope
  const out_scope = req.body.out_scope
  console.log(id);
  console.log(in_scope);
  console.log(out_scope);
})


// app.get('/forgetPass/:username', async (req, res) => {
//   const name = req.params.username;
//   const getUser11 = await Buss.find({ "username": `${name}` });
//   if (getUser11[0] != null) {
//     console.log('printme at 1');
//   }
//   const getUser12 = await Buss.find({ "email": `${name}` });
//   if (getUser12[0] != null) {
//     console.log('printme at 2');
//   }
//   const getUser21 = await Rsrc.find({ "username": `${name}` });
//   if (getUser21[0] != null) {
//     console.log('printme at 3');
//   }
//   const getUser22 = await Rsrc.find({ "email": `${name}` });
//   if (getUser22[0] != null) {
//     console.log('printme at 4');
//   }
// })


// Start the server
app.listen(port, () => {
  console.log(`Server started on port 5173`);
});