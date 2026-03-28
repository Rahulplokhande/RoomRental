const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../middleware/auth');
const Login = require('../model/Login'); // Your user model
const bcrypt = require('bcrypt');
const { isAuthenticated } = require('../middleware/auth');

// Controller functions (create them or inline code)
router.get('/profile', ensureAuthenticated, (req, res) => {
    res.render('profile', { user: req.user });
});

router.get('/mybookings', ensureAuthenticated, (req, res) => {
    res.render('mybookings', { user: req.user });
});

router.get('/settings', ensureAuthenticated, (req, res) => {
    res.render('settings', { user: req.user });
});

router.get('/logout', (req, res) => {
    req.logout(err => {
        if (err) { return next(err); }
        res.redirect('/login');
    });
});


router.get('/changepassword', isAuthenticated, (req, res) => {
    res.render('include/changepassword');
});

// POST change password
router.post('/changepassword', isAuthenticated, async (req, res) => {
    const { oldPassword, newPassword, confirmPassword } = req.body;

    try {
        const user = await Login.findById(req.user._id);

        const isMatch = await bcrypt.compare(oldPassword, user.password);
        if (!isMatch) {
            return res.render('changepassword', { error: 'Old password is incorrect' });
        }

        if (newPassword !== confirmPassword) {
            return res.render('changepassword', { error: 'New passwords do not match' });
        }

        const hashedPassword = await bcrypt.hash(newPassword, 10);
        user.password = hashedPassword;
        await user.save();

        res.redirect('home');
    } catch (err) {
        console.error(err);
        res.render('changepassword', { error: 'Something went wrong' });
    }
});

module.exports = router;
