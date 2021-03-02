import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
class LoginControllers {

    @get('/login')
    getLogin(req: Request, res: Response): void {
        res.send(`
                    <form method="POST">
                        <div>
                            <label>Email</label>
                            <input name="email"/>
                        </div>
                        <div>
                            <label>Password</label>
                            <input name="password" type="password"/>
                        </div>
                        <button>Submit</button>
            `);
    }

    @post('/login')
    @bodyValidator('email', 'password')
    postLogin(req: Request, res: Response) {
        const { email, password } = req.body;
        if (email && password && email === 'hi@hi.com' && password === 'password') {//type guard
            //mark this person as logged in
            req.session = { loggedIn: true };
            //redirect them to the root route

            res.redirect('/');
        } else {
            res.send('Invalid email or password');
        }
    };
}