const Users = require('../models/userModel')

const { uploadFile, uploadVideo } = require("../s3")
const { sendFireBaseNOtificationFCM } = require('../fcmNotification');

const AWS_folder = "user/"


const userCtrl = {
    searchUser: async (req, res) => {
        try {
            const users = await Users.find({ fullname: { $regex: req.query.fullname } })
                .limit(10)

            res.json({ users })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    getUser: async (req, res) => {
        try {
            const user = await Users.findById(req.params.id).select('-password')
                .populate("followers following exp", "-password").populate("exp")
            if (!user) return res.status(400).json({ msg: "User does not exist." })

            res.json({ user })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateLocation: async (req, res) => {
        try {
        const is_user = await Users.findById({ _id: req.user._id })
        if (!is_user) {
            res.status(404).json({ msg: "User not found" })
        }

        const { latitude, longitude, fcmToken } = req.body
        // console.log(req.body)
        if (!latitude && !longitude) return res.status(400).json({ msg: "invalid location." })


        const user = await Users.findOneAndUpdate({ _id: req.user._id }, {
            location: { type: "Point", coordinates: [latitude ? latitude : is_user.latitude, longitude ? longitude : is_user.longitude] },
            longitude: longitude ? longitude : is_user.longitude,
            fcmToken: fcmToken ? fcmToken : is_user.fcmToken
        })

        res.json({ msg: "Location Update Success!", user })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateUser: async (req, res) => {
        // console.log(req.body)
        try {
            const is_user = await Users.findById({ _id: req.user._id })
            if (!is_user) {
                res.status(404).json({ msg: "User not found" })
            }
          
            const {     fullname,
                email,
                phone,
                city,
                state,
                country,
                profileTitle,
                 } = req.body
            if (!fullname) return res.status(400).json({ msg: "Please add your name." })

            let image

            if (req.files[0]) {
                console.log(req.files)
                const file = req.files[0]
                uploadResult = await uploadFile(file, AWS_folder)
                image = uploadResult.Location
            }

            console.log(image, " av : ", is_user.avatar)

            const user = await Users.findOneAndUpdate({ _id: req.user._id }, {
                avatar: req?.files[0] ? image : is_user.avatar, fullname, phone: phone ? phone : is_user.phone,email:email ? email :is_user.email,city,state,country,profileTitle
            }, {
                new: 'true'
            })

            res.json({ msg: "Update Success!", user })

        } catch (err) {
            if (err.code == 11000) {
                console.log(err)
                if (err.keyPattern.phone) { // assuming name is `email_1` & also you can trim msg to get failing input value.
                    return res.status(201).send(["Duplicate phone found."]);
                } else {
                    return res.status(201).send(["Duplicate username found."]);
                }
            }
            return res.status(500).json({ msg: err.message })
        }
    },
    updateCover: async (req, res) => {
        try {
            const file = req.files[0]
            uploadResult = await uploadFile(file, AWS_folder)
            const image = uploadResult.Location
            await Users.findOneAndUpdate({ _id: req.user._id }, {
                coverImg: image
            })
            res.json({ msg: "Update Success!" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    follow: async (req, res) => {
        try {
            const user = await Users.find({ _id: req.params.id, followers: req.user._id })
            console.log(user);
            if (user.length > 0) return res.status(500).json({ msg: "You already connected with "+user[0].fullname })

            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $push: { followers: req.user._id }
            }, { new: true }).populate("followers following", "-password")

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $push: { following: req.params.id }
            }, { new: true })
            // console.log(newUser.fcmToken)
            // if(JSON.stringify(newUser?._id) !== JSON.stringify(req.user._id) ){
            //     sendFireBaseNOtificationFCM([newUser?.fcmToken],'Edudron', req.user.fullname+' add in your connection',newUser, req.user)
            //     }
            res.json({ newUser })

        } catch (err) {
            console.log(err.message);
            return res.status(500).json({ msg: err.message })
        }
    },
    removeFollower: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { following: req.user._id }
            }, { new: true }).populate("followers following", "-password")

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $pull: { followers: req.params.id }
            }, { new: true })

            res.json({ Success: "connection removed successfully", newUser })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    unfollow: async (req, res) => {
        try {

            const newUser = await Users.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { followers: req.user._id }
            }, { new: true }).populate("followers following", "-password")

            await Users.findOneAndUpdate({ _id: req.user._id }, {
                $pull: { following: req.params.id }
            }, { new: true })

            res.json({ newUser })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    blockUser: async (req, res) => {
        try {
            const user = await Users.find({ _id: req.user._id, blockUser: req.params.id })
            var newUser;
            if (user.length > 0) {
                newUser = await Users.findOneAndUpdate({ _id: req.user._id }, {
                    $pull: { blockUser: req.params.id }
                }, { new: true });
                res.json({ msg: 'Unblock Success!' })
            } else {
                newUser = await Users.findOneAndUpdate({ _id: req.user._id }, {
                    $push: { blockUser: req.params.id }
                }, { new: true });
                res.json({ msg: 'Block Success!' })
            }




        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },

    suggestionsUser: async (req, res) => {
        try {
            const newArr = [...req.user.following, req.user._id]

            const num = req.query.num || 10

            const users = await Users.aggregate([
                { $match: { _id: { $nin: newArr } } },
                { $sample: { size: Number(num) } },
                { $lookup: { from: 'users', localField: 'followers', foreignField: '_id', as: 'followers' } },
                { $lookup: { from: 'users', localField: 'following', foreignField: '_id', as: 'following' } },
            ]).project("-password")

            return res.json({
                users,
                result: users.length
            })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    leaderBoard: async (req, res) => {
        try {        

            const leaderboard = await Users.find({
                _id:{$nin:[req.user._id]},
                location:
                {
                    $near:
                    {
                        $geometry: req.user.location,
                        $minDistance: 0,
                        $maxDistance: 25
                    }
                }
            }).sort({ followers: 1 })

            res.json({ leaderboard })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    }
}


module.exports = userCtrl