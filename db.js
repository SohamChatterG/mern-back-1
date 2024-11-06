const mongoose = require('mongoose')


const mongoURI = 'mongodb+srv://heyiamsoham:heyiamsoham@paytmdb.dllffkh.mongodb.net/';

mongoose.connect(mongoURI, {
    
    tls: true, // Enables TLS/SSL for the connection
  })
  .then(() => {
    console.log('Successfully connected to MongoDB Atlas!');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB Atlas:', err);
  });
  

const userSchema = new mongoose.Schema({
    username : {
        type : String,
        required: true,
        unique: true
    },
    firstName: {
        type : String,
        required : true
    },
    lastName: {
        type : String,
        required : true
    },
    password: {
        type : String,
        required: true,
        minLength:6
    }
})

const User = new mongoose.model("User",userSchema);

const accountSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Reference to User model
        ref: 'User',
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
});

const Account = mongoose.model('Account', accountSchema);

const transactionSchema =mongoose.Schema({
    userId: {
        type: String, // Reference to User model
        ref: 'User',
        required: true
    },
    receiverId:{
        type: mongoose.Schema.Types.ObjectId,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    to:{
        type: String,
        required:true
    },
    from :{
        type: String,
        required:true
    }
})
const Transaction =  mongoose.model('Transaction',transactionSchema);
module.exports = {User,Account,Transaction}

// https://github.com/100xdevs-cohort-2/paytm/tree/backend-solution
