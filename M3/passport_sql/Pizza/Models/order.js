module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define(
		'Order',
		{
			id: {
				type: DataTypes.INTERGER,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			year: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			isbn: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			Author: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'orders',
		},
	);

	return Order;
};
