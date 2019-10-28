'use strict';
const AWS = require('aws-sdk');

AWS.config.update({region: "us-west-2"});

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-2" })
    let responseBody = "";
    let statusCode = 0
    const { user_id } = JSON.parse(event.body)

    const params = {
        TableName: "Users",
        Key: {
            user_id: user_id
        }
    };

    try {
         const data = await documentClient.get(params).promise()
         responseBody = JSON.stringify(data);
         statusCode = 201;
    } catch(err) {
        responseBody = `Unable to get product: ${err}`
        statusCode = 403
    }

    const response = {
        statusCode: statusCode,
        headers: {
            "Content-Type": "application/json"
          },
        body: responseBody
    }

    return response

};

