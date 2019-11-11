'use strict';
const AWS = require('aws-sdk');

AWS.config.update({region: "us-west-2"});

exports.handler = async (event, context) => {
    const documentClient = new AWS.DynamoDB.DocumentClient({ region: "us-west-2" })

    let responseBody = "";
    let statusCode = 0

    
    const { user_id, first_name, age, last_name } = event
    console.log(event)

    const params = {
        TableName: "Users",
        Item: {
            user_id: user_id,
            first_name: first_name,
            age: 999,
            last_name: last_name
        }
    };

    try {
         const data = await documentClient.put(params).promise();
         responseBody = JSON.stringify(data);
         statusCode = 201;
    } catch(err) {
        responseBody = `Unable to put product: ${err}`
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
