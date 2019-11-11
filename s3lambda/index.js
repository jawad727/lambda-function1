
'use strict';
const AWS = require('aws-sdk');
const s3 = new AWS.S3()
const documentClient = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {
    // TODO implement
    const response = {
        statusCode: 200,
        body: JSON.stringify('Hello from Lambda!'),
    };
    return response;
};
