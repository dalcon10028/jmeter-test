var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
		name: 'cat',
		message:"i'm cat get"
	});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'cat',
		message:"i'm cat post"
	});
});

router.put('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'cat',
		message:"i'm cat put"
	});
});

router.delete('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'cat',
		message:"i'm cat delete"
	});
});

module.exports = router;