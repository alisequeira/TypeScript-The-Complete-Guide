import express from 'express';

//Setup a singleton inside typescript 

//instances this class to have a express route instead of having to import it in each file
//we want only ever have one single route available inside of application
export class AppRouter {
    private static instance: express.Router;

    static getInstance(): express.Router {
        if (!AppRouter.instance) {
            AppRouter.instance = express.Router();
        }

        return AppRouter.instance;
    }
}