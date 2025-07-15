const express = require('express')
const router = express.Router()
const userController = require('../controllers/user_controller')


router.get('/login', (req, res) => {
    res.render('pages/user/signin', {
        title: 'Entrar',
    })
})

router.post('/login', userController.login)

router.get('/logout', userController.logout)

router.get('/signup', (req, res) => {
    res.render('pages/user/signup', {
        title: 'Novo Usuário',
    })
})

router.post('/salvar', userController.save)

module.exports = router