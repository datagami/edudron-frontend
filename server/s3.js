const S3 = require('aws-sdk/clients/s3')
const fs = require('fs')
require('dotenv').config()
const bucketName = process.env.AWS_BUCKET_NAME
const region = process.env.AWS_BUCKET_REGION
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY
const assetUrl = process.env.AWS_ASSET_URL

const s3 = new S3({
    region,
    accessKeyId,
    secretAccessKey
})
// uploads a file to S3

function uploadFile(file, bucketFolder) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: bucketFolder + file.filename,
        ContentType: file.mimetype
    }

    return s3.upload(uploadParams).promise()
}
function updateFile(file, bucketFolder,url) {
    const fileStream = fs.createReadStream(file.path)
    if(url){
   url = url.replace(assetUrl, "");
   if(url){
    var params = {
        "Key": url,
        "Bucket": bucketName
       };
       s3.deleteObject(params, function(err, data) {
         if (err){ console.log('err', err);} // an error occurred
         else     console.log('delete',data);           // successful response
        
       });
   }
}
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: bucketFolder + file.filename,
        ContentType: file.mimetype
    }

    return s3.upload(uploadParams).promise()
}

function uploadVideo(file, bucketFolder) {
    const fileStream = fs.createReadStream(file.path)

    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: bucketFolder + file.filename,
        ContentType: "video/mp4"
    }

    return s3.upload(uploadParams).promise()
}



function deleteFile(bucket, key) {
    var params = { Bucket: `${bucket}/`, Key: key };
    console.log('Bucket name :' , params.Bucket)
    s3.deleteObject(params, function (err, data) {
        if (err) console.log(err, err.stack);  // error
        else console.log();                 // deleted
    });
}

exports.deleteFile = deleteFile
exports.uploadFile = uploadFile
exports.updateFile = updateFile
exports.uploadVideo = uploadVideo

//download a file from S3