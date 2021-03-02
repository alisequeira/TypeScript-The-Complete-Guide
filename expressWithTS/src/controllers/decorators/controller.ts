import 'reflect-metadata';
import { AppRouter } from '../../appRouter'
import { Methods } from '../Methods';
import { MetadataKeys } from '../MetadataKeys';
import { NextFunction, Request, Response, RequestHandler } from 'express';

function bodyValidator(keys: string[]): RequestHandler {
    return function (req: Request, res: Response, next: NextFunction) {

    }
}

export function controller(routerPrefix: string) {
    return function (target: Function) {
        const router = AppRouter.getInstance();

        for (let key in target.prototype) {
            const routeHandler = target.prototype[key];
            const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
            const method: Methods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
            const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
            if (path) {
                router[method](`${routerPrefix}${path}`, ...middlewares, routeHandler);
            }
        }
    }
}