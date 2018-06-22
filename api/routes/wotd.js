const express = require('express');
const router = express.Router();


router.get('/',(req,res,next) =>{

	res.status(200).json({
		message: 'Handling GET requests'
	});
});


router.post('/',(req,res,next) =>{

	res.status(200).json({
		message: 'Handling POST requests'
	});
});


router.get('/:when',(req,res,next) =>{

	const whenDate = req.params.when;
	if( whenDate === 'today'){
		res.status(200).json({
		message: 'Word of the day: Mesmerize',
		whenDate: whenDate
	});
	} else{
		res.status(200).json({
			message : 'You passed not today so no word for you!!'
		});
	}
});

module.exports = router;
