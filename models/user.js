
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

 const userSchema = new Schema({
    password: { type: String, required: true },
     firstname : {
        type : String,
         required: true,
    },
     lastname : {
        type : String,
         required: true,
    },

    email: { 
        type: String, 
         required: true, 
         unique: true, 
         match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/
     },
     contactnumber : {
       type: String, 
         required: true, 
         unique: true, 
     },
     role: { type: String, required: true },
     verificationToken: String,
     verified: Date,
     resetToken: {
         token: String,
         expires: Date
     },
     passwordReset: Date,
     created: { type: Date, default: Date.now },
     updated: Date
    
    
    
  
 });

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// will encrypt password everytime its saved
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
});

userSchema.virtual('isVerified').get(function () {
  return !!(this.verified || this.passwordReset);
});

userSchema.set('toJSON', {
  virtuals: true,
  versionKey: false,
  transform: function (doc, ret) {
      // remove these props when object is serialized
      delete ret._id;
      delete ret.password;
  }
});


const User = mongoose.model('Account', userSchema);
module.exports = User;