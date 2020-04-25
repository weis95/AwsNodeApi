var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": "AKIAXDDP2TPMQ4YLGYG3", "secretAccessKey": "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"
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let remove = function () {

    var params = {
        TableName: "testTable",
        Key: {
            "id_test": "example@gmail.com"
        }
    };
    docClient.delete(params, function (err, data) {

        if (err) {
            console.log("testTable::delete::error - " + JSON.stringify(err, null, 2));
        } else {
            console.log("testTable::delete::success");
        }
    });
}

remove();