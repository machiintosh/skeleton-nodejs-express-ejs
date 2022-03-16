var express = require('express');
var router = express.Router();
const Autor = require('../models/autor');

router.get('/', async function(req, res, next) {
  const autores = await Autor.select();
  res.json(autores.rows)
});

module.exports = router;

router.get('/inserir', async function(req, res, next) {

  const autor = {
    nome: "luiz",
    sobrenome: "picolo",
    data_nascimento: "2005/10/08"
  }

  const autores = await Autor.insert(autor);
  res.json(autores);
  
});

module.exports = router;