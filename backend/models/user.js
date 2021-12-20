const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const User = new Schema(
  {
    wallet: { type: String, required: true },
    nameUser: { type: String, required: true },
    nameFirst : { type: String, required: true },
    nameLast: { type: String, required: true },
    email : { type: String, required: true },
    phoneNumber : { type: Number, required: true },
    address : { type: String, required: true },
    password : { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String, required: true },
    ticketsCreated: [{ type: Schema.Types.ObjectId, ref: 'tickets'}],
    votesCreated: [{ type: Schema.Types.ObjectId, ref: 'tickets'}],


  },
  { timestamps: true }
);

module.exports = User;
