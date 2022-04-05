var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');
const Livro = require('../models/livro');

//CRUDE DOS AUTORES

router.get('/', async function(req, res, next) {
  const autores = await Autor.select();
  res.json(autores.rows)
});

module.exports = router;

router.post('/insertautor', async function(req, res, next) {
  
  const autores = await Autor.insert(req.body); 
  res.json(autores);
  
});

router.put('/updateautor', async function(req, res, next) {

  const autores = await Autor.update(req.body); 
  res.json(autores);
  
});

router.delete('/deleteautor', async function(req, res, next) {

  const autores = await Autor.delete(req.body); 
  res.json(autores);
  
});

//CRUDE DOS LIVROS

router.get('/selectlivro', async function(req, res, next) {

  const livros = await Livro.select();
  res.json(livros.rows);
  
})

router.post('/insertlivro', async function(req, res, next) {

  const livros = await Livro.insert(req.body);
  res.json(livros);
})

router.delete('/deletelivro', async function(req, res, next) {

  const livros = await Livro.delete(req.body); 
  res.json(livros);
  
});

router.put('/updatelivro', async function(req, res, next) {

  const livros = await Livro.update(req.body); 
  res.json(livros);
  
});
module.exports = router;