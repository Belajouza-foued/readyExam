const dbConfig = require("../config/config-db");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose
db.url = dbConfig.url;
db.students = require ("./students")(mongoose);
module.exports = db;
