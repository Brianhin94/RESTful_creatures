const express = require('express');
const router = express.Router();
const fs = require('fs');


let prehistoric_creatures = fs.readFile('./prehistoric_creatures.json');
let pcData = JSON.parse(prehistoric_creatures);

router.get('/', (req, res) => {
   
    console.log (pcData)
    res.render('prehistoric_creatures/index', { prehistoric_creatures: pcData})
});
 


    module.exports = router;
