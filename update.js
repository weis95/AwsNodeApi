var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIAXDDP2TPMQ4YLGYG3", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let modify = function () {

    
    var params = {
        TableName: "testTable",
        Key: { "id_test": "example-1@gmail.com" },
        UpdateExpression: "set updated_by = :byUser, is_deleted = :boolValue",
        ExpressionAttributeValues: {
            ":byUser": "updateUser",
            ":boolValue": true
        },
        ReturnValues: "UPDATED_NEW"

    };
    docClient.update(params, function (err, data) {

        if (err) {
            console.log("testTable::update::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("testTable::update::success "+JSON.stringify(data) );
        }
    });
}

modify();
        