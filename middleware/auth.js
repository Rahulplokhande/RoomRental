function ensureAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}
function isAuthenticated(req, res, next) {
    if (req.isAuthenticated()) return next();
    res.redirect('/login');
}
function isLoggedIn(req, res, next) {
    if (req.session.user || req.isAuthenticated()) {
        return next();
    }
    res.redirect("/login");
}
module.exports = { ensureAuthenticated,isAuthenticated ,isLoggedIn};


