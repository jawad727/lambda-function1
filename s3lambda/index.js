const AWS = require('aws-sdk');
const s3 = new AWS.S3()
const moment = require("moment")
const fileType = require("file-type")

exports.handler = async (event, context) => {
    let request = event.body;
    let base64String = request.base64String
    let buffer = new Buffer(base64String, "base64")
    let fileMime = fileType(buffer)
    let file = getFile(fileMime, buffer)
    let params = file.params

    s3.putObject(params, function(err, data) {
        if (err) {
            return console.log(err)
        }

        return console.log("File URL", file.full_path)
    })

};
