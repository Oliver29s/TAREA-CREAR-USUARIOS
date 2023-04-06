require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');
const {dataBase} = require('./database/config')


const port = process.env.PORT || 3009;
db.authenticate()
.then(() => console.log('authenticate database'))
.catch(err => console.log(err))


db.sync()
.then(() => console.log(' database sync'))
.catch( err => console.log(err))

app.listen(3009, () => {
  console.log(`App running on port ${port}...`);
});

dataBase.authenticate()
.then(() => console.log('authenticate database'))
.catch(err => console.log(err))


dataBase.sync()
.then(() => console.log(' database sync'))
.catch( err => console.log(err))

app.listen(3010, () => {
  console.log(`App running on port ${port}...`);
});
