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
        const data = {
            total_amount: payment.amount,
            currency: 'USD',
            tran_id: tran_id,
            success_url: `https://hire-wave.onrender.com/api/payment/success/${tran_id}`,
            fail_url: 'https://hire-wave.onrender.com/api/payment/fail',
            cancel_url: 'https://hire-wave.onrender.com/api/payment/fail',
            ipn_url: 'https://hire-wave.onrender.com/ipn',
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
        const sslcz = new SSLCommerzPayment(store_id, store_passwd, is_live)
        sslcz.init(data).then(apiResponse => {
            // Redirect the user to payment gateway
            let GatewayPageURL = apiResponse.GatewayPageURL
            const paymentHistory = {
                recruiterId: payment.recruiterId,
                amount: payment.amount,
                packages: payment.packages,
                paymentTimeline: payment.paymentTimeline,
                recruiterName: payment.recruiterName,
                companyLogo: payment.companyLogo,
                tran_id: tran_id,
                isPaid: false
            }
            const storePaymentHistory = paymentCollection(paymentHistory).save();
            // console.log(storePaymentHistory)
            res.send({ url: GatewayPageURL })
        });

    } catch (error) {
        res.status(500).send({ message: error.message })
    }
})

paymentRoute.post('/success/:tran_id', async (req, res) => {
    const tran_id = req.params.tran_id;
    const updatePaymentData = await paymentCollection.findOneAndUpdate(
        {
            tran_id: tran_id,
        },
        {
            $set: { isPaid: true },
        },
        { new: true }

    )
    console.log("updatePaymentData" , updatePaymentData)
    res.redirect(`http://localhost:5173/dashboard/payment/successful/${tran_id}`)
})

paymentRoute.post('/fail', async (req, res) => {
    res.redirect('http://localhost:5173/dashboard/payment/fail')
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
        const payment = await paymentCollection.find(
            {
                recruiterName: req.params.recruiterName,
                isPaid: true
            }).sort({ purchaseDate: -1 })
        console.log(payment)
        res.status(200).send(payment)
    } catch (error) {
        res.status(400).send({ message: error.message })
    }
})

module.exports = paymentRoute