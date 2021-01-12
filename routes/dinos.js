const express = require('express');
const router = express.Router();
const fs = require('fs');

//mounted at /dinos

// index - /dinosn
router.get('/', (req, res) => {
//read the file that stores dinos and saves in a variable
let dinos= fs.readFileSync('./dinos.json');
//pasing JSON into a js mutable data
let dinoData = JSON.parse(dinos)
console.log(dinoData);

res.render('dinos/index', {dinos: dinoData });
});

//New - /dinos/new
router.get('/new', (req, res) => {
console.log('----newdino');
    res.render('dinos/new');
})

//create -- post /dinos
router.post('/', (req, res) => {
     console.log(req.body);
     //add dino to dinos.json
   
     // turn dinos.json into mutable array
     let dinos = fs.readFileSync('./dinos.json')
   dinosJS = JSON.parse(dinos);
     //add new dino from req body to array
     dinosJS.push(req.body);

     //turn dino array into json
     let dinoJSON = JSON.stringify(dinosJS);

     //write new dino array to dinos.json
     fs.writeFileSync('./dinos.json', dinoJSON)

     res.redirect('/.dinos');

    
})

module.exports = router;