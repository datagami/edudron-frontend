const Users = require('../models/userModel')
const Highlights = require('../models/highlightsModel')


const { uploadFile, uploadVideo } = require("../s3")

const AWS_folder = "highlights/"




const highlightCtrl = {
    addHighlight: async (req, res) => {
        try {
            const { title, storyData, coverImg } = req.body
            const highlight = await Highlights.findOneAndUpdate({ title: coverImg}, {
                $push: { storyData: storyData },
                title: title,
                user: req.user._id,
                coverImg
            },
                { new: true, upsert: true }
            )

            res.json(highlight)

        } catch (error) {
            res.json({ error })
        }
    },
    updateHighlight: async (req, res) => {
        try {
            const { title, storyData, coverImg } = req.body
            console.log(storyData) 

            //setting storyData as empty array to set it as new data without pushing with existing data
            const highlightstory = await Highlights.findByIdAndUpdate({ _id: req.params.id }, {
                storyData:[]
            },
                { new: true, upsert: true }
            )

            const highlight = await Highlights.findByIdAndUpdate({ _id: req.params.id }, {
             
                $addToSet: { storyData: storyData },
                title: title,
                user: req.user._id,
                coverImg
               
            },
                { new: true, upsert: true }
            )

            res.json(highlight)

        } catch (error) {
            res.json({ error })
        }
    },
    getHighlight: async (req, res) => {
        try {
            console.log(req.params.id)
            if(req.params.id!=':id'){
                const highlight = await Highlights.find({ user: req.params.id })
            return res.json(highlight)
            }
            else{
                const highlight = await Highlights.find({ user: req.user.id })
            return res.json(highlight)
            }
        } catch(err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    updateCover: async (req, res) => {
        try {
            const file = req.files[0]
            uploadResult = await uploadFile(file, AWS_folder)
            const image = uploadResult.Location
            await Highlights.findOneAndUpdate({ _id: req.params.id }, {
                coverImg: image
            })
            res.json({ msg: "Update Success!" })

        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    },
    deleteHighlight: async(req,res)=>{
        const Id = req.params.id
        const deleteHighlight = await Highlights.findByIdAndDelete({_id:Id})

        if(!deleteHighlight) return res.status(404).json({msg:"Highlight not found"})

        res.json({Success:"Highlight deleted successfully" ,highlight: deleteHighlight})
    }
}





module.exports = highlightCtrl