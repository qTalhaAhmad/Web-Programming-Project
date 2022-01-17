const mongoose = require("mongoose");

const onwayorderSchema = new mongoose.Schema(
  {
    userid: { type: String},
    totalprice: { type: String, required: true},
    address:{ type: String, required: true },
    itemlist: [String],
    dateofdelivery:Date,
      },
  
);

module.exports = mongoose.model("onwayorder", onwayorderSchema);

