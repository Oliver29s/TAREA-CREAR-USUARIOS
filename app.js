const express = require('express');
const morgan = require('morgan');
const cors = require('cors')

const usersRoutes = require('./routes/users.routes');
const repairsRoutes = require('./routes/repairs.routes');
const authRouter = require('./routes/auth.routes');


const AppError = require('./utils/appError');
const { globalErrorHandler } = require('./controller/error.controller');

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}


app.use(cors())

app.use(morgan('dev'));
app.use(express.json());

app.use('/api/v1/users', authRouter);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/repairs', repairsRoutes);


app.all('*',(req,res,next)=>{
    return next(new AppError(`cant not find ${req.originalUrl} on this`, 404))
})

app.use(globalErrorHandler)

module.exports = app;
