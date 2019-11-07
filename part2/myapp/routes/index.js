var express = require('express');
var router = express.Router();

var dataBike = [
{model:'bike1', prix:400, src:'/images/bike-1.jpg'},
{model:'bike2', prix:600, src:'/images/bike-2.jpg'},
{model:'bike3', prix:700, src:'/images/bike-3.jpg'},
{model:'bike4', prix:100, src:'/images/bike-4.jpg'},
{model:'bike5', prix:200, src:'/images/bike-5.jpg'},

];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {dataBike});
 });

 router.get('/shop', function(req, res, next) {
  res.render('shop' );
 });

module.exports = router;