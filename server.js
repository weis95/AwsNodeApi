var http = require('http');
const express = require('express');
const app = new express();
var AWS = require("aws-sdk");
let awsConfig = {
    "region": "us-east-2",
    "endpoint": "http://dynamodb.us-east-2.amazonaws.com",
    "accessKeyId": AWS_ACCESS_KEY_ID, "secretAccessKey": AWS_SECRET_ACCESS_KEY
};
AWS.config.update(awsConfig);
let docClient = new AWS.DynamoDB.DocumentClient();

app.get("/read/:id_test", async (req, res) => {
    let fetchOneByKey = function () {
        var params = {
            TableName: "testTable",
            Key: {
                "id_test": req.params.id_test
            }
        };
        docClient.get(params, function (err, data) {
            if (err) {
                console.log(JSON.stringify(err, null, 2));
            }
            else {
                res.setHeader('Content-Type', 'application/json');
                res.end(JSON.stringify(data, null, 3));
            }
        })
    }
    
    fetchOneByKey();
});

app.get("/write/:id_test", async (req, res) => {
    let save = function () {

        var input = {
            "id_test": req.params.id_test
        };
        var params = {
            TableName: "testTable",
            Item:  input
        };
        docClient.put(params, function (err, data) {
    
            if (err) {
                console.log("testTable::save::error - " + JSON.stringify(err, null, 2));                      
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.end("testTable::save::success");                      
            }
        });
    }
    
    save();
});

app.get("/update/:id_test/:name", async (req, res) => {
    let modify = function () {

    
        var params = {
            TableName: "testTable",
            Key: { "id_test": req.params.id_test },
            UpdateExpression: "set phone = :phone",
            ExpressionAttributeValues: {
                ":phone": req.params.name
            },
            ReturnValues: "UPDATED_NEW"
    
        };
        docClient.update(params, function (err, data) {
    
            if (err) {
                console.log("testTable::update::error - " + JSON.stringify(err, null, 2));
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.end("testTable::update::success");
            }
        });
    }
    
    modify();
});

app.get("/remove/:id_test", async (req, res) => {
    let remove = function () {

        var params = {
            TableName: "testTable",
            Key: {
                "id_test": req.params.id_test
            }
        };
        docClient.delete(params, function (err, data) {
    
            if (err) {
                console.log("testTable::delete::error - " + JSON.stringify(err, null, 2));
            } else {
                res.setHeader('Content-Type', 'application/json');
                res.end("testTable::delete::success");
            }
        });
    }
    
    remove();
});

app.listen(3000);

