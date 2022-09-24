const USER = require('../Models/UserModel');

// Universal User.  re-used and re-init with every function
var User;

exports.userLogin = async (req, res) => {
	User = await USER.findById(req.params.id);
	res.status(200).json({
		status: 'success',
		data: {
			user: req.userData,
		},
	});
};
