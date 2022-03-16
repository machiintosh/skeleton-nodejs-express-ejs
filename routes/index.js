var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');

router.get('/', async function(req, res, next) {
  const autores = await Autor.select();
  res.json(autores.rows)
});

module.exports = router;

router.get('/insert', async function(req, res, next) {

  const autor = {
    nome: "luiz",
    sobrenome: "picolo",
    data_nascimento: "2005/10/08"
  }

  const autores = await Autor.insert(autor);
  res.json(autores);
  
});

router.get('/update', async function(req, res, next) {

  const autor = {
    nome: "luizinho",
    sobrenome: "picolo",
    data_nascimento: "2005/10/09",
    id: "7"
  }

  const autores = await Autor.update(autor);
  res.json(autores);
  
});

router.get('/delete', async function(req, res, next) {

  const autor = {
    id: "8"
  }
  const autores = await Autor.delete(autor);
  res.json(autores);
  
});

module.exports = router;