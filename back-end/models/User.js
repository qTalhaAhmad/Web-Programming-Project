const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    address:{ type: String, required: true },
    cartitemlist: [String],

    prevorder: [String],
    currentorderlist: [String],

    /*cartitemlist: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],
  prevorder: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  currentorderlist: [
    {
      productId: {
        type: String,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
*/
 // { timestamps: true },
  }
);

module.exports = mongoose.model("User", UserSchema);
