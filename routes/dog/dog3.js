var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
		name: 'dog',
		message:"i'm dog get"
	});
});

router.post('/', function (req, res, next) {
	
	res.status(200).json({
		name: 'dog',
		message:"i'm dog post"
	});
});

router.put('/', function (req, res, next) {
	
	res.status(200).json({
		name: 'dog',
		message:"i'm dog put"
	});
});

router.delete('/', function (req, res, next) {
	
	res.status(200).json({
		name: 'dog',
		message:"i'm dog delete"
	});
});

module.exports = router;