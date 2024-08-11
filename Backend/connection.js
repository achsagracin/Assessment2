const mongoose = require("mongoose");
//Write missing code 
mongoose
  .connect('mongodb+srv://achsagracin:55EPsFt4HIQS6if0@cluster0.g8pcacv.mongodb.net/employeedetail?retryWrites=true&w=majority&appName=Cluster0'
   
  )
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((error) => {
    console.log(error);
  });
