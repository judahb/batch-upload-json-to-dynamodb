const AWS = require('aws-sdk');
var records = require('./records.json')
var dynamodb = new AWS.DynamoDB({apiVersion: '2012-08-10', region: 'us-east-1'});

console.log(records);

var record;

for(i=0;i<records.length;i++)
{
    record = records[i];
    addRecord(record);
}



function addRecord(input){
    var params = {
        Item: {
            "Name": {
                S: input.Name
            },
            "Description": {
                S: input.Description
            },
        },
        ReturnConsumedCapacity: "TOTAL",
        TableName: "PartnerNetwork"
    };
    dynamodb.putItem(params, function(err, data) {
        if (err) console.log(err, err.stack); // an error occurred
        else     console.log(data);           // successful response
    });
};

