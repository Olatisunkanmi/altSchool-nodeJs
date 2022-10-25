const db = require('../utils/db');
const catchAsync = require('../utils/catchAsync');
// declare
var Orders;

// Get Models
const OrderModel = db.Orders;

exports.getAllOrders = async (req, res) => {
	try {
		Orders = await db.Orders.findAll();
		res.status(200).json(Orders);
	} catch (error) {
		console.log(error);
		res.status(500).send(error);
	}
};

exports.createOrder = async (req, res) => {
	const { title, goal, email } = req.body;
	// const OrderInfo = req.body;

	try {
		Orders = await OrderModel.build({
			title: title,
			goal: goal,
			created_by: email,
		});
		await Orders.save();
		res.status(200).json({
			status: 'Success',
			data: Orders,
		});
	} catch (error) {
		console.log(error);
		res.status(400).send(error);
	}
};

exports.updateOrder = async (req, res, next) => {
	const OrderId = req.params.id * 1;
	const updateInfo = req.body;
	try {
		const Order = await OrderModel.update(updateInfo, {
			where: {
				id: OrderId,
			},
		});
		res.status(200).json({
			status: 'success',
			data: Order,
		});
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.deleteOrder = async (req, res, next) => {
	const OrderId = req.params.id * 1;
	try {
		const Order = await OrderModel.destroy({
			where: {
				id: OrderId,
			},
		});
		res.status(200).json('Order deleted');
	} catch (error) {
		res.status(500).send(error);
	}
};

exports.chainCampaign = catchAsync(async (req, res, next) => {
	const campaignsId = req.params.id;
});
