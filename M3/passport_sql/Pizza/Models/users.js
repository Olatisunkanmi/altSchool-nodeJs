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
			},
			password: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			confirmPassword: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			user_type: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'users',
		},
	);

	return User;
};
