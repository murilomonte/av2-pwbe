const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
    res.render('pages/home',
        {
            title: 'Home',
        }
    );
});

module.exports = router