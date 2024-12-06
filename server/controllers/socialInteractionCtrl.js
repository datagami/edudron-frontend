const Social = require('../models/Social/posts')
const Likes = require('../models/Social/likes')
const Comments = require('../models/Social/comments')
const Users = require('../models/userModel')
const jwt_auth = require('jsonwebtoken')
const { sendFireBaseNOtificationFCM } = require('../fcmNotification')


const checkId = async (req, res, next) => {

    var ObjectId = require('mongoose').Types.ObjectId
    const validity = ObjectId.isValid(req.params.id)
    if (req.params.id === ":id" || !validity) {
        return res.status(400).send("Enter a valid Id")
    }

    const item = await Social.findOne({ _id: req.params.id })
    if (!item) {
        return res.status(404).send("No data found")
    }
    req.item = item
    next()
}
const socialInteractionCtrl = {
    
//Follow User 
    followUser: async (req, res) => {
        let followerName;
        if (req.user.user_type == 'member') {
            const memberCheck = await Member.find({ _id: req.user.ownerId, following: req.params.astroId })
            if (memberCheck.length) {
                //console.log("Already" , memberCheck)
                return res.status(406).json({ Error: "Already Following" })
            }
            const follower = {
                userType: req.user_type,
                memberId: req.user.ownerId,
            }
            followerName = memberCheck.firstName
            const astrologerUpdate = await Astrologer.findByIdAndUpdate({ _id: req.params.astroId }, { $push: { followers: follower } })
            const memberUpdate = await Member.findByIdAndUpdate({ _id: req.user.ownerId }, { $push: { following: req.params.astroId } })
            res.json({ Success: "Followed Successfully" })
        }
        else {
            res.status(500).json({ Error: "Some error occured" })
        }
    },

    //Unfollow User
    unfollowUser: async (req, res) => {
        if (req.user.user_type == 'member') {
            const memberCheck = await Member.find({ _id: req.user.ownerId, following: req.params.astroId })
            const follower = {
                userType: req.user_type,
                memberId: req.user.ownerId,
            }
            const astrologerUpdate = await Astrologer.findByIdAndUpdate({ _id: req.params.astroId }, { $pull: { followers: follower } })
            const memberUpdate = await Member.findByIdAndUpdate({ _id: req.user.ownerId }, { $pull: { following: req.params.astroId } })
            res.json({ Success: "UnFollowed Successfully" })
        }
        else if (req.user.user_type == 'astrologer') {
            console.log('Astro')
            const astroCheck = await Astrologer.find({ _id: req.user.ownerId, following: req.params.astroId })
            const follower = {
                userType: req.user_type,
                astroId: req.user.ownerId,
            }
            const astrologerFollowerUpdate = await Astrologer.findByIdAndUpdate({ _id: req.params.astroId }, { $pull: { followers: follower } })
            const astroFollowingUpdate = await Astrologer.findByIdAndUpdate({ _id: req.user.ownerId }, { $pull: { following: req.params.astroId } })
            res.json({ Success: "UnFollowed Successfully" })
        }
        else {
            res.status(500).json({ Error: "Some error occured" })
        }
    },
    // List of follower of any Astrologer
    getFollower: async (req, res) => {
    let followerDetail = await Astrologer.findById({ _id: req.params.id }).populate('followers.memberId followers.astroId')
    res.json(followerDetail)
},
getFollowing: async (req, res) => {
    let followingDetail = await Astrologer.findById({ _id: req.params.id }).populate('following')
    if (!followingDetail) {
        followingDetail = await Member.findById({ _id: req.params.id }).populate('following')
    }
    res.json(followingDetail)
},
likepost: async (req, res) => {
    try {
        const post = await Social.find({ _id: req.params.id, likes: req.user._id });
        console.log("post",req.user._id )
        if (post.length > 0) return res.status(400).json({ msg: "You already liked this post." })

        const like = await Social.findOneAndUpdate({ _id: req.params.id }, {
            $push: { likes: req.user._id }
        }, { new: true }).populate("user",['_id likes']).populate('user')

        if (!like) return res.status(400).json({ msg: 'This post does not exist.' })
        // if(JSON.stringify(like.user._id) !== JSON.stringify(req.user._id) ){
        // sendFireBaseNOtificationFCM([like.user?.fcmToken],'Post liked', req.user.fullname+' like your post',like.user, req.user)
        // }
        
        res.json({status:true, msg: 'Liked Post!' })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
},
unlike: async (req, res) => {
    try {
  var ObjectId = require('mongoose').Types.ObjectId
        const validity = ObjectId.isValid(req.params.id)
        if (req.params.id === ":id" || !validity) {
            return res.status(400).send("Enter a valid Id")
        }
            const like = await Social.findOneAndUpdate({ _id: req.params.id }, {
                $pull: { likes: req.user._id }
            }, { new: true })

            if (!like) return res.status(400).json({ msg: 'This post does not exist.' })

            res.json({ msg: 'UnLiked Post!' })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
},
showlikes: async (req, res) => {
    try {
        //added in checkId middleware

        var ObjectId = require('mongoose').Types.ObjectId
        const validity = ObjectId.isValid(req.params.id)
        if (req.params.id === ":id" || !validity) {
            return res.status(400).send("Enter a valid Id")
        }
        const item = await Social.findOne({ _id: req.params.id },{likes:1}).populate('likes','_id fullname avatar')
        if (!item) {
            return res.status(404).send("No data found")
        }
      
        res.send(item)
    } catch (e) {
        res.status(500).send(e.message)

    }
},

    addcomment: async (req, res) => {
    // try {
        const user = req.user
       
        const reply = req.body.parent_id
        if (reply) {
            var ObjectId = require('mongoose').Types.ObjectId
            const validity = ObjectId.isValid(reply)
            if (!validity) {
                return res.status(400).send("Enter a valid Id")
            }

            const exists = await Comments.findById({ _id: reply })
            if (!exists) {
                return res.status(404).send("Comment doesn't exist to reply")
            }
        }


        //notification
        const post = await Social.findById({ _id: req.params.id })
        const userId = post ? post.user_id : null
       
        if (userId) {
           
            // const userFtoken = await UserDetail.findOne({ ownerId: userId })
           
            // if(userFtoken && userFtoken){
            //     var commentorName 
            //     if (req.user.user_type === "astrologer") {const Owneruser = await Astrologer.findOne({phone:userFtoken.phone});
            // commentorName = Owneruser.name  }
            //     else if (req.user.user_type === "member") {
            //         const Owneruser = await Member.findOne({phone:req.user.phone});  
            //        console.log(userFtoken)
            //          commentorName = Owneruser.firstName}
            //     const message = {
            //         "title": "New Comment by "+commentorName,
            //         "body": `${commentorName} recently added a comment on ${post.created_by_name}.
            //         check out here : https://jyotishee.com/post/${post._id}`
            //     }
            //     const token = [`${userFtoken.firebaseToken}`]
            //     sendFireBaseNOtificationFCM(token, message)
            // }
        }


        let comment
  
            comment = {
                comment: req.body.comment,
                user: req.user._id,
                user_type: 'user',
                resource_id: req.params.id,
                resource_type: 'post',
                parent_id: reply ? reply : null
            }
            // console.log(add)
        const add = new Comments(comment)
      
        await add.save()
        // console.log(req.item)
        // req.item.comments += 1
        // await req.item.save()
        res.send( await Comments.find({}).populate("user",'avatar live fullname profileTitle')
        .populate("parent_id",'avatar live fullname profileTitle'))
    // } catch (e) {
    //     console.log(e)
    //     res.status(500).send(e.message)
    // }
},
deletecomment: async (req, res) => {
    try {

        var ObjectId = require('mongoose').Types.ObjectId
        const validity = ObjectId.isValid(req.params.commentId)
        if (req.params.id === ":commentId" || !validity) {
            return res.status(400).send("Enter a valid Id")
        }

        const comment = await Comments.findOne({ _id: req.params.commentId })
        if (!comment) {
            return res.status(404).send("Comment not found")
        }
        await Comments.findOneAndDelete({ _id: req.params.commentId })
        req.item.comments = req.item.comments - 1
        await req.item.save()
        res.send(req.item)
    } catch (e) {
        res.status(500).send(e)
    }
},
showcomments: async (req, res) => {
    try {

        const comments = await Comments.find({
            resource_id: req.params.id
        })
            .populate("user",'avatar live fullname profileTitle')
            .populate("parent_id",'avatar live fullname profileTitle');
        res.send(comments)
    } catch (e) {
        res.status(500).send(e.message)
    }
},
editcomment: async (req, res) => {
    try {

        var ObjectId = require('mongoose').Types.ObjectId
        const validity = ObjectId.isValid(req.params.commentId)
        if (req.params.id === ":commentId" || !validity) {
            return res.status(400).send("Enter a valid Id")
        }

        const exists = await Comments.findOne({ _id: req.params.commentId })
        if (!exists) {
            return res.status(404).send("Comment not found")
        }

        if (req.body.comment === "" || req.body.comment === " ") {
            await Comments.findOneAndDelete({ _id: req.params.commentId })
            req.item.comments = req.item.comments - 1
            await req.item.save()
            return res.send("Comment delete as it is updated to an empty comment")
        }

        exists.comment = req.body.comment ? req.body.comment : exists.comment
        await exists.save()

        res.send(exists)
    } catch (e) {
        res.status(500).send(e)
    }
}
}

module.exports = socialInteractionCtrl


