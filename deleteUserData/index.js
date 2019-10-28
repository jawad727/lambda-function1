'use strict';
const AWS = require('aws-sdk');

AWS.config.update({region: "us-west-2"});

exports.handler = async (event, context) => {
    const ddb = new AWS.DynamoDB();
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-2" })

    const params = {
        TableName: "Users",
        Key: {
            user_id: "d16fg5"
        }
    };

    try {
         const data = await documentClient.delete(params).promise()
         console.log(data)
    } catch(err) {
        console.log(err)
    }
};
