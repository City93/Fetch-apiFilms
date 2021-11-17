let express = require('express');
let router = express.Router();
let movie = require('../utils/movies')


/* GET home page. */
router.get('/', async function(req, res) {
  res.render('home');
});
router.post('/', function(req, res) {
  console.log(req.body)
  res.redirect('/film/' + req.body.title);  
});
router.get('/film/:title', async function(req, res) {
  dataMovie = await movie(req.params.title)
  res.render('film', {
    title: dataMovie.title,
    year: dataMovie.year,
    imbd: dataMovie.imbd
  });
})

module.exports = router;
