var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": AWS_ACCESS_KEY_ID, "secretAccessKey": AWS_SECRET_ACCESS_KEY
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