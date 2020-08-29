require('dotenv').config({path: __dirname + '/.env'}); // working around osx dir issue

const config = {
  api_base_path: process.env.API_HOST + process.env.API_PATH,
  db_connection: process.env.DB_CONNECTION
}

exports.config = config
