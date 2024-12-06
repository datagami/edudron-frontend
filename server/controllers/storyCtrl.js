const storyUser = require('../models/storyUsersModel')
const Story = require('../models/storyModel')
const Users = require('../models/userModel')

const { uploadFile, uploadVideo } = require("../s3")

const AWS_folder = "story/"




 
const storyCtrl ={

    addStory: async (req,res)=>{
      try {

        const file = req.files[0]
        uploadResult = await uploadFile(file, AWS_folder)
        const image = uploadResult.Location
        // creating new story with the image name and userIc
        const newstory =new Story(
        {   
            user:req.user._id,
            images: image,
            exptime: new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
        })

        await newstory.save()

        // adding active story Users to storyUser
        const newUserStory = await storyUser.findOneAndUpdate({
            user:req.user._id
        }, 
        {
            laststory:newstory._id,
            exptime: new Date(new Date().getTime() + (24 * 60 * 60 * 1000))
        }, 
        {new: true, upsert: true}
        )

        //adding story to the Users schema
        const addUserStory = await Users.findOneAndUpdate({
            _id:req.user._id
        },
        {
            $push: {story: {
                storyId:newstory._id,
                image:image
            }}
        })
      
        res.json({newstory , newUserStory})

      } catch (err) {
        return res.status(500).json({msg: err.message})
      }

    },
    getAllStory:async (req,res)=>{
        try {
            const allUserStory = await storyUser.find({
                user: [...req.user.following, req.user._id]
            }).populate('user likes')
            
            res.send({allUserStory})
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    getUserStory:async (req,res)=>{
        try {
            const story = await Story.find({user:req.params.id}).populate('user ').populate('seen_users','_id avatar fullname username')
            if(!story) return res.json({msg:"No story found"})

            res.json(story)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
        
    },
    deleteStory: async(req,res)=>{
        try{
            const story = await Story.findOneAndDelete({_id: req.params.id, user: req.user._id})
            const updatedStory = await Story.find({user: req.user._id})
            const lastIndex = updatedStory.length -1
            if(lastIndex>= 0 ){
                const storyuser = await storyUser.findOneAndUpdate(
                    {user:req.user._id},
                    {
                        laststory:updatedStory[lastIndex]._id,
                        exptime:updatedStory[lastIndex].exptime
                    }
                )
            }
            else{
                const storyuser = await storyUser.findOneAndDelete({user:req.user._id})
            }
            res.json(updatedStory)
        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    storySeenUser: async (req,res)=>{
        try {
            const story = await Story.find({_id:req.params.id , seen_users:req.user._id})
            if(story.length > 0) return res.json({msg:'Already seen this story'})

            const seenstory = await Story.findOneAndUpdate(
                {_id:req.params.id},
                {
                    $push:{seen_users:req.user._id}
                }
            )
            if(!seenstory) return res.status(400).json({msg: 'This story does not exist.'})

            res.json({msg: 'Seen Story'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    likeStory: async(req,res)=>{
        try {
            const story = await Story.find({_id:req.params.id , likes:req.user._id})
            if(story.length > 0) return res.json({msg:'Already liked this story'})

            const likestory = await Story.findOneAndUpdate(
                {_id:req.params.id},
                {
                    $push:{likes:req.user._id}
                }
            )
            if(!likestory) return res.status(400).json({msg: 'This story does not exist.'})

            res.json({msg: 'liked Story'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
    unlikeStory: async(req,res)=>{
        try {
            const unlikestory = await Story.findOneAndUpdate(
                {_id:req.params.id},
                {
                    $pull:{likes:req.user._id}
                }
            )
            if(!unlikestory) return res.status(400).json({msg: 'This story does not exist.'})

            res.json({msg: 'Unliked Story'})

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },


}

module.exports = storyCtrl