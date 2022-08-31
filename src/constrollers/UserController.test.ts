import { Request } from "express"
import { makeMockResponse } from "../mocks/mockResponse"
import { UserController } from "./UserController"

describe('Users Controller', () => {
    const userController = new UserController()

    const mockRequest = {} as Request
    const mockResponse = makeMockResponse()
    it('Deve listar os nossos usuários', () => {
        userController.index(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(200)
        expect(mockResponse.state.json).toHaveLength(0)
    })

    it('Deve criar um novo usuário', () => {
        mockRequest.body = {
            name: 'Novo usuário'
        }

        userController.create(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(201)
        expect(mockResponse.state.json).toMatchObject({'mensagem': `Usuário Novo usuário criado com sucesso!`})
    })

    it('Não deve criar um usuário com o nome em branch', () => {
        mockRequest.body = {
            name: ''
        }
        userController.create(mockRequest, mockResponse)
        expect(mockResponse.state.status).toBe(403)
        expect(mockResponse.state.json).toMatchObject({'mensagem': 'Não é possível criar usuários com nome em branco.'})
    })
})