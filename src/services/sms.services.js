const accountSid = 'AC315bfd269c414ad875805228d94c10d0';
const authToken = 'e797342262e162bb7556a84bad1cd205';

const sendSms = async (otp, number) => {
    try {
        const client = require('twilio')(accountSid, authToken);
        client.messages
            .create({
                body: `OTP is  ${otp} for Foodoz login`,
                from: '+15403861071',
                to: `+91${number}`
            }, function (error, data) {
                if (error) {
                    console.log('error.message', error)
                    console.log("data", data)
                }
            })
    } catch (error) {
        console.log("error", error.message)
    }
}

module.exports = { sendSms };