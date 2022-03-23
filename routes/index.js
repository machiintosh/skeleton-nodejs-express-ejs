var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');

router.get('/', async function(req, res, next) {
  const autores = await Autor.select();
  res.json(autores.rows)
});

module.exports = router;

router.post('/insert', async function(req, res, next) {
  
  const autores = await Autor.insert(req.body); 
  res.json(autores);
  
});

router.put('/update', async function(req, res, next) {

  const autores = await Autor.update(req.body); 
  res.json(autores);
  
});

router.get('/delete', async function(req, res, next) {

  const autor = {
    id: "12"
  }
  const autores = await Autor.delete(autor);
  res.json(autores);
  
});

module.exports = router;