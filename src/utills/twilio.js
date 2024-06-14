const accountSid = process.env.ACCOUNT_SID;
const authToken = process.env.AUTH_TOKEN;

const client = require('twilio')(accountSid, authToken);

const sendOTP = async (to, body) => {
    try {
        const message = await client.messages.create({
            body: body,
            from: '+12089968739',
            to: to
        });
        return message.sid;
    } catch (error) {
        throw error;
    }
};

module.exports = { sendOTP };
