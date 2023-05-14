
async function BookingController (req, res) {

    require('dotenv').config()
    const stripe = require('stripe')(process.env.STRIPE_SECRET_TEST)

    let {amount, id} = req.body
    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: 'USD',
            description: 'Canoe Rental',
            payment_method: id,
            confirm: true
        })
        console.log('Payment', payment)
        res.json({
            message: 'Payment successful',
            success: true
        })
    } catch (error) {
        console.log('Error', error)
        res.json({
            message: 'Payment failed',
            success: false
        })
    }
}

module.exports = {BookingController}