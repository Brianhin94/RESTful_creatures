const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const path = require('path');

//layouts
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static(path.join(__dirname, '/static')));
app.use(express.urlencoded({extended: false})); //body parsing middleware

//global routes
app.get('/', (req, res) =>{
    res.render('home')

});
//controllers/routes
app.use('/dinos', require('./routes/dinos'));
app.use('/prehistoric_creatures', require('/routes/prehistoric_creatures'));

app.listen(8000, () => console.log ('listenin 8000'));