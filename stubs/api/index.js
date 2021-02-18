const router = require("express").Router();

const TWO_SECONDS = 2000;

const wait = (time = TWO_SECONDS) => (req, res, next) =>
    setTimeout(next, time);

const items = [

]

router.post('/addProduct',  (req, res) => {
    const data = req.body.product;
    items.push(data);
    res.send({items});
});

router.get('/getProducts',  (req, res) => {
    res.send({items});
});

module.exports = router;
