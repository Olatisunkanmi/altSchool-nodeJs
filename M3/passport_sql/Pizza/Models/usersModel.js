const validator = require('validator');

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define(
		'User',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			name: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			email: {
				type: DataTypes.STRING,
				allowNull: false,
				unique: true,
				validator: [validator.isEmail, 'Enter a valid Email address'],
			},
			password: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			// confirmPassword: {
			// 	type: DataTypes.STRING,
			// 	allowNull: false,
			// },
			user_type: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: 'user',
			},
		},
		{
			tableName: 'users',
		},
	);

	return User;
};
