var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
		name: 'elephant',
		message:"i'm elephant get"
	});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'elephant',
		message:"i'm elephant post"
	});
});

router.put('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'elephant',
		message:"i'm elephant put"
	});
});

router.delete('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'elephant',
		message:"i'm elephant delete"
	});
});

module.exports = router;