const router = require('express').Router();

router.post('/test', (req, res, next) => {
    res.status(200).send(req.body);
});

const controller = require("../controllers/exemplo-controller");

router.get("/",controller.getAll);
router.get('/:id',controller.getOne);

module.exports = router