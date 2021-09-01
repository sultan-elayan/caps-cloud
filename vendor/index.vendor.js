'use strict';

const AWS = require('aws-sdk');
const {Consumer} = require('sqs-consumer');
console.log("inside index!!!")
AWS.config.update({region: 'us-east-1'});

// connect to SQS 
const sqs = new AWS.SQS();

const app = Consumer.create({
    queueUrl: 'https://sqs.us-east-1.amazonaws.com/647401062284/vendor',
    handleMessage: async(msg)=> {
        console.log("msg :", msg.Body)
        console.log(typeof msg.Body)
        let parsedBody = await JSON.parse(msg.Body); // msg.Body is text
        const myMsg = await JSON.parse(parsedBody.Message);
        console.log("myMsg -----------> ", myMsg)
       
    }
});

// =====================================
app.on('error', err=> {
    console.error(err)
});

app.on('processing_error', (err) => {
    console.error(err.message);
});

app.start();







