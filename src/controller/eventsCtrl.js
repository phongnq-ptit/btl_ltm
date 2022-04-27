import Events from '../model/Events';

const EventsCtrl = {
    getAllEvents: async(req, res) => {
        try {

            const events = await Events.find();


            return res.status(200).json(events);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    getEvent: async(req, res) => {
        try {
            const event = await Events.findById(req.params.id);

            if (!event) {
                return res.status(404).json("Mon an khong ton tai!");
            }

            return res.status(200).json(events);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    createEvent: async(req, res) => {
        try {
            const event = await new Events(req.body);

            await event.save();

            return res.status(200).json(event);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    updateEvent: async(req, res) => {
        try {
            const events = await Events.findByIdAndUpdate({
                _id: req.params.id
            }, req.body, {
                new: true
            });

            if (!events) {
                return res.status(404).json("Mon an khong ton tai!")
            }

            return res.status(200).json(events);
        } catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteEvent: async(req, res) => {
        try {
            const events = await Events.findByIdAndDelete(req.params.id);

            if (!events) {
                return res.status(404).json("Mon an khong ton tai!")
            }

            return res.status(200).json("Xoa mon an thanh cong!");
        } catch (error) {
            return res.status(500).json(error);
        }
    }
}

export default EventsCtrl;