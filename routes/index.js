const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('main');
});

router.get('/plans', (req, res) => {
    res.render('plans');
})

router.get('/profile', (req, res) => {
    res.render('profile');
})

router.get('/schwag', (req, res) => {
    res.render('schwag');
})

router.get('/signup', (req, res) => {
    res.render('signup');
})

router.get('/catch_up', (req, res) => {
    res.render('catch_up');
})

router.get('/login', (req, res) => {
    res.render('login');
})

router.post('/login-sub', (req, res) => {
    res.render('main');
})

router.post('/signup-sub', (req, res) => {
    res.render('main');
})

module.exports = router;