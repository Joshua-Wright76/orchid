const accountSid = "ACce69f0d066f73a016d483de1526424bf" //put these in a process.env
const authToken = "cffc38cedf350a318d4b0548800c68fc"

const tResponse = require('twilio').twiml.MessagingResponse;

const tClient = require('twilio')(accountSid, authToken);

const express = require('express');
const app = express();

// tClient.messages.create({
//     to: '+15628819534',
//     from: '+13236010524',
//     body: 'Hello Joshua! What\'s your favorite flower?'
// })

app.post('/sms', (req, res) => {
    const twiml = new tResponse;
    twiml.message('No way, that\'s my favorite too!');
    res.writeHead(200, {'Content-Type': 'text/xml'})
    res.end(twiml.toString);
})