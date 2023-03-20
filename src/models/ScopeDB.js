const mongoose = require("mongoose");

const scopeSchema = new mongoose.Schema({
  buss_id: {
    type: String,
    required: true,
    unique: true,
  },
  in_scope: {
    one: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    two: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    three: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    four: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    five: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    six: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    seven: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    eight: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    nine: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
    ten: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
      impact: {
        type: String,
      },
      elb: {
        type: String,
      },
    },
  },
  out_scope: {
    one: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    two: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    three: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    four: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    five: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    six: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    seven: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    eight: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    nine: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
    ten: {
      asset: {
        type: String,
      },
      asset_type: {
        type: String,
      },
    },
  },
});

const ScopeDB = mongoose.model("ScopeDB", scopeSchema);
module.exports = ScopeDB;
