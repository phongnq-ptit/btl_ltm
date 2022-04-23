import Order from "../model/Order";

const orderCtrl = {
    getAllOrder: async (req, res) => {
        try {
            const orders = await Order.find()
                .populate('orderer')
                .populate('dishes');

            return res.status(200).json(orders);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getOrder: async (req, res) => {
        try {
            const order = await Order.findById(req.params.id);

            if (!order) {
                return res.status(404).json("Don dat hang khong ton tai!");
            }

            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createOrder: async (req, res) => {
        try {
            const order = await new Order(req.body);

            await order.save();

            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateOrder: async (req, res) => {
        try {
            const order = await Order.findByIdAndUpdate(
                req.params.id,
                req.body,
                { new: true }
            );

            if (!order) {
                return res.status(404).json("Don dat hang khong ton tai!")
            }

            return res.status(200).json(order);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteOrder: async (req, res) => {
        try {
            const order = await Order.findByIdAndDelete(req.params.id);

            if (!order) {
                return res.status(404).json("Don dat hang khong ton tai!")
            }

            return res.status(200).json("Xoa don hang thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default orderCtrl;