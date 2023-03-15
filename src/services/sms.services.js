const accountSid = 'AC315bfd269c414ad875805228d94c10d0';
const authToken = 'e797342262e162bb7556a84bad1cd205';

const sendSms = async (otp) => {
    const client = require('twilio')(accountSid, authToken);
    client.messages
    .create({
        body: `Your OTP is ${otp}`,
        from: '+15403861071',
        to: '+919594835894'
    })
    .then(message => console.log(message.sid));
}

module.exports = { sendSms };