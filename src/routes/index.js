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
  const decode = jwt.verify(token, KEY);
  const auth = decode._id;
  req.id = auth;
  const findby1 = Buss.findById(auth);
  const ds1 = await findby1;
  const bus_id = ds1.buss_id;
  console.log(bus_id);
  if (bus_id) {
    req.buss_id = bus_id;
  } else {
    const findby2 = Rsrc.findById(auth);
    const ds2 = await findby2;
    const rsc_id = ds2.rsrc_id;
    console.log(rsc_id);
    if (rsc_id) {
      req.rsrc_id = rsc_id;
    } else {
      req.id = "";
      req.buss_id = "";
      req.rsrc_id = "";
    }
  }
  next();
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
      }
    }
  } catch (err) {
    console.log(err);
  }
});

app.post("/userfetch", async (req, res) => {
  try {
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
            status: "Credentials Matched",
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
              status: "Credentials Matched",
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
  try {
    const val = await Buss.findByIdAndUpdate(id, { typeofProgram: `RedTeam` });
    console.log(val.typeofProgram);
    console.log(val.buss_id);
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
    console.log(await statsres);
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
    const scope = new ScopeDB(data2);
    const resposva = scope.save();
    console.log(await resposva);
    res.status(200).json({ status: "RedTeam" });
  } catch (e) {
    res.status(400).json({ status: "Something Went Wrong" });
  }
});

app.post("/profileStats", middleware, async (req, res) => {
  const id = res.id;
  try {
    // define new schema bussstats and export here, add 1 sample business data
    const prof = await BussStats.find(id);
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

app.get("/insertStats", middleware, async (req, res) => {
  const id = req.auth;
  const data = {
    buss_id: `${id}`,
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
  const user = new BussStats(data);
  const result = await user.save();
  res.status(200).json({
    buss_id: `${result.buss_id}`,
    stats: {
      monthly_report: `${result.monthly_report}`,
      monthly_paid: `${result.monthly_paid}`,
      avg_paid: `${result.avg_paid}`,
      "90_reports": `${result.mmm_reports}`,
      "90_paid": `${result.mmm_paid}`,
      "90_avg": `${result.mmm_avg}`,
    },
    report_counts: {
      open: 32,
      resolved: 1345,
    },
    report_cvss: {
      "N/A": 48,
      dup: 400,
      info: 200,
      medium: 177,
      high: 390,
      critical: 130,
    },
  });
});

app.patch("/setScope", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  console.log(buss_id);
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
                          $set: { "in_scope.ten.impact": `${in_scope_impact}` },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                        update = {
                          $set: { "in_scope.ten.elb": `${in_scope_elb}` },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                        if (result.modifiedCount > 0) {
                          console.log("Document updated successfully");
                        } else {
                          console.log(
                            "Document not found or update unsuccessful"
                          );
                        }
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
                        $set: { "in_scope.nine.impact": `${in_scope_impact}` },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                      update = {
                        $set: { "in_scope.nine.elb": `${in_scope_elb}` },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                      if (result.modifiedCount > 0) {
                        console.log("Document updated successfully");
                      } else {
                        console.log(
                          "Document not found or update unsuccessful"
                        );
                      }
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
                    if (result.modifiedCount > 0) {
                      console.log("Document updated successfully");
                    } else {
                      console.log("Document not found or update unsuccessful");
                    }
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
                  if (result.modifiedCount > 0) {
                    console.log("Document updated successfully");
                  } else {
                    console.log("Document not found or update unsuccessful");
                  }
                }
              } else {
                const filter = { _id: `${new_id}` };
                let update = {
                  $set: { "in_scope.six.asset": `${in_scope_asset}` },
                };
                let result = await ScopeDB.updateOne(filter, update);
                update = {
                  $set: { "in_scope.six.asset_type": `${in_scope_asset_type}` },
                };
                result = await ScopeDB.updateOne(filter, update);
                update = {
                  $set: { "in_scope.six.impact": `${in_scope_impact}` },
                };
                result = await ScopeDB.updateOne(filter, update);
                update = { $set: { "in_scope.six.elb": `${in_scope_elb}` } };
                result = await ScopeDB.updateOne(filter, update);
                if (result.modifiedCount > 0) {
                  console.log("Document updated successfully");
                } else {
                  console.log("Document not found or update unsuccessful");
                }
              }
            } else {
              const filter = { _id: `${new_id}` };
              let update = {
                $set: { "in_scope.five.asset": `${in_scope_asset}` },
              };
              let result = await ScopeDB.updateOne(filter, update);
              update = {
                $set: { "in_scope.five.asset_type": `${in_scope_asset_type}` },
              };
              result = await ScopeDB.updateOne(filter, update);
              update = {
                $set: { "in_scope.five.impact": `${in_scope_impact}` },
              };
              result = await ScopeDB.updateOne(filter, update);
              update = { $set: { "in_scope.five.elb": `${in_scope_elb}` } };
              result = await ScopeDB.updateOne(filter, update);
              if (result.modifiedCount > 0) {
                console.log("Document updated successfully");
              } else {
                console.log("Document not found or update unsuccessful");
              }
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
            update = { $set: { "in_scope.four.impact": `${in_scope_impact}` } };
            result = await ScopeDB.updateOne(filter, update);
            update = { $set: { "in_scope.four.elb": `${in_scope_elb}` } };
            result = await ScopeDB.updateOne(filter, update);
            if (result.modifiedCount > 0) {
              console.log("Document updated successfully");
            } else {
              console.log("Document not found or update unsuccessful");
            }
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
          update = { $set: { "in_scope.three.impact": `${in_scope_impact}` } };
          result = await ScopeDB.updateOne(filter, update);
          update = { $set: { "in_scope.three.elb": `${in_scope_elb}` } };
          result = await ScopeDB.updateOne(filter, update);
          if (result.modifiedCount > 0) {
            console.log("Document updated successfully");
          } else {
            console.log("Document not found or update unsuccessful");
          }
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
        if (result.modifiedCount > 0) {
          console.log("Document updated successfully");
        } else {
          console.log("Document not found or update unsuccessful");
        }
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
      if (result.modifiedCount > 0) {
        console.log("Document updated successfully");
      } else {
        console.log("Document not found or update unsuccessful");
      }
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
                          $set: { "out_scope.ten.asset": `${out_scope_asset}` },
                        };
                        let result = await ScopeDB.updateOne(filter, update);
                        update = {
                          $set: {
                            "out_scope.ten.asset_type": `${out_scope_asset_type}`,
                          },
                        };
                        result = await ScopeDB.updateOne(filter, update);
                        if (result.modifiedCount > 0) {
                          console.log("Document updated successfully");
                        } else {
                          console.log(
                            "Document not found or update unsuccessful"
                          );
                        }
                      }
                    } else {
                      const filter = { _id: `${new_id}` };
                      let update = {
                        $set: { "out_scope.nine.asset": `${out_scope_asset}` },
                      };
                      let result = await ScopeDB.updateOne(filter, update);
                      update = {
                        $set: {
                          "out_scope.nine.asset_type": `${out_scope_asset_type}`,
                        },
                      };
                      result = await ScopeDB.updateOne(filter, update);
                      if (result.modifiedCount > 0) {
                        console.log("Document updated successfully");
                      } else {
                        console.log(
                          "Document not found or update unsuccessful"
                        );
                      }
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
                    if (result.modifiedCount > 0) {
                      console.log("Document updated successfully");
                    } else {
                      console.log("Document not found or update unsuccessful");
                    }
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
                  if (result.modifiedCount > 0) {
                    console.log("Document updated successfully");
                  } else {
                    console.log("Document not found or update unsuccessful");
                  }
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
                if (result.modifiedCount > 0) {
                  console.log("Document updated successfully");
                } else {
                  console.log("Document not found or update unsuccessful");
                }
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
              if (result.modifiedCount > 0) {
                console.log("Document updated successfully");
              } else {
                console.log("Document not found or update unsuccessful");
              }
            }
          } else {
            const filter = { _id: `${new_id}` };
            let update = {
              $set: { "out_scope.four.asset": `${out_scope_asset}` },
            };
            let result = await ScopeDB.updateOne(filter, update);
            update = {
              $set: { "out_scope.four.asset_type": `${out_scope_asset_type}` },
            };
            result = await ScopeDB.updateOne(filter, update);
            if (result.modifiedCount > 0) {
              console.log("Document updated successfully");
            } else {
              console.log("Document not found or update unsuccessful");
            }
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
          if (result.modifiedCount > 0) {
            console.log("Document updated successfully");
          } else {
            console.log("Document not found or update unsuccessful");
          }
        }
      } else {
        const filter = { _id: `${new_id}` };
        let update = { $set: { "out_scope.two.asset": `${out_scope_asset}` } };
        let result = await ScopeDB.updateOne(filter, update);
        update = {
          $set: { "out_scope.two.asset_type": `${out_scope_asset_type}` },
        };
        result = await ScopeDB.updateOne(filter, update);
        if (result.modifiedCount > 0) {
          console.log("Document updated successfully");
        } else {
          console.log("Document not found or update unsuccessful");
        }
      }
    } else {
      const filter = { _id: `${new_id}` };
      let update = { $set: { "out_scope.one.asset": `${out_scope_asset}` } };
      let result = await ScopeDB.updateOne(filter, update);
      update = {
        $set: { "out_scope.one.asset_type": `${out_scope_asset_type}` },
      };
      result = await ScopeDB.updateOne(filter, update);
      if (result.modifiedCount > 0) {
        console.log("Document updated successfully");
      } else {
        console.log("Document not found or update unsuccessful");
      }
    }
  }
  // const jsd = JSON.stringify(data)
  // const scope = new ScopeDB(data)
  // const resposva = scope.save()
  // console.log(await resposva)
  res.status(200).send("done");
});

