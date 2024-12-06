const router = require('express').Router()
const UserDetail = require('../models/userModel')
const Social = require('../models/Social/posts')
const Category = require('../models/Social/category')
const Type = require('../models/Social/type')
const auth = require('../middleware/auth')
const axios = require('axios')
const jwt = require('jsonwebtoken')
const { sendFireBaseNOtificationFCM } = require('../fcmNotification')
const interactionCtrl = require('../controllers/postCtrl')
// const { uploadFile } = require("../s3")
const multer = require('multer')
// var mime = require('mime-types')

// const AWS_folder = "social/blog/"

const Storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  });

var upload = multer({ storage: Storage })




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





//1. USER ROUTES(FRONT)

//1.1. add post
router.post('/addPost', auth, upload.single("image"),  interactionCtrl.addPost);

//1.2. Get all  posts
router.get('/getPost', interactionCtrl.getPost)
router.get("/get-post-by-id/:id",auth,interactionCtrl.get_post_byId)




//1.2. Update any blog / post / horoscope
router.patch('/updatePost/:id', auth, upload.single("image"),  interactionCtrl.updatePost);


//3.5. delete any blog / post / horoscope
router.delete('/deleteSocial/:type/:id', auth, async (req, res) => {

    var ObjectId = require('mongoose').Types.ObjectId

    const validity = ObjectId.isValid(req.params.id)
    if (req.params.id === ":id" || !validity) {
        return res.status(400).send("Enter a valid Id")
    }

    const data = await Social.findOne({ $and: [{ _id: req.params.id }, { type: req.params.type }, { status: 1 }] })
    if (!data) {
        return res.status(404).send("No data found")
    }
    // console.log("created", data.created_by)
    // console.log("deleted", req.user.ownerId)

    if (data.created_by.toString() !== req.user.ownerId.toString()) {
        return res.status(400).send("Only allowed to delete your posts/blogs")
    }

    console.log(new Date())
    data.status = 0
    data.deleted_at = new Date()
    data.deleted_by_role = "Astrologer"
    data.deleted_by = req.user.ownerId
    await data.save()
    res.send(data)
})

//3.6. Filter post / blog / horoscope according to category
router.get('/social/filter', async (req, res) => {

    if (req.query.category && req.query.type.length > 0) {
        
       
            const query = Social.find({ $and: [{ category_name: req.query.category }, { type: req.query.type }, { status: 1 }] });

            const total_documents = await Social.find({ $and: [{ category_name: req.query.category }, { type: req.query.type }, { status: 1 }] }).countDocuments();
        
            const data = await pagination(query, total_documents, req.query);
            return res.json(data)
        
       
    }

    const query = Social.find({ $and: [{ category_name: req.query.category }, { status: 1 }] });

    const total_documents = await Social.find({ $and: [{ category_name: req.query.category }, { status: 1 }] }).countDocuments();

    const data = await pagination(query, total_documents, req.query);
    return res.json(data)


    if (products.length === 0) {
        return res.status(404).send("No data found")
    }
    res.send(products)
})



module.exports = router