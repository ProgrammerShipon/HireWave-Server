const { paymentCollection } = require("../collections/collection");
const express = require('express');
const paymentRoute = express.Router();
const { ObjectId } = require('bson');
const SSLCommerzPayment = require('sslcommerz-lts')
const store_id = 'hirew6501a99532e47'
const store_passwd = 'hirew6501a99532e47@ssl'
const is_live = false
const tran_id = new ObjectId().toString();

const postPaymentData = async (req, res) => {
    try {
        const payment = req.body;
        const data = {
            total_amount: 100,
            currency: 'BDT',
            tran_id: tran_id, // use unique tran_id for each api call
            success_url: (`http://localhost:3030/api/success/${tran_id}`),
            fail_url: 'http://localhost:3030/fail',
            cancel_url: 'http://localhost:3030/cancel',
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


    } catch (error) {
        res.status(500).send({ message: error.message })
    }
}


const storePaymentHistory = async (req, res) => {
    const payment=req.body
    console.log("payment data" )
}
const getPaymentHistory = async (req, res) => {
    res.send("payment data")
}

module.exports = { postPaymentData, getPaymentHistory, storePaymentHistory };
