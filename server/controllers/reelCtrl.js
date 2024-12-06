
const Posts = require('../models/postModel')
const Comments = require('../models/commentModel')
const Users = require('../models/userModel')

class APIfeatures {
    constructor(query, queryString){
        this.query = query;
        this.queryString = queryString;
    }

    paginating(){
        const page = this.queryString.page * 1 || 1
        const limit = this.queryString.limit * 1 || 9
        const skip = (page - 1) * limit
        this.query = this.query.skip(skip).limit(limit)
        return this;
    }
}

const reelCtrl = {
    createReel:async (req,res)=>{
       try{
        const { postType , video , audio , content} = req.body
        if(postType=='reel'){
            const newPost = new Posts({
                hashTags, postType, audio, video,content, user: req.user._id 
            })
            await newPost.save()
            return res.json({
                msg: 'Created Reel!',
                newPost: {
                    ...newPost._doc,
                    user: req.user
                }
            })
        }
       }catch(error){
        return res.status(500).json({msg: error.message})
       }
    },
    getReels: async (req, res) => {
        try {
            const features =  new APIfeatures(Posts.find({
                user: [...req.user.following, req.user._id] , postType:"reel"
            }), req.query).paginating()

            const posts = await features.query.sort('-createdAt')
            .populate("user likes", "avatar username fullname followers")
            .populate({
                path: "comments",
                populate: {
                    path: "user likes",
                    select: "-password"
                }
            })

            res.json({
                msg: 'Success!',
                result: posts.length,
                posts
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUserReel: async (req, res) => {
        try {
            const features = new APIfeatures(Posts.find({user: req.params.id , postType:'reel'}), req.query)
            .paginating()
            const posts = await features.query.sort("-createdAt")

            res.json({
                posts,
                result: posts.length
            })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
   
   
}


module.exports = reelCtrl