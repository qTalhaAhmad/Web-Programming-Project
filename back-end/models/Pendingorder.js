const mongoose = require("mongoose");

const pendingorderSchema = new mongoose.Schema(
  {
    userid: { type: String},
    totalprice: { type: String, required: true},
    address:{ type: String, required: true },
    itemlist: [String],
    dateoforder:Date
     }
  
);

module.exports = mongoose.model("Pendingorder", pendingorderSchema);
