const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

//Creates a userSchema object
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  createAt: { type: Date, default: Date.now() },
});

userSchema.pre("save", async function(next){
    if (this.isModified('password')){
        this.password = await bcrypt.hash(this.password, 12);
    }

    next();
})

module.exports = mongoose.model('User', userSchema)