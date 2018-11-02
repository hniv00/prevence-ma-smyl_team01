export const authController = {
    authenticate: (req, res) =>{
        let user = req.params.user;
        let secret = req.params.secret;

        if (user === 'admin' && secret == 'justHeslo') {
            res.json({user: user, loggedIn: true});
        }
        else{
            res.send('Wrong user/password combination');
        }
    }
}