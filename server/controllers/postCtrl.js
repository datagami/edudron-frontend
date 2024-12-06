const Posts = require('../models/postModel')
const Comments = require('../models/commentModel')
const Users = require('../models/userModel')
const Social = require('../models/Social/posts')
const { sendFireBaseNOtificationFCM } = require('../fcmNotification');


const { uploadFile, updateFile } = require("../s3")
const multer = require('multer')
var mime = require('mime-types')

const AWS_folder = "social/blog/"


let uploadResult

//Function for pagination - parameters ("Database name","query in database" , "req.query like '.page''.limit' ")
async function pagination(DBQuery, total_documents, req) {
    let { page, limit } = req
    if (!page) page = 1;
    if (!limit) limit = 10;
    const size = parseInt(limit)
    const skip = (page - 1) * size
    const previous_pages = page - 1;

    // const total_documents = await DB.countDocuments().exec();
    const next_pages = Math.ceil((total_documents - skip) / size);

    const results = {}
    results.page = page;
    results.size = size;

    results.previous = previous_pages;
    results.next = next_pages;
    results.totalRecord = total_documents;
    try {
        results.results = await DBQuery.limit(size).skip(skip);
        return results;

    } catch (e) {
        console.log(e)
        return e
    }


}

const postCtrl = {
    addPost: async (req, res) => {
        try {
            
    if (!req.body.description) {
        return res.status(422).send({
             msg: 'Post description is required',
             status: false,
             data: []
           });
     }
     if (!req.body.posting_us) {
        return res.status(422).send({
             msg: 'Select account which you want to use for post',
             status: false,
             data: []
           });
     }
     if (!req.body.share_to) {
        return res.status(422).send({
             msg: 'Select where you want to share',
             status: false,
             data: []
           });
     }
     if (req.body.share_to == "group") {
         if (!req.body.group_id) {
            return res.status(422).send({
                   msg: 'If you want to share on group then please select group',
                   status: false,
                   data: []
                 });
           }
     }



     let uploadResult
     if (req.file) {
         console.log(req.file.filename,'filename')
         uploadResult = await uploadFile(req.file, AWS_folder)
         console.log("img", uploadResult)
     }

     const newData = {
         user_id: req.user._id,
         media_url: req.file ? uploadResult.Location : null,
         posting_us: req.body.posting_us ? req.body.posting_us : null,
         post_us_id: req.body.post_us_id ? req.body.post_us_id : null,
         share_to: req.body.share_to ? req.body.share_to : null,
         group_id: req.body.group_id ? req.body.group_id : null,
         can_comment: req.body.can_comment ? req.body.can_comment : null,
         description: req.body.description ? req.body.description : null
     }

     const blog = new Social(newData)
     await blog.save();
     console.log(newData)
     return res.status(200).send({
         msg: 'Your post Added successfully',
         status: true,
         data: blog
       });
    } catch (error) {
        return  res.status(500).send({
            msg: error.message,
            status: false,
            data: []
          });
        }
    },
    getPost: async (req, res) => {
        try { 
            if (req.query.filter == "self") {
                const query = Social.find({ $and: [{ type: req.params.type }, { status: 1 }, { created_by: req.user.ownerId }] }).populate('created_by');
        
                const total_documents = await Social.find({ $and: [{ type: req.params.type }, { status: 1 }, { created_by: req.user.ownerId }] }).countDocuments();
            
                const data = await pagination(query, total_documents, req.query);
                return res.json(data);
            }
            if (req.query.filter == 'likes') {
        
                const query = Social.find({
                    $and: [{ type: req.params.type },
                    { status: 1 }]
                }).sort({ 'likes': -1 }).populate('created_by');
        
                const total_documents = await Social.find({
                    $and: [{ type: req.params.type },
                    { status: 1 }]
                }).countDocuments();
            
                const data = await pagination(query, total_documents, req.query);
                return res.json(data);
            }
            if (req.query.filter == 'latest') {
                const query = Social.find({
                    $and: [{ type: req.params.type },
                    { status: 1 }]
                }).sort({ 'createdAt': -1 }).populate('created_by');
        
                const total_documents = await Social.find({
                    $and: [{ type: req.params.type },
                    { status: 1 }]
                }).countDocuments();
            
                const data = await pagination(query, total_documents, req.query);
                return res.json(data);
            }
        // console.log(req.user);
                const query = Social.find({ $and: [{ deleted_at: null }]}).populate('user_id','avatar live profileTitle fullname').populate({ path: 'isLike' });
        
                const total_documents = await Social.find({ $and: [{ deleted_at: null }] }).countDocuments();
            
                const data = await pagination(query, total_documents, req.query);
                return res.json(data);
        } catch (error) {
            res.status(500).send({
                msg: error.message,
                status: false,
                data: []
              });
            }
    },
    get_post_byId:async(req,res)=>{
        try {
            const result=await Social.findOne({_id:req.params.id});
        res.json({result})
        } catch (error) {
            console.log(error)
            res.status(500).json({msg:error.message})
        }
    },
    updatePost: async (req, res) => {
// try{
    if (!req.body.description) {
        return res.status(422).send({
             msg: 'Post description is required',
             status: false,
             data: []
           });
     }
     if (!req.body.posting_us) {
        return res.status(422).send({
             msg: 'Select account which you want to use for post',
             status: false,
             data: []
           });
     }
     if (!req.body.share_to) {
        return res.status(422).send({
             msg: 'Select where you want to share',
             status: false,
             data: []
           });
     }
     if (req.body.share_to == "group") {
         if (!req.body.group_id) {
            return res.status(422).send({
                   msg: 'If you want to share on group then please select group',
                   status: false,
                   data: []
                 });
           }
     }



    const data = await Social.findOne({ $and: [{ _id: req.params.id }, { deleted_at: null  }] })
    if (!data) {
        return res.status(422).send({
            msg: 'No data found',
            status: false,
            data: []
          });
    }


    if (data.post_us_id.toString() !== req.body.post_us_id.toString()) {
        return res.status(422).send({
            msg: 'Only allowed to update your posts',
            status: false,
            data: []
          });
    }
    // console.log("data", data.post_us_id)
    if (req.file) {
         console.log(req.file.filename,'filename')
        uploadResult = await updateFile(req.file, AWS_folder,data.media_url)

    }
   

    const changed = await Social.findOneAndUpdate({ _id: req.params.id }, {
        media_url: req.file ? uploadResult.Location : data.media_url,
         posting_us: req.body.posting_us ? req.body.posting_us : data.posting_us,
         post_us_id: req.body.post_us_id ? req.body.post_us_id : data.post_us_id,
         share_to: req.body.share_to ? req.body.share_to : data.share_to,
         group_id: req.body.group_id ? req.body.group_id : data.group_id,
         can_comment: req.body.can_comment ? req.body.can_comment : data.can_comment,
         description: req.body.description ? req.body.description : data.description
    })

    return res.status(200).send({
        msg: 'Your Post Added Successfully',
        status: true,
        data: changed
      });
// }
// catch (error) {
//     res.status(500).send({
//         msg: error.message,
//         status: false,
//         data: []
//       });
//     }
    },
    updatePost1: async (req, res) => {
        try{
        
        }
        catch (error) {
            res.status(500).send({
                msg: error.message,
                status: false,
                data: []
              });
            }
            },
}

module.exports = postCtrl