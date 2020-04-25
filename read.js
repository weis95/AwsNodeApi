var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": AWS_ACCESS_KEY_ID, "secretAccessKey": AWS_SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();
let fetchOneByKey = function () {
    var params = {
        TableName: "testTable",
        Key: {
            "id_test": "example@gmail.com"
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.log(JSON.stringify(err, null, 2));
        }
        else {
            console.log(JSON.stringify(data, null, 2));
        }
    })
}


fetchOneByKey();
        