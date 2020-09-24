import { Request, Response} from 'express';
import EmailService from '../services/EmailService';

const users = [
    {nome: "Vinicio", email: "vinibraaga@gmail.com"},
    {nome: "Viviany", email: "viviany@gmail.com"}
];

export default {
    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create(req: Request, res: Response){
        const emailService = new EmailService();

        emailService.sendMail(
            { name: "Vinicio Braga", email: "vinibraag@gmail.com"},
            { subject: "Bem-vindo ao sistema", body: "Seja bem vindo"}
        );
        return res.send();
    }
};