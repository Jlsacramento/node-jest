"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const database_1 = require("../database");
class UserController {
    index(req, res) {
        return res.status(200).json(database_1.database);
    }
    create(req, res) {
        const { name } = req.body;
        if (!name.length) {
            return res.status(403).json({ 'mensagem': 'Não é possível criar usuários com nome em branco.' });
        }
        database_1.database.push(name);
        return res.status(201).json({ 'mensagem': `Usuário ${name} criado com sucesso!` });
    }
}
exports.UserController = UserController;
