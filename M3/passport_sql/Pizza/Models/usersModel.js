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
			user_type: {
				type: DataTypes.STRING,
				allowNull: true,
				defaultValue: 'user',
			},
			campaigns: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 0,
			},
			chained: {
				type: DataTypes.INTEGER,
				allowNull: true,
				defaultValue: 0,
			},
		},
		{
			tableName: 'users',
		},
	);

	return User;
};
