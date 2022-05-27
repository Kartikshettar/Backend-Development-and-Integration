// const mongoose = require('mongoose')
// const url = 'mongodb://localhost/shopdb';


// module.exports = function connects(){
//         mongoose.connect(url, {useNewUrlParser:true})
//         const con = mongoose.connection
//         con.on('open', () => {
//             console.log('connected...');
          
// })
// }


// const { MongoClient } = require("mongodb");

// const uri = "mongodb://localhost/shopdb";
// const databaseName = "shopdb";

// module.exports = MongoClient.connect(uri, { useNewUrlParser: true }, (error, client) => {
//   if (error) {
//     return console.log("Connection failed for some reason");
//   }
//   console.log("Connection established - All well");
//   const db = client.db(databaseName);
// });

const mongoose = require('mongoose')
const uri = "mongodb://localhost/shopdb";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
     
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit();
  }
};
module.exports = connectDB;

