const express = require('express');
const { ObjectId } = require('bson');
const SSLCommerzPayment = require('sslcommerz-lts');
const { paymentCollection } = require('../collections/collection');
const store_id = 'hirew6501a99532e47'
const store_passwd = 'hirew6501a99532e47@ssl'
const is_live = false
const tran_id = new ObjectId().toString();
const paymentRoute = express.Router();


paymentRoute.post('/', async (req, res) => {
    try {
        const payment = req.body;
        console.log(payment)
        const data = {
            total_amount: payment.amount,
            currency: 'USD',
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: (`http://localhost:3030/api/payment/success/${tran_id}`),
            fail_url: 'http://localhost:3030/api/payment/fail',
            cancel_url: 'http://localhost:3030/api/payment/fail',
            ipn_url: 'http://localhost:3030/ipn',
            shipping_method: 'Courier',
            product_name: 'Computer.',
            product_category: 'Electronic',
            product_profile: 'general',
            cus_name: 'Customer Name',
            cus_email: 'customer@example.com',
            cus_add1: 'Dhaka',
            cus_add2: 'Dhaka',
            cus_city: 'Dhaka',
            cus_state: 'Dhaka',
            cus_postcode: '1000',
            cus_country: 'Bangladesh',
            cus_phone: '01711111111',
            cus_fax: '01711111111',
            ship_name: 'Customer Name',
            ship_add1: 'Dhaka',
            ship_add2: 'Dhaka',
            ship_city: 'Dhaka',
            ship_state: 'Dhaka',
            ship_postcode: 1000,
            ship_country: 'Bangladesh',
        };
        // console.log(data)
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        // console.log(sslcz)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            // console.log(apiResponse)
            let GatewayPageURL = apiResponse.GatewayPageURL
            res.send({ url: GatewayPageURL })
            console.log('Redirecting to: ', GatewayPageURL)
        });
        paymentRoute.post('/success/:tran_id', async (req, res) => {
            // set payment id in mongodb
            console.log('tran', req.params.tran_id)
            const paymentHistory = {
                recruiterId: payment.recruiterId,
                receiver: payment.receiver,
                amount: payment.amount,
                paymentTimeline: payment.paymentTimeline,
                recruiterName: payment.recruiterName,
                companyLogo: payment.companyLogo,
                tran_id: tran_id
            }

            console.log(paymentHistory)
            // insert payment history 
            const storePaymentHistory = await paymentCollection(paymentHistory).save();
            console.log(storePaymentHistory)

            // res.send({updateResult,})
            res.redirect(`http://localhost:5173/dashboard/payment/successful/${tran_id}`)
        })
        paymentRoute.post('/fail', async (req, res) => {
            res.redirect('http://localhost:5173/dashboard/payment/fail')
        })
    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

paymentRoute.get('/history', async (req, res) => {
    try {
        res.status(200).send(await paymentCollection.find().sort({ purchaseDate: -1 }))
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

paymentRoute.get('/history/:recruiterName', async (req, res) => {
    try {
        const payment = await paymentCollection.find({ recruiterName: req.params.recruiterName }).sort({ purchaseDate: -1 })
        res.status(200).send(payment)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})




module.exports = paymentRoute