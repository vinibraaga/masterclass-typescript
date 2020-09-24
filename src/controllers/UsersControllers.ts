import { Request, Response } from 'express';
import { Controller } from '../protocols/controller';
import usersService from '../services/users'

export default class UsersController implements Controller{
	public async getUsers(req: Request, res: Response): Promise<any> {
		try {
			return res.status(200).json(await usersService.getUsers());
		}catch(err) {
			throw new Error(err);
		}
    }
}