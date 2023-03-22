const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
require("dotenv").config();
const jwt = require("jsonwebtoken");
const moment = require("moment");
const cookieParser = require("cookie-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const hasher = require("./generator");
require("../db/conn");
const Buss = require("../models/businessaccs");
const Rsrc = require("../models/researcheraccs");
const BussStats = require("../models/bussstats");
const ScopeDB = require("../models/ScopeDB");
const RewardDB = require("../models/RewardDB");
const ProgramDB = require("../models/ProgramDB");
const ExamDB = require("../models/examDB");
const CertDB = require("../models/certDB");
const BookmarkDB = require("../models/bookmarkedDB");
const ReportDB = require("../models/ReportDB");
const BountyDB = require("../models/paymentDB");
const LeaderboardDB = require("../models/leaderboardDB");
const sendotp = require("./mailer");
const { array } = require("i/lib/util");

//vars
const KEY = process.env.SECRET_KEY;
const port = process.env.PORT;

const corsOptions = {
  origin: "*",
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const middleware = async (req, res, next) => {
  const token = req.body.myCookie;
  try {
    const decode = jwt.verify(token, KEY);
    const auth = decode._id;
    req.id = auth;
    const findby1 = Buss.findById(auth);
    const ds1 = await findby1;
    if (ds1 != null) {
      const bus_id = ds1.buss_id;
      req.buss_id = bus_id;
      next();
    }
    const findby2 = Rsrc.findById(auth);
    const ds2 = await findby2;
    if (ds2 != null) {
      const rsc_id = ds2.rsrc_id;
      req.rsrc_id = rsc_id;
      next();
    }
  } catch (e) {
    res.status(400).json({ status: `Authentication Denied` });
  }
};

// using async
app.post("/business", async (req, res) => {
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password ||
    !req.body.company_name ||
    !req.body.position ||
    !req.body.country ||
    !req.body.accepted_terms
  ) {
    return res.status(422).json({ error: "Plz fill all the field" });
  }
  try {
    const userExist = await Buss.findOne({ email: req.body.email });
    if (userExist) {
      return res.status(422).json({ error: "email already exist" });
    } else {
      console.log(`Business Endpoint Hit`);
      let number = "";
      for (let i = 0; i < 20; i++) {
        number += Math.floor(Math.random() * 10);
      }
      let bussuser = req.body;
      const hash = req.body.password;
      bussuser["password"] = hash;
      bussuser["typeofProgram"] = "none";
      bussuser["buss_id"] = number;
      const buss_id = number;
      const user = new Buss(bussuser);
      const token = await user.generateAuthToken();
      console.log(token);
      res.status(200).json({
        status: "Account Created",
        jwttoken: `${token}`,
        buss_id: `${buss_id}`,
        username: `${req.body.username}`,
      });
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/researcher", async (req, res) => {
  if (
    !req.body.username ||
    !req.body.email ||
    !req.body.password ||
    !req.body.country ||
    !req.body.accepted_terms
  ) {
    return res.status(422).json({ error: "Plz fill all the field" });
  }
  try {
    const userExist = await Buss.findOne({ email: req.body.email });
    const userExist2 = await Buss.findOne({ username: req.body.username });
    const userExist3 = await Rsrc.findOne({ email: req.body.email });
    if (userExist || userExist2) {
      return res.status(422).json({ error: "email already exist" });
    } else {
      if (userExist3) {
        return res.status(422).json({ error: "email already exist" });
      } else {
        console.log(`Resercher Endpoint Hit`);
        let number = "";
        for (let i = 0; i < 20; i++) {
          number += Math.floor(Math.random() * 10);
        }
        let bussuser = req.body;
        const hash = req.body.password;
        bussuser["password"] = hash;
        bussuser["isAgree"] = true;
        bussuser["rsrc_id"] = number;
        const rsrc_id = number;
        const user = new Rsrc(bussuser);
        const token = await user.generateAuthToken();
        console.log(token);
        res.status(200).json({
          status: "Account Created",
          jwttoken: `${token}`,
          rsrc_id: `${rsrc_id}`,
          username: `${req.body.username}`,
        });
        const findbook = await BookmarkDB.find({ rsrc_id });
        if (findbook == "") {
          const newbook = new BookmarkDB({
            buss_id: [],
            rsrc_id: `${number}`,
          });
          const out = await newbook.save();
          console.log(out);
        }
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/userfetch", async (req, res) => {
  try {
    console.log("hit");
    const { username, password } = req.body;
    if (!username || !password) {
      return res.status(400).json({ error: "Plz fill the data" });
    } else {
      const user1Login = await Buss.findOne({ username: username });
      const user2Login = await Rsrc.findOne({ username: username });
      if (user1Login !== null) {
        const password = user1Login.password;
        const password2 = hasher(req.body.password);
        console.log(password);
        console.log(password2);
        if (password == password2) {
          const token = user1Login.tokens[0].token;
          const buss_id = user1Login.buss_id;
          const username = user1Login.username;
          console.log(token);
          console.log(username);
          console.log(buss_id);
          res.status(200).json({
            status: "Business",
            jwttoken: `${token}`,
            buss_id: `${buss_id}`,
            username: `${username}`,
          });
        } else {
          res.status(400).json({ status: "Wrong Credentials" });
        }
      } else {
        if (user2Login !== null) {
          const password = user2Login.password;
          const password2 = hasher(req.body.password);
          console.log(password);
          console.log(password2);
          if (password == password2) {
            const token = user2Login.tokens[0].token;
            const rsrc_id = user2Login.rsrc_id;
            const username = user2Login.username;
            console.log(token);
            console.log(username);
            console.log(rsrc_id);
            res.status(200).json({
              status: "Researcher",
              jwttoken: `${token}`,
              rsrc_id: `${rsrc_id}`,
              username: `${username}`,
            });
          } else {
            res.status().json({ status: "Wrong Credentials" });
          }
        }
      }
    }
  } catch (e) {
    {
      console.log(e);
    }
  }
});

app.post("/agreementBug", middleware, async (req, res) => {
  const id = req.id;
  console.log("endpoint hit");
  try {
    const val = await Buss.findByIdAndUpdate(id, {
      typeofProgram: `BugBounty`,
    });
    console.log(val.typeofProgram);
    console.log(val.buss_id);
    console.log(val.company_name);
    const data = {
      buss_id: `${val.buss_id}`,
      stats: {
        monthly_report: 0,
        monthly_paid: 0,
        avg_paid: 0,
        mmm_reports: 0,
        mmm_paid: 0,
        mmm_avg: 0,
      },
      report_counts: { open: 0, resolved: 0 },
      report_cvss: { NA: 0, dups: 0, info: 0, medium: 0, high: 0, critical: 0 },
    };
    const stats = new BussStats(data);
    const statsres = stats.save();
    console.log("Stats");
    const data2 = {
      buss_id: `${val.buss_id}`,
      in_scope: {
        one: { asset: "", asset_type: "", impact: "", elb: "" },
        two: { asset: "", asset_type: "", impact: "", elb: "" },
        three: { asset: "", asset_type: "", impact: "", elb: "" },
        four: { asset: "", asset_type: "", impact: "", elb: "" },
        five: { asset: "", asset_type: "", impact: "", elb: "" },
        six: { asset: "", asset_type: "", impact: "", elb: "" },
        seven: { asset: "", asset_type: "", impact: "", elb: "" },
        eight: { asset: "", asset_type: "", impact: "", elb: "" },
        nine: { asset: "", asset_type: "", impact: "", elb: "" },
        ten: { asset: "", asset_type: "", impact: "", elb: "" },
      },
      out_scope: {
        one: { asset: "", asset_type: "" },
        two: { asset: "", asset_type: "" },
        three: { asset: "", asset_type: "" },
        four: { asset: "", asset_type: "" },
        five: { asset: "", asset_type: "" },
        six: { asset: "", asset_type: "" },
        seven: { asset: "", asset_type: "" },
        eight: { asset: "", asset_type: "" },
        nine: { asset: "", asset_type: "" },
        ten: { asset: "", asset_type: "" },
      },
    };
    const stats2 = new ScopeDB(data2);
    const statsres2 = stats2.save();
    console.log("Scope");
    const data3 = {
      buss_id: `${val.buss_id}`,
      low: "0",
      medium: "0",
      high: "0",
      critical: "0",
    };
    const stats3 = new RewardDB(data3);
    const statsres3 = stats3.save();
    console.log("Reward");
    const currentDate = moment().format("YYYY-MM-DD");
    const data4 = {
      buss_id: `${val.buss_id}`,
      company_name: `${val.company_name}`,
      Resolved: "0",
      Avg_Bounty: "0",
      Launch_Date: `${currentDate}`,
    };
    const stats4 = new ProgramDB(data4);
    const statsres4 = stats4.save();
    console.log("Program");
    res.status(200).json({ status: "BugBounty" });
  } catch (e) {
    res.status(400).json({ status: "Something Went Wrong" });
  }
});

app.post("/agreementRed", middleware, async (req, res) => {
  const id = req.id;
  console.log("endpoint hit");
  try {
    const val = await Buss.findByIdAndUpdate(id, {
      typeofProgram: `RedTeam`,
    });
    console.log(val.typeofProgram);
    console.log(val.buss_id);
    console.log(val.company_name);
    const data = {
      buss_id: `${val.buss_id}`,
      stats: {
        monthly_report: 0,
        monthly_paid: 0,
        avg_paid: 0,
        mmm_reports: 0,
        mmm_paid: 0,
        mmm_avg: 0,
      },
      report_counts: { open: 0, resolved: 0 },
      report_cvss: { NA: 0, dups: 0, info: 0, medium: 0, high: 0, critical: 0 },
    };
    const stats = new BussStats(data);
    const statsres = stats.save();
    console.log("Stats");
    const data2 = {
      buss_id: `${val.buss_id}`,
      in_scope: {
        one: { asset: "", asset_type: "", impact: "", elb: "" },
        two: { asset: "", asset_type: "", impact: "", elb: "" },
        three: { asset: "", asset_type: "", impact: "", elb: "" },
        four: { asset: "", asset_type: "", impact: "", elb: "" },
        five: { asset: "", asset_type: "", impact: "", elb: "" },
        six: { asset: "", asset_type: "", impact: "", elb: "" },
        seven: { asset: "", asset_type: "", impact: "", elb: "" },
        eight: { asset: "", asset_type: "", impact: "", elb: "" },
        nine: { asset: "", asset_type: "", impact: "", elb: "" },
        ten: { asset: "", asset_type: "", impact: "", elb: "" },
      },
      out_scope: {
        one: { asset: "", asset_type: "" },
        two: { asset: "", asset_type: "" },
        three: { asset: "", asset_type: "" },
        four: { asset: "", asset_type: "" },
        five: { asset: "", asset_type: "" },
        six: { asset: "", asset_type: "" },
        seven: { asset: "", asset_type: "" },
        eight: { asset: "", asset_type: "" },
        nine: { asset: "", asset_type: "" },
        ten: { asset: "", asset_type: "" },
      },
    };
    const stats2 = new ScopeDB(data2);
    const statsres2 = stats2.save();
    console.log("Scope");
    res.status(200).json({ status: "RedTeam" });
  } catch (e) {
    res.status(400).json({ status: "Something Went Wrong" });
  }
});

app.post("/profileStats", middleware, async (req, res) => {
  const id = req.buss_id;
  try {
    // define new schema bussstats and export here, add 1 sample business data
    const prof = await BussStats.find({ buss_id: `${id}` });
    console.log(prof);
    const parsed = prof[0].stats.monthly_report;
    console.log(parsed);
    res.status(200).json({
      stats: {
        monthly_report: `${prof[0].stats.monthly_report}`,
        monthly_paid: `${prof[0].stats.monthly_paid}`,
        avg_paid: `${prof[0].stats.avg_paid}`,
        mmm_reports: `${prof[0].stats.mmm_reports}`,
        mmm_paid: `${prof[0].stats.mmm_paid}`,
        mmm_avg: `${prof[0].stats.mmm_avg}`,
      },
      report_counts: {
        open: `${prof[0].report_counts.open}`,
        resolved: `${prof[0].report_counts.resolved}`,
      },
      report_cvss: {
        NA: `${prof[0].report_cvss.NA}`,
        dups: `${prof[0].report_cvss.dups}`,
        info: `${prof[0].report_cvss.info}`,
        medium: `${prof[0].report_cvss.medium}`,
        high: `${prof[0].report_cvss.high}`,
        critical: `${prof[0].report_cvss.critical}`,
      },
      buss_id: `${id}`,
    });
  } catch (error) {
    console.log(error);
  }
});

// app.post("/insertStats", middleware, async (req, res) => {
//   const id = req.buss_id;
//   try{
//   const data = {
//     buss_id: `${id}`,
//     stats: {
//       monthly_report: 1,
//       monthly_paid: 0,
//       avg_paid: 0,
//       mmm_reports: 0,
//       mmm_paid: 0,
//       mmm_avg: 0,
//     },
//     report_counts: { open: 0, resolved: 0 },
//     report_cvss: { NA: 0, dups: 0, info: 0, medium: 0, high: 0, critical: 0 },
//   };
//   const user = new BussStats(data);
//   const result = await user.save();
//   res.status(200).json({
//     buss_id: `${result.buss_id}`,
//     stats: {
//       monthly_report: `${result.monthly_report}`,
//       monthly_paid: `${result.monthly_paid}`,
//       avg_paid: `${result.avg_paid}`,
//       "90_reports": `${result.mmm_reports}`,
//       "90_paid": `${result.mmm_paid}`,
//       "90_avg": `${result.mmm_avg}`,
//     },
//     report_counts: {
//       open: 32,
//       resolved: 1345,
//     },
//     report_cvss: {
//       "N/A": 48,
//       dup: 400,
//       info: 200,
//       medium: 177,
//       high: 390,
//       critical: 130,
//     },
//   });
// }catch(e){
//   res.status(400).json({status: `Somthing Went Wrong`})
// }
// });

app.patch("/setScope", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  console.log(buss_id);
  try {
    const in_scope_asset = req.body.in_scope.asset;
    const in_scope_asset_type = req.body.in_scope.asset_type;
    const in_scope_impact = req.body.in_scope.impact;
    const in_scope_elb = req.body.in_scope.elb;
    const out_scope_asset = req.body.out_scope.asset;
    const out_scope_asset_type = req.body.out_scope.asset_type;
    const findby1 = ScopeDB.find({ buss_id: `${buss_id}` });
    const ds1 = await findby1;
    const new_id = ds1[0].id;
    if (in_scope_asset) {
      if (ds1[0].in_scope.one.asset) {
        if (ds1[0].in_scope.two.asset) {
          if (ds1[0].in_scope.three.asset) {
            if (ds1[0].in_scope.four.asset) {
              if (ds1[0].in_scope.five.asset) {
                if (ds1[0].in_scope.six.asset) {
                  if (ds1[0].in_scope.seven.asset) {
                    if (ds1[0].in_scope.eight.asset) {
                      if (ds1[0].in_scope.nine.asset) {
                        if (ds1[0].in_scope.ten.asset) {
                          console.log("In-Scope Limit Exceeds");
                        } else {
                          const filter = { _id: `${new_id}` };
                          let update = {
                            $set: { "in_scope.ten.asset": `${in_scope_asset}` },
                          };
                          let result = await ScopeDB.updateOne(filter, update);
                          update = {
                            $set: {
                              "in_scope.ten.asset_type": `${in_scope_asset_type}`,
                            },
                          };
                          result = await ScopeDB.updateOne(filter, update);
                          update = {
                            $set: {
                              "in_scope.ten.impact": `${in_scope_impact}`,
                            },
                          };
                          result = await ScopeDB.updateOne(filter, update);
                          update = {
                            $set: { "in_scope.ten.elb": `${in_scope_elb}` },
                          };
                          result = await ScopeDB.updateOne(filter, update);
                        }
                      } else {
                        const filter = { _id: `${new_id}` };
                        let update = {
                          $set: { "in_scope.nine.asset": `${in_scope_asset}` },
                        };
                        let result = await ScopeDB.updateOne(filter, update);
                        update = {
                          $set: {
                            "in_scope.nine.asset_type": `${in_scope_asset_type}`,
                          },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                        update = {
                          $set: {
                            "in_scope.nine.impact": `${in_scope_impact}`,
                          },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                        update = {
                          $set: { "in_scope.nine.elb": `${in_scope_elb}` },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                      }
                    } else {
                      const filter = { _id: `${new_id}` };
                      let update = {
                        $set: { "in_scope.eight.asset": `${in_scope_asset}` },
                      };
                      let result = await ScopeDB.updateOne(filter, update);
                      update = {
                        $set: {
                          "in_scope.eight.asset_type": `${in_scope_asset_type}`,
                        },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                      update = {
                        $set: { "in_scope.eight.impact": `${in_scope_impact}` },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                      update = {
                        $set: { "in_scope.eight.elb": `${in_scope_elb}` },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                    }
                  } else {
                    const filter = { _id: `${new_id}` };
                    let update = {
                      $set: { "in_scope.seven.asset": `${in_scope_asset}` },
                    };
                    let result = await ScopeDB.updateOne(filter, update);
                    update = {
                      $set: {
                        "in_scope.seven.asset_type": `${in_scope_asset_type}`,
                      },
                    };
                    result = await ScopeDB.updateOne(filter, update);
                    update = {
                      $set: { "in_scope.seven.impact": `${in_scope_impact}` },
                    };
                    result = await ScopeDB.updateOne(filter, update);
                    update = {
                      $set: { "in_scope.seven.elb": `${in_scope_elb}` },
                    };
                    result = await ScopeDB.updateOne(filter, update);
                  }
                } else {
                  const filter = { _id: `${new_id}` };
                  let update = {
                    $set: { "in_scope.six.asset": `${in_scope_asset}` },
                  };
                  let result = await ScopeDB.updateOne(filter, update);
                  update = {
                    $set: {
                      "in_scope.six.asset_type": `${in_scope_asset_type}`,
                    },
                  };
                  result = await ScopeDB.updateOne(filter, update);
                  update = {
                    $set: { "in_scope.six.impact": `${in_scope_impact}` },
                  };
                  result = await ScopeDB.updateOne(filter, update);
                  update = { $set: { "in_scope.six.elb": `${in_scope_elb}` } };
                  result = await ScopeDB.updateOne(filter, update);
                }
              } else {
                const filter = { _id: `${new_id}` };
                let update = {
                  $set: { "in_scope.five.asset": `${in_scope_asset}` },
                };
                let result = await ScopeDB.updateOne(filter, update);
                update = {
                  $set: {
                    "in_scope.five.asset_type": `${in_scope_asset_type}`,
                  },
                };
                result = await ScopeDB.updateOne(filter, update);
                update = {
                  $set: { "in_scope.five.impact": `${in_scope_impact}` },
                };
                result = await ScopeDB.updateOne(filter, update);
                update = { $set: { "in_scope.five.elb": `${in_scope_elb}` } };
                result = await ScopeDB.updateOne(filter, update);
              }
            } else {
              const filter = { _id: `${new_id}` };
              let update = {
                $set: { "in_scope.four.asset": `${in_scope_asset}` },
              };
              let result = await ScopeDB.updateOne(filter, update);
              update = {
                $set: { "in_scope.four.asset_type": `${in_scope_asset_type}` },
              };
              result = await ScopeDB.updateOne(filter, update);
              update = {
                $set: { "in_scope.four.impact": `${in_scope_impact}` },
              };
              result = await ScopeDB.updateOne(filter, update);
              update = { $set: { "in_scope.four.elb": `${in_scope_elb}` } };
              result = await ScopeDB.updateOne(filter, update);
            }
          } else {
            const filter = { _id: `${new_id}` };
            let update = {
              $set: { "in_scope.three.asset": `${in_scope_asset}` },
            };
            let result = await ScopeDB.updateOne(filter, update);
            update = {
              $set: { "in_scope.three.asset_type": `${in_scope_asset_type}` },
            };
            result = await ScopeDB.updateOne(filter, update);
            update = {
              $set: { "in_scope.three.impact": `${in_scope_impact}` },
            };
            result = await ScopeDB.updateOne(filter, update);
            update = { $set: { "in_scope.three.elb": `${in_scope_elb}` } };
            result = await ScopeDB.updateOne(filter, update);
          }
        } else {
          const filter = { _id: `${new_id}` };
          let update = { $set: { "in_scope.two.asset": `${in_scope_asset}` } };
          let result = await ScopeDB.updateOne(filter, update);
          update = {
            $set: { "in_scope.two.asset_type": `${in_scope_asset_type}` },
          };
          result = await ScopeDB.updateOne(filter, update);
          update = { $set: { "in_scope.two.impact": `${in_scope_impact}` } };
          result = await ScopeDB.updateOne(filter, update);
          update = { $set: { "in_scope.two.elb": `${in_scope_elb}` } };
          result = await ScopeDB.updateOne(filter, update);
        }
      } else {
        const filter = { _id: `${new_id}` };
        let update = { $set: { "in_scope.one.asset": `${in_scope_asset}` } };
        let result = await ScopeDB.updateOne(filter, update);
        update = {
          $set: { "in_scope.one.asset_type": `${in_scope_asset_type}` },
        };
        result = await ScopeDB.updateOne(filter, update);
        update = { $set: { "in_scope.one.impact": `${in_scope_impact}` } };
        result = await ScopeDB.updateOne(filter, update);
        update = { $set: { "in_scope.one.elb": `${in_scope_elb}` } };
        result = await ScopeDB.updateOne(filter, update);
      }
    }
    if (out_scope_asset) {
      if (ds1[0].out_scope.one.asset) {
        if (ds1[0].out_scope.two.asset) {
          if (ds1[0].out_scope.three.asset) {
            if (ds1[0].out_scope.four.asset) {
              if (ds1[0].out_scope.five.asset) {
                if (ds1[0].out_scope.six.asset) {
                  if (ds1[0].out_scope.seven.asset) {
                    if (ds1[0].out_scope.eight.asset) {
                      if (ds1[0].out_scope.nine.asset) {
                        if (ds1[0].out_scope.ten.asset) {
                        } else {
                          const filter = { _id: `${new_id}` };
                          let update = {
                            $set: {
                              "out_scope.ten.asset": `${out_scope_asset}`,
                            },
                          };
                          let result = await ScopeDB.updateOne(filter, update);
                          update = {
                            $set: {
                              "out_scope.ten.asset_type": `${out_scope_asset_type}`,
                            },
                          };
                          result = await ScopeDB.updateOne(filter, update);
                        }
                      } else {
                        const filter = { _id: `${new_id}` };
                        let update = {
                          $set: {
                            "out_scope.nine.asset": `${out_scope_asset}`,
                          },
                        };
                        let result = await ScopeDB.updateOne(filter, update);
                        update = {
                          $set: {
                            "out_scope.nine.asset_type": `${out_scope_asset_type}`,
                          },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                      }
                    } else {
                      const filter = { _id: `${new_id}` };
                      let update = {
                        $set: { "out_scope.eight.asset": `${out_scope_asset}` },
                      };
                      let result = await ScopeDB.updateOne(filter, update);
                      update = {
                        $set: {
                          "out_scope.eight.asset_type": `${out_scope_asset_type}`,
                        },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                    }
                  } else {
                    const filter = { _id: `${new_id}` };
                    let update = {
                      $set: { "out_scope.seven.asset": `${out_scope_asset}` },
                    };
                    let result = await ScopeDB.updateOne(filter, update);
                    update = {
                      $set: {
                        "out_scope.seven.asset_type": `${out_scope_asset_type}`,
                      },
                    };
                    result = await ScopeDB.updateOne(filter, update);
                  }
                } else {
                  const filter = { _id: `${new_id}` };
                  let update = {
                    $set: { "out_scope.six.asset": `${out_scope_asset}` },
                  };
                  let result = await ScopeDB.updateOne(filter, update);
                  update = {
                    $set: {
                      "out_scope.six.asset_type": `${out_scope_asset_type}`,
                    },
                  };
                  result = await ScopeDB.updateOne(filter, update);
                }
              } else {
                const filter = { _id: `${new_id}` };
                let update = {
                  $set: { "out_scope.five.asset": `${out_scope_asset}` },
                };
                let result = await ScopeDB.updateOne(filter, update);
                update = {
                  $set: {
                    "out_scope.five.asset_type": `${out_scope_asset_type}`,
                  },
                };
                result = await ScopeDB.updateOne(filter, update);
              }
            } else {
              const filter = { _id: `${new_id}` };
              let update = {
                $set: { "out_scope.four.asset": `${out_scope_asset}` },
              };
              let result = await ScopeDB.updateOne(filter, update);
              update = {
                $set: {
                  "out_scope.four.asset_type": `${out_scope_asset_type}`,
                },
              };
              result = await ScopeDB.updateOne(filter, update);
            }
          } else {
            const filter = { _id: `${new_id}` };
            let update = {
              $set: { "out_scope.three.asset": `${out_scope_asset}` },
            };
            let result = await ScopeDB.updateOne(filter, update);
            update = {
              $set: { "out_scope.three.asset_type": `${out_scope_asset_type}` },
            };
            result = await ScopeDB.updateOne(filter, update);
          }
        } else {
          const filter = { _id: `${new_id}` };
          let update = {
            $set: { "out_scope.two.asset": `${out_scope_asset}` },
          };
          let result = await ScopeDB.updateOne(filter, update);
          update = {
            $set: { "out_scope.two.asset_type": `${out_scope_asset_type}` },
          };
          result = await ScopeDB.updateOne(filter, update);
        }
      } else {
        const filter = { _id: `${new_id}` };
        let update = { $set: { "out_scope.one.asset": `${out_scope_asset}` } };
        let result = await ScopeDB.updateOne(filter, update);
        update = {
          $set: { "out_scope.one.asset_type": `${out_scope_asset_type}` },
        };
        result = await ScopeDB.updateOne(filter, update);
      }
    }
    // const jsd = JSON.stringify(data)
    // const scope = new ScopeDB(data)
    // const resposva = scope.save()
    // console.log(await resposva)
    res.status(200).json({ status: `Scope Updated` });
  } catch (e) {
    res.status(400).json({ status: `Fail to Update` });
  }
});

app.get("/profileBuss/:buss_id", async (req, res) => {
  console.log("hit");
  const buss_id = req.params.buss_id;
  const buss = await Buss.find({ buss_id: `${buss_id}` });
  res.status(200).json({
    username: `${buss[0].username}`,
    email: `${buss[0].email}`,
    company_name: `${buss[0].company_name}`,
    position: `${buss[0].position}`,
    country: `${buss[0].country}`,
  });
});

app.get("/profileRes/:rsrc_id", async (req, res) => {
  console.log("hit");
  const rsrc_id = req.params.rsrc_id;
  const buss = await Rsrc.find({ rsrc_id: `${rsrc_id}` });
  res.status(200).json({
    username: `${buss[0].username}`,
    email: `${buss[0].email}`,
    country: `${buss[0].country}`,
  });
});

app.patch("/settingBus", middleware, async (req, res) => {
  id = req.id;
  buss_id = req.buss_id;
  try {
    if (req.body.username != "undefined") {
      const username = req.body.username;
      const result = await Buss.findByIdAndUpdate(id, {
        username: `${username}`,
      });
    }
    if (req.body.email != "undefined") {
      const email = req.body.email;
      const result = await Buss.findByIdAndUpdate(id, {
        email: `${email}`,
      });
    }
    if (req.body.position != "undefined") {
      const position = req.body.position;
      const result = await Buss.findByIdAndUpdate(id, {
        position: `${position}`,
      });
    }
    if (req.body.password != "undefined") {
      const password = req.body.password;
      const hashed = hasher(password);
      console.log(hashed);
      const result = await Buss.findByIdAndUpdate(id, {
        password: `${hashed}`,
      });
    }
    if (req.body.country != "undefined") {
      const country = req.body.country;
      const result = await Buss.findByIdAndUpdate(id, {
        country: `${country}`,
      });
    }
    res.status(200).json({ status: "Profile Updated" });
  } catch (e) {
    res.status(400).json({ status: `Profile Update Fail` });
  }
});

app.patch("/settingRes", middleware, async (req, res) => {
  id = req.id;
  rsrc_id = req.rsrc_id;
  try {
    if (req.body.username != "undefined") {
      const username = req.body.username;
      const result = await Rsrc.findByIdAndUpdate(id, {
        username: `${username}`,
      });
    }
    if (req.body.email != "undefined") {
      const email = req.body.email;
      const result = await Rsrc.findByIdAndUpdate(id, {
        email: `${email}`,
      });
    }
    if (req.body.password != "undefined") {
      const password = req.body.password;
      const hashed = hasher(password);
      console.log(hashed);
      const result = await Rsrc.findByIdAndUpdate(id, {
        password: `${hashed}`,
      });
    }
    if (req.body.country != "undefined") {
      const country = req.body.country;
      const result = await Rsrc.findByIdAndUpdate(id, {
        country: `${country}`,
      });
    }
    res.status(200).json({ status: "Profile Updated" });
  } catch (e) {
    res.status(400).json({ status: `Profile Update Fail` });
  }
});

app.patch("/setReward", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  try {
    const findby1 = RewardDB.find({ buss_id: `${buss_id}` });
    const ds1 = await findby1;
    const new_id = ds1[0].id;
    if (req.body.low != ``) {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        low: `${req.body.low}`,
      });
      console.log(result);
    }
    if (req.body.medium != ``) {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        medium: `${req.body.medium}`,
      });
      console.log(result);
    }
    if (req.body.high != ``) {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        high: `${req.body.high}`,
      });
      console.log(result);
    }
    if (req.body.critical != ``) {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        critical: `${req.body.critical}`,
      });
      console.log(result);
    }
    res.status(200).json({ status: "Data Updated Successfully" });
  } catch (e) {
    res.status(400).json({ status: "Somthing went wrong" });
  }
});

app.delete("/delAccount", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  const rsrc_id = req.rsrc_id;
  const id = req.id;
  console.log(buss_id);
  console.log(rsrc_id);
  console.log(id);
  if (buss_id) {
    const resp = await Buss.findByIdAndDelete(id);
    res.status(200).json({ status: "Business account deleted" });
  } else {
    if (rsrc_id) {
      const resp = await Rsrc.findByIdAndDelete(id);
      res.status(200).json({ status: "Researcher account deleted" });
    } else {
      res.status(400).json({ status: "No User Found with this ID" });
    }
  }
});

app.get("/listPrograms", async (req, res) => {
  try {
    console.log("hit");
    const programs = await ProgramDB.find({});
    res.status(200).json(programs);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.get("/programScIn/:prog_id", async (req, res) => {
  const buss_id = req.params.prog_id;
  const sc_info = await ScopeDB.find({ buss_id: `${buss_id}` });
  const val1 = sc_info[0].in_scope;
  console.log(val1);
  res.status(200).json(val1);
});

app.get("/programScOut/:prog_id", async (req, res) => {
  const buss_id = req.params.prog_id;
  const sc_info = await ScopeDB.find({ buss_id: `${buss_id}` });
  const val1 = sc_info[0].out_scope;
  console.log(val1);
  res.status(200).json(val1);
});

app.get("/programRd/:prog_id", async (req, res) => {
  const buss_id = req.params.prog_id;
  const sc_info = await RewardDB.find({ buss_id: `${buss_id}` });
  const val1 = sc_info[0].low;
  const val2 = sc_info[0].medium;
  const val3 = sc_info[0].high;
  const val4 = sc_info[0].critical;
  res.status(200).json({
    low: `${val1}`,
    medium: `${val2}`,
    high: `${val3}`,
    critical: `${val4}`,
  });
});

app.post("/mailem", async (req, res) => {
  const mailto = req.body.mailto;
  const msg = req.body.message;
  sendotp(msg, mailto);
  res.status(200).json({ status: `Mail Sent to ${mailto}` });
});

app.post("/scheduleExam", async (req, res) => {
  try {
    const exam_info = req.body;
    const exam = new ExamDB(exam_info);
    const out = await exam.save();
    res.status(200).json({
      status: `Exam slot for ${req.body.course_name} course is booked on ${req.body.exam_date} at ${req.body.exam_time}`,
    });
  } catch (e) {
    res
      .status(400)
      .json({ status: `Fail to register slot for ${req.body.rsrc_id}` });
  }
});

app.post("/certInfo", async (req, res) => {
  try {
    const cert_info = req.body;
    const cert = new CertDB(cert_info);
    const out = await cert.save();
    res.status(200).json({
      status: `Certificate ${req.body.certificate_id} is issued to Researcher No. ${req.body.rsrc_id}`,
    });
  } catch (e) {
    res.status(400).json({ status: `Fail to issue certificate` });
  }
});

app.post("/bookmarkIn", middleware, async (req, res) => {
  //apply when click on bookmark button when not bookmarked
  const buss_id = req.body.prog_id;
  const rsrc_id = req.rsrc_id;
  console.log(buss_id);
  const data = await BookmarkDB.find({ rsrc_id: `${rsrc_id}` });
  const arraybhau = data[0].buss_id;
  if (arraybhau.includes(buss_id)) {
    res.status(200).json({ status: 0 });
  } else {
    await BookmarkDB.updateOne(
      { rsrc_id: `${rsrc_id}` },
      { $push: { buss_id: `${buss_id}` } }
    );
    res.status(200).json({ status: 1 });
  }
});

app.post("/bookmarkOut", middleware, async (req, res) => {
  //apply when click on bookmark button when already bookmarked
  const buss_id = req.body.prog_id;
  const rsrc_id = req.rsrc_id;
  console.log(buss_id);
  const data = await BookmarkDB.find({ rsrc_id: `${rsrc_id}` });
  const arraybhau = data[0].buss_id;
  if (arraybhau.includes(buss_id)) {
    await BookmarkDB.updateOne(
      { rsrc_id: `${rsrc_id}` },
      { $pull: { buss_id: `${buss_id}` } }
    );
    res.status(200).json({ status: 0 });
  } else {
    res.status(200).json({ status: 0 });
  }
});

app.post("/bookmarkShow", async (req, res) => {
  // apply when inner-program page load
  const buss_id = req.body.prog_id;
  const rsrc_id = req.body.rsrc_id;
  const data = await BookmarkDB.find({ rsrc_id: `${rsrc_id}` });
  const arraybhau = data[0].buss_id;
  if (arraybhau.includes(buss_id)) {
    res.status(200).json({ status: 1 });
  } else {
    res.status(200).json({ status: 0 });
  }
});

const random5 = () => {
  const length = 5;
  let result = "";
  const characters = "abcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

app.post("/submitReport", middleware, async (req, res) => {
  const v1 = random5();
  const v2 = random5();
  const final = v1 + "-" + v2;
  const rsrc_id = req.rsrc_id;
  const buss_id = req.body.buss_id;
  const report_title = req.body.report_title;
  const reproduce_steps = req.body.reproduce_steps;
  console.log(reproduce_steps);
  const poc1 = req.body.poc1;
  const poc2 = req.body.poc2;
  const poc3 = req.body.poc3;
  const poc4 = req.body.poc4;
  const poc5 = req.body.poc5;
  const attack_scenario = req.body.attack_scenario;
  const remediation = req.body.remediation;
  const data = {
    report_id: `${final}`,
    rsrc_id: `${rsrc_id}`,
    buss_id: `${buss_id}`,
    report_title: `${report_title}`,
    reproduce_steps: `${reproduce_steps}`,
    poc1: `${poc1}`,
    poc2: `${poc2}`,
    poc3: `${poc3}`,
    poc4: `${poc4}`,
    poc5: `${poc5}`,
    attack_scenario: `${attack_scenario}`,
    remediation: `${remediation}`,
    cvss: "",
    note: "",
    bounty: "",
    payment_id: "",
    isOld: false,
    retesting: false,
  };
  try {
    const structdb = new ReportDB(data);
    const outdb = await structdb.save();
    res.status(200).json({ status: `Report ${final} Submitted Successfully` });
  } catch (e) {
    res.status(400).json({ status: "Fail to Submit report" });
  }
});
// done
app.get("/reportfetch/:report_id", async (req, res) => {
  const report_id = req.params.report_id;
  const rep = await ReportDB.find({ report_id: `${report_id}` });
  res.status(200).json(rep);
}); //done in retesting

app.patch("/reportfetch/:report_id", async (req, res) => {
  const cvss = req.body.cvss;
  const note = req.body.note;
  const bounty = req.body.bounty;
  const payment_id = req.body.payment_id;
  const report_id = req.params.report_id;
  try {
    if (cvss != "") {
      await ReportDB.updateOne(
        { report_id: `${report_id}` },
        { cvss: `${cvss}` }
      );
    }
    if (note != "") {
      await ReportDB.updateOne(
        { report_id: `${report_id}` },
        { note: `${note}` }
      );
    }
    if (bounty != "") {
      await ReportDB.updateOne(
        { report_id: `${report_id}` },
        { bounty: `${bounty}` }
      );
    }
    if (payment_id != "") {
      await ReportDB.updateOne(
        { report_id: `${report_id}` },
        { payment_id: `${payment_id}` }
      );
    }
    res.status(200).json({ status: `Report Updated Successfully` });
  } catch (e) {
    res.status(400).json({ status: `Fail to Update Report` });
  }
});

app.post("/trackRep", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  const rep_type = req.body.rep_type;
  if (buss_id) {
    if (rep_type == "open") {
      const reps = await ReportDB.find({ buss_id: `${buss_id}`, isOld: false });
      res.status(200).json(reps);
    } else {
      if (rep_type == "resolved") {
        const reps = await ReportDB.find({
          buss_id: `${buss_id}`,
          isOld: true,
        });
        res.status(200).json({resp: `${reps}`});
      } else {
        res.status(400).json({resp: "Somthing went wrong"});
      }
    }
  } else {
    res.status(400).send("Invalid Business Account");
  }
}); // for res

app.post("/closeReport", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  const report_id = req.body.report_id;
  try {
    const repup = await ReportDB.updateOne(
      { buss_id: `${buss_id}`, report_id: `${report_id}`, isOld: false },
      { $set: { isOld: true } }
    );
    console.log(repup);
    res.status(200).json({ status: `Report is Closed` });
  } catch (e) {
    res.status(400).json({ status: `Somthing went wrong` });
  }
});

app.patch("/reopenReport", middleware, async (req, res) => {
  console.log("hit");
  const buss_id = req.buss_id;
  const report_id = req.body.report_id;
  const repval = await ReportDB.find({ report_id: `${report_id}` });
  if (repval[0].isOld == true) {
    const final = await ReportDB.updateOne(
      { buss_id: `${buss_id}`, report_id: `${report_id}`, isOld: true },
      { $set: { isOld: false, retesting: true } }
    );
    res.status(200).json({ status: `Retesting Approved` });
  } else {
    if (repval[0].isOld == false) {
      res.status(400).json({ status: `Report is already Open` });
    } else {
      res.status(400).json({ status: `No Report with this Id exists` });
    }
  }
}); //done

app.get("/retestingReportFetch/:report_id", async (req, res) => {
  const report_id = req.params.report_id;
  try {
    const rep = await ReportDB.find({
      report_id: `${report_id}`,
      retesting: true,
    });
    res.status(200).json({status: `${rep}`});
  } catch (e) {
    res
      .status(400)
      .json({ status: `No Retest Report with given report_id exists` });
  }
});

app.patch("/paymentclearance", async (req, res) => {
  const report_id = req.body.report_id;
  const bounty = req.body.bounty;
  const payment_id = req.body.payment_id;
  try {
    const updateinfo = await ReportDB.find({ report_id: `${report_id}` });
    const id = updateinfo[0].id;
    const upbt = await ReportDB.findByIdAndUpdate(id, {
      bounty: `${bounty}`,
      payment_id: `${payment_id}`,
    });
    const clear = await BountyDB.updateOne(
      { report_id: `${report_id}` },
      { $set: { isCleared: true } }
    );
    console.log(clear);
    res.status(200).json({ status: `Payment Cleared Successfully` });
  } catch (e) {
    res.status(400).json({ status: `Fail to Update Payment Information` });
  }
});

app.post("/bountyinfo", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  const rsrc_id = req.body.rsrc_id;
  const report_id = req.body.report_id;
  const bounty = req.body.bounty;
  const payment_id = req.body.payment_id;
  const data = {
    buss_id: `${buss_id}`,
    rsrc_id: `${rsrc_id}`,
    report_id: `${report_id}`,
    bounty: `${bounty}`,
    payment_id: `${payment_id}`,
    isCleared: false,
  };
  try {
    const createinfo = new BountyDB(data);
    const final = await createinfo.save();
    console.log(final);
    res.status(200).json({ status: "Successful" });
  } catch (e) {
    res.status(400).json({ status: "Fail" });
  }
});

app.post("/previousFindings", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  try {
    const out = await ReportDB.find({ buss_id: `${buss_id}`, isOld: true });
    res.status(400).json(out);
  } catch (e) {
    res.status(400).json({ status: `Fail to Fetch Old Reports` });
  }
});

app.post("/bountyhistory", middleware, async (req, res) => {
  const rsrc_id = req.rsrc_id;
  try {
    const out = await ReportDB.find({
      rsrc_id: `${rsrc_id}`,
      bounty: { $exists: true, $ne: "" },
    });
    if (out != "") {
      res.status(200).json(out);
    } else {
      res.status(200).json({ status: `No Previous Bounty Records` });
    }
  } catch (e) {
    res.status(400).json({ status: `Fail to fetch bounty history` });
  }
});

app.post("/notifications", middleware, async (req, res) => {
  const rsrc_id = req.rsrc_id;
  try {
    const out = await ReportDB.find({
      rsrc_id: `${rsrc_id}`,
      isOld: false,
      retesting: true,
    });
    if (out != "") {
      res.status(200).json(out);
    } else {
      res.status(200).json({ status: `There is not any Notification for you` });
    }
  } catch (e) {
    res.status(400).json({ status: `Operation Fail` });
  }
});

app.get("/leaderboard", async (req, res) => {
  try {
    const abc = await LeaderboardDB.find();
    res.status(200).json(abc);
  } catch (e) {
    res.status(400).json({ status: `Failed to fetch leaderboard information` });
  }
});

app.post("/leaderin", async (req, res) => {
  let number = "";
  for (let i = 0; i < 20; i++) {
    number += Math.floor(Math.random() * 10);
  }
  const rsrc_id = number;
  const username = req.body.username;
  const country = req.body.country;
  const impact = req.body.impact;
  const data = {
    rsrc_id: `${rsrc_id}`,
    username: `${username}`,
    country: `${country}`,
    impact: `${impact}`,
  };
  try {
    const abc = new LeaderboardDB(data);
    await abc.save();
    res.status(200).json({ status: `User added to leaderboard` });
  } catch (e) {
    res.status(400).json({ status: `Unable to add Researcher, Try Again!` });
  }
});

// app.get('/forgetPass/:username', async (req, res) => {
//         const name = req.params.username;
//         const getUser11 = await Buss.find({"username" : `${name}`});
//         if(getUser11[0] != null){
//           console.log('printme at 1');
//         }
//         const getUser12 = await Buss.find({"email" : `${name}`});
//         if(getUser12[0] != null){
//           console.log('printme at 2');
//         }
//         const getUser21 = await Rsrc.find({"username" : `${name}`});
//         if(getUser21[0] != null){
//           console.log('printme at 3');
//         }
//         const getUser22 = await Rsrc.find({"email" : `${name}`});
//         if(getUser22[0] != null){
//           console.log('printme at 4');
//         }
// })

// Start the server
app.listen(port, "127.0.0.1", () => {
  console.log(`Server started on port ${port}`);
});
