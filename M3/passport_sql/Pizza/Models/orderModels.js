module.exports = (sequelize, DataTypes) => {
	const Order = sequelize.define(
		'Order',
		{
			id: {
				type: DataTypes.INTEGER,
				autoIncrement: true,
				primaryKey: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			goal: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			chained_by: {
				type: DataTypes.STRING,
				allowNull: true,
			},
			created_by: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			state: {
				type: DataTypes.STRING,
				defaultValue: 'Active',
				allowNull: false,
			},
			created_at: {
				type: DataTypes.DATE,
				defaultValue: DataTypes.NOW,
				allowNull: false,
			},
		},
		{
			tableName: 'orders',
		},
	);

	return Order;
};
