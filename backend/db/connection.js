const mongoose = require("mongoose");

exports.connection = async () => {
  mongoose.connect(
    "mongodb+srv://ghulamdastgeer374:eedDpiMvMBbrUb0k@cluster0.utdc9kh.mongodb.net/?retryWrites=true&w=majority"
  );
  //mongoose.connect("mongodb://localhost:27017/MedGrizz");
  //"mongodb+srv://medgrizz:ilTeQttmmcx6e80E@cluster0.aqusjbt.mongodb.net/?retryWrites=true&w=majority"
  //ghulamdastgeer374
  //eedDpiMvMBbrUb0k
  //mongodb+srv://ghulamdastgeer374:eedDpiMvMBbrUb0k@cluster0.utdc9kh.mongodb.net/?retryWrites=true&w=majority
};
