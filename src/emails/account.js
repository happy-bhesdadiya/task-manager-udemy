const sgMail = require('@sendgrid/mail');
// const sendgridAPIKey = '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'

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

// const msg = {
//     to: 'happy.bhesdadiya@bacancy.com',
//     from: 'happypatel95370@gmail.com',
//     subject: 'This is my first Creation',
//     text: 'This is demo text that i have created!'
// }
// sgMail.send(msg).then(() => {
//     console.log('Message sent')
// }).catch((error) => {
//     console.log(error.response.body)
// })

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'happypatel95370@gmail.com',
        subject: 'Thanks for joining us!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}
const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'happypatel95370@gmail.com',
        subject: 'Sorry to see you',
        text: `Goodbye, ${name}. I hope to see you back sometime soon`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}

