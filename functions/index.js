const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors')
const dotenv = require('dotenv');
dotenv.config();

const stripe = require("stripe")
(process.env.SECRET_KEY)

const app = express();

app.use(cors({origin: true}));
app.use(express.json());

app.get('/', (request, response) => response.status(200).send('Hello World'))

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;
    console.log("Payment Amount Received is ---> ", total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "CAD",
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    })
})

exports.api = functions.https.onRequest(app)
//http://localhost:5001/replica-1b54d/us-central1/api