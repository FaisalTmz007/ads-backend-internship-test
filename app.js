const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const { sequelize } = require('./src/models');
const cors = require('cors');
const app = express();

const karyawanRoutes = require('./src/routes/karyawan');
const cutiRoutes = require('./src/routes/cuti');

app.use(cors());
app.use(morgan('dev'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/karyawan', karyawanRoutes);
app.use('/cuti', cutiRoutes);

// make table if not exist
sequelize.sync({ force: true })
   .then(() => {
      console.log('Database tables created successfully.');
   })
   .catch((error) => {
      console.error('Error syncing database:', error.message);
   });

app.use((req, res, next) => {
    const error = new Error('Not Found');
    error.status = 404;
    
    next(error);
});

app.use((error, req, res, next) => {
    res.status(error.status || 500);
    res.json({error: {message: error.message}});
});

module.exports = app;