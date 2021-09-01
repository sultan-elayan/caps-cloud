  
'use strict';

const AWS = require('aws-sdk');
AWS.config.update({region: 'us-east-1'});
// connect to SNS 
const sns = new AWS.SNS();

// define channel
const queueArn = 'arn:aws:sns:us-east-1:647401062284:driver';
const msg ={ orderId: 1234, customer: "Jane Doe", vendorId: queueArn , message: "Delivered Successfully" }

const params = {
    TopicArn: queueArn,
    Message: JSON.stringify(msg)
}

sns.publish(params).promise().then(data=> {
    console.log(data)
}).catch(err=> {
    console.log(err)
});