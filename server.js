require('dotenv').config();
const app = require('./app');
const { db } = require('./database/config');


const port = process.env.PORT || 3007;
db.authenticate()
.then(() => console.log('authenticate database'))
.catch(err => console.log(err))


db.sync()
.then(() => console.log(' database sync'))
.catch( err => console.log(err))

app.listen(3007, () => {
  console.log(`App running on port ${port}...`);
});
