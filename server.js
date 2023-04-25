require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');
const initModel = require('./models/initModels');

const port = +process.env.PORT || 3009;
db.authenticate()
.then(() => console.log('authenticate database'))
.catch(err => console.log(err))


initModel();


db.sync()
.then(() => console.log(' database sync'))
.catch( err => console.log(err))

app.listen(port, () => {
  console.log(`App running on port ${port}...`);
});

