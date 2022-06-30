const mongoose = require("mongoose");
//returns a promise , this gives us the data

mongoose
  .connect("mongodb://localhost:27017/SwabhimaanUsers", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`No connection`);
  });
