const express = require('express');
const bodyParser = require('body-parser');

const promoRouter = express.Router();

promoRouter.use(bodyParser.json());

promoRouter.route('/')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req, res, next) => {
    res.end('Will send all promotions to you!')
})
.post((req, res, next) => {
    res.end('Will add the promotion ' + req.body.name + ' with description ' + req.body.description);
})
.put((req, res, next) => {
    res.statusCode = 403;
    res.end('Put operation not supported on /promotions');
})
.delete((req, res, next) => {
    res.end('Will delete all the promotions');
});

promoRouter.route('/:promoId')
.all((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain')
    next();
})
.get((req, res, next) => {
    res.end("Will send the promotion with id " + req.params.promoId);
})
.post((req, res, next) => {
    res.statusCode = 403;
    res.end("Post operation not supported on /promoId");
})
.put((req, res, next) => {
    res.write("Updating the promotion with id " + req.params.promoId +"\n");
    res.end("Will update the promotion " + req.body.name + " with details :" + req.body.description);
})
.delete((req, res, next) => {
    res.end("Deleting the promo with id " + req.params.promoId);
});

module.exports = promoRouter;