var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).json({
		name: 'banana',
		message:"i'm banana get"
	});
});

router.post('/', function (req, res, next) {
	
	res.status(200).json({
		name: 'banana',
		message:"i'm banana post"
	});
});

router.put('/', function (req, res, next) {
	
	res.status(200).json({
		name: 'banana',
		message:"i'm banana put"
	});
});

router.delete('/', function (req, res, next) {
	
	res.status(200).json({
		name: 'banana',
		message:"i'm banana delete"
	});
});

module.exports = router;