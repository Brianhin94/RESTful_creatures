const express = require('express');
const app = express();
const layouts = require('express-ejs-layouts');
const path = require('path');

//layouts
app.set('view engine', 'ejs');
app.use(layouts);
app.use(express.static(path.join(__dirname, '/static')));

app.get('/', (req, res) =>{
    res.render('home')

});

app.listen(8000, () => console.log ('listenin 8000'));