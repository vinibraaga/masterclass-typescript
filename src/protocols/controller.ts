import { Request, Response} from 'express';

export interface Controller {
    getUsers(req: Request, res: Response): Promise<any>;
}