const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const {
    routes: userRoutes,
} = require('./user/routes');

const app = express();

var connection = mysql.createConnection({
    host     : 'db-equipo11.c4yzu1rgnehr.us-east-1.rds.amazonaws.com',
    user     : 'admin',
    password : 'Equipo_11',
    database : 'EnergiaCasa'
});

connection.connect();



app.get('/casaElectrica', function (req, res) {
    var sqlQuery='SELECT Direccion, Consumo, TipoEnergia from Casa Where TipoEnergia = "Electrica";';
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({result: results});
    });
});

app.get('/casaEolica', function (req, res) {
    var sqlQuery='SELECT Direccion, Consumo, TipoEnergia from Casa Where TipoEnergia = "Eolica";';
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({result: results});
    });
});

app.get('/casaSolar', function (req, res) {
    var sqlQuery='SELECT Direccion, Consumo, TipoEnergia from Casa Where TipoEnergia = "Solar";';
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({result: results});
    });
});

app.get('/precioEnergia', function (req, res) {
    var sqlQuery='Select Tipo, Nombre, Precio from Consumo order by Precio desc;';
    connection.query(sqlQuery, function (error, results, fields) {
        if (error) throw error;
        res.status(200).json({result: results});
    });
});


app.use(cors());
app.use(bodyParser.json());
app.use('/user', userRoutes);
app.use('/hola', userRoutes);

module.exports = app;