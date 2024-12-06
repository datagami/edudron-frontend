const Comments = require('../models/commentModel')
const Posts = require('../models/postModel')
const { sendFireBaseNOtificationFCM } = require('../fcmNotification');






const commentCtrl = {
    createComment: async (req, res) => {
        try {
            const { postId, content, tag, reply, postUserId } = req.body

            const post = await Posts.findById(postId).populate('user')
            if(!post) return res.status(400).json({msg: "This post does not exist."})

            if(reply){
                const cm = await Comments.findById(reply)
                if(!cm) return res.status(400).json({msg: "This comment does not exist."})
            }

            const newComment = new Comments({
                user: req.user._id, content, tag, reply, postUserId, postId
            })

            await Posts.findOneAndUpdate({_id: postId}, {
                $push: {comments: newComment._id}
            }, {new: true})

            await newComment.save()
            if(JSON.stringify(post.user._id) !== JSON.stringify(req.user._id)  ){
                sendFireBaseNOtificationFCM([post.user?.fcmToken],'Comment added on post', req.user.fullname+' comment on your post',post.user, req.user)
                }
            res.json({newComment})

        } catch (err) {
            console.log(err.message)
            return res.status(500).json({msg: err.message})
        }
    },
    getComment: async (req, res) => {
        try {
            const comment = await Comments.find({postId:req.params.id , reply:{"$exists":false}}).populate('user')
            res.json(comment)
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getReply: async (req, res) => {
        try {
            const commentReply = await Comments.find({reply:req.params.id }).populate('user')
            res.json(commentReply)
            
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    updateComment: async (req, res) => {
        try {
            const { content } = req.body
            
            await Comments.findOneAndUpdate({
                _id: req.params.id, user: req.user._id
            }, {content})

            res.json({msg: 'Update Success!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    likeComment: async (req, res) => {
        try {
            const comment = await Comments.find({_id: req.params.id, likes: req.user._id})
            if(comment.length > 0) return res.status(400).json({msg: "You liked this post."})

            const commentdata = await Comments.findOneAndUpdate({_id: req.params.id}, {
                $push: {likes: req.user._id}
            }, {new: true}).populate('user')
          
            // console.log(JSON.stringify(commentdata.user._id) !== JSON.stringify(req.user._id))
            if(JSON.stringify(commentdata.user._id) !== JSON.stringify(req.user._id)  ){
                sendFireBaseNOtificationFCM([commentdata.user?.fcmToken],'one like on your comment', req.user.fullname+' like your comment',commentdata.user, req.user)
                }
            res.json({msg: 'Liked Comment!'})

        } catch (err) {
            console.log(err.message);
            return res.status(500).json({msg: err.message})
        }
    },
    unLikeComment: async (req, res) => {
        try {

            await Comments.findOneAndUpdate({_id: req.params.id}, {
                $pull: {likes: req.user._id}
            }, {new: true})

            res.json({msg: 'UnLiked Comment!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    deleteComment: async (req, res) => {
        try {
            const comment = await Comments.findOneAndDelete({
                _id: req.params.id,
                $or: [
                    {user: req.user._id},
                    {postUserId: req.user._id}
                ]
            })

            await Posts.findOneAndUpdate({_id: comment.postId}, {
                $pull: {comments: req.params.id}
            })

            res.json({msg: 'Deleted Comment!'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

function trim(str) {
      
    // Use trim() function
    var trimContent = str.trim();
      
    console.log(trimContent);
}
module.exports = commentCtrl