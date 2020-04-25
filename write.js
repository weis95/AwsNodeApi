   
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": AWS_ACCESS_KEY_ID, "secretAccessKey": AWS_SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);

let docClient = new AWS.DynamoDB.DocumentClient();

let save = function () {

    var input = {
        "id_test": "example-1@gmail.com"
    };
    var params = {
        TableName: "testTable",
        Item:  input
    };
    docClient.put(params, function (err, data) {

        if (err) {
            console.log("testTable::save::error - " + JSON.stringify(err, null, 2));                      
        } else {
            console.log("testTable::save::success" );                      
        }
    });
}

save();
        