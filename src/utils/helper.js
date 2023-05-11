const generateOTP = () => {
    var otp_length = 6;
    var digits = "0123456789";
    let OTP = "";
    for (let i = 0; i < otp_length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
};

const generateCode = (value) => {
    var otp_length = 4;
    var digits = "0123456789";
    let OTP = "USER_";
    for (let i = 0; i < otp_length; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
};

module.exports = { generateOTP, generateCode };