const axios = require("axios");
const User = require('../database/models/User');

module.exports = {
    getHomePage: (req, res) => {
        res.send({ express: "Hello from server" });
    },
    postNewProfile: (req, res) => {
        let newProfile = req.body;
        Profile.create({ name: newProfile.name, email: newProfile.email, password = newProfile.password })
            .then(results => {
                res.send(results.dataValues) //sending to client
            })
            .catch(error => console.error(`Could not save user ${error.stack}`))
    },
    postNewOrder: (req, res) => {
        let newOrder = req.body;
        Order.create({ nameClient: newOrder.nameClient, nameSo: newOrder.nameSo, service: newOrder.service, contactSo: newOrder.contactSo, situation: newOrder.situation, message: newOrder.message, orderExecuted: newOrder.orderExecuted })
            .then(results => {
                res.send(results.dataValues) //sending to client
            })
            .catch(error => console.error(`Could not save user ${error.stack}`))

    }
}