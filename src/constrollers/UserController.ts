import {Request, Response} from 'express'
import { database } from "../database";

export class UserController {
    index(req: Request, res: Response): Response {
        return res.status(200).json(database)
    }

    create(req: Request, res: Response): Response {
        const {name} = req.body;
        
        if (!name.length) {
            return res.status(403).json({'mensagem': 'Não é possível criar usuários com nome em branco.'})
        }
        
        database.push(name)

        return res.status(201).json({'mensagem': `Usuário ${name} criado com sucesso!`})
    }
}