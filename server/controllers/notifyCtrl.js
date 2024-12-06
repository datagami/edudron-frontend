const Notifies = require('../models/notifyModel')


const notifyCtrl = {
    createNotify: async (req, res) => {
        try {
            const { id, recipients, url, text, content, image } = req.body
            console.log(req.body)

            if(recipients.includes(req.user._id.toString())) return;

            const notify = new Notifies({
                id, recipients, url, text, content, image, user: req.user._id
            })

            await notify.save()
            return res.json({notify})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    removeNotify: async (req, res) => {
        try {
            // const notify = await Notifies.findOneAndDelete({
            //     id: req.params.id, url: req.query.url
            // })
            const notify = await Notifies.findByIdAndDelete({_id:req.params.id})
            return res.json({notify})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getNotifies: async (req, res) => {
        try {
            await Notifies.updateMany( {
                isRead: true
            })
            console.log(req.user)
            const notifies = await Notifies.find({recipients: req.user._id})
            .sort('-createdAt').populate('user', '_id avatar fullname')
            
            return res.json({notifies})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    isReadNotify: async (req, res) => {
        try {
            const notifies = await Notifies.findOneAndUpdate({_id: req.params.id}, {
                isRead: true
            })

            return res.json({notifies})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteAllNotifies: async (req, res) => {
        try {
            const notifies = await Notifies.updateMany({recipients: req.user._id},
                {
                    $pull:{recipients:req.user._id}
                }
            )
            
            return res.json({notifies})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}


module.exports = notifyCtrl