app.patch("/settingBus", middleware, async (req, res) => {
  id = req.id;
  buss_id = req.buss_id;
  if (req.body.username != "") {
    const username = req.body.username;
    const result = await Buss.findByIdAndUpdate(id, {
      username: `${username}`,
    });
    console.log(result);
  }
  if (req.body.email != "") {
    const email = req.body.email;
    const result = await Buss.findByIdAndUpdate(id, { email: `${email}` });
    console.log(result);
  }
  if (req.body.password != "") {
    const password = req.body.password;
    const hashed = hasher(password);
    console.log(hashed);
    const result = await Buss.findByIdAndUpdate(id, { password: `${hashed}` });
    console.log(result);
  }
  if (req.body.position != "") {
    const position = req.body.position;
    const result = await Buss.findByIdAndUpdate(id, {
      position: `${position}`,
    });
    console.log(result);
  }
  if (req.body.country != "") {
    const country = req.body.country;
    const result = await Buss.findByIdAndUpdate(id, { country: `${country}` });
    console.log(result);
  }
  res.status(200).json({ status: "Profile Updated" });
});

app.patch("/setReward", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  try {
    const findby1 = RewardDB.find({ buss_id: `${buss_id}` });
    const ds1 = await findby1;
    const new_id = ds1[0].id;
    if (req.body.low != "") {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        low: `${req.body.low}`,
      });
      console.log(result);
    }
    if (req.body.medium != "") {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        medium: `${req.body.medium}`,
      });
      console.log(result);
    }
    if (req.body.high != "") {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        high: `${req.body.high}`,
      });
      console.log(result);
    }
    if (req.body.critical != "") {
      const result = await RewardDB.findByIdAndUpdate(new_id, {
        critical: `${req.body.critical}`,
      });
      console.log(result);
    }
    res.status(200).json({ status: "Data Updated Successfully" });
  } catch (e) {
    res.status(400).json({ status: "Somthing went wrong" });
  }
}); // Test this API

app.delete("/delAccount", middleware, async (req, res) => {
  const buss_id = req.buss_id;
  const rsrc_id = req.rsrc_id;
  const id = req.id;
  console.log(buss_id);
  console.log(rsrc_id);
  console.log(id);
  if (buss_id) {
    const resp = await Buss.findByIdAndDelete(id);
    res.status(200).json({ status: "business account deleted" });
  } else {
    if (rsrc_id) {
      const resp = await Rsrc.findByIdAndDelete(id);
      res.status(200).json({ status: "Researcher account deleted" });
    } else {
      res.status(400).json({ status: "No User Found with this ID" });
    }
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
