import Booking from '../model/Booking';

const bookingCtrl = {
    getAllBooking: async (req, res) => {
        try {
            const booking = await Booking.find()
                .populate('booker')
                .populate('dishes')
                .populate('emptyTable');

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getBooking: async (req, res) => {
        try {
            const booking = await Booking.findById(req.params.id)
                .populate('booker')
                .populate('dishes')
                .populate('emptyTable');

            if (!booking) {
                return res.status(404).json("Don dat ban khong ton tai!");
            }

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createBooking: async (req, res) => {
        try {
            const booking = await new Booking(req.body);

            await booking.save();

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateBooking: async (req, res) => {
        try {
            const booking = await Booking.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            }).populate('booker').populate('dishes');

            if (!booking) {
                return res.status(404).json("Don dat ban khong ton tai!")
            }

            return res.status(200).json(booking);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteBooking: async (req, res) => {
        try {
            const booking = await Booking.findByIdAndDelete(req.params.id);

            if (!booking) {
                return res.status(404).json("Don dat ban khong ton tai!")
            }

            return res.status(200).json("Xoa don dat ban thanh cong thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default bookingCtrl;