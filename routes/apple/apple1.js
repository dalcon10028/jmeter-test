var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
		name: 'apple',
		message:"i'm apple get"
	});
});

router.post('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'apple',
		message:"i'm apple post"
	});
});

router.put('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'apple',
		message:"i'm apple put"
	});
});

router.delete('/', function (req, res, next) {
	console.log(req.body);
	res.status(200).json({
		name: 'apple',
		message:"i'm apple delete"
	});
});

module.exports = router;