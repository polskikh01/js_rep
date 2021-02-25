const router = require("express").Router();

const TWO_SECONDS = 2000;

const wait = (time = TWO_SECONDS) => (req, res, next) =>
    setTimeout(next, time);

const basket = []

router.post('/addProduct', (req, res) => {
    const data = req.body.product;
    basket.push(data);
    res.send({basket});
});

router.get('/getProducts', (req, res) => {
    res.send(require('./mocks/product/success.json'));
});

router.get('/getAccessories', (req, res) => {
    res.send(require('./mocks/accessories/success.json'));
});

router.get('/getComplete', (req, res) => {
    res.send(require('./mocks/complete/success.json'));
})

router.get('/getBasket', (req, res) => {
    res.send({basket});
});

module.exports = router;