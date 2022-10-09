module.exports = async (sequelize, DataTypes) => {
	const Book = await sequelize.define(
		'Book',
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
			year: {
				type: DataTypes.INTEGER,
				allowNull: false,
			},
			isbn: {
				type: DataTypes.STRING,
				allowNull: false,
			},
		},
		{
			tableName: 'books',
		},
	);

	return Book;
};
