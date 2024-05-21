import { Router } from 'express'
import EnderecoController from '../../controllers/endereco/endereco.controller'
import authMiddleware from '../../middlewares/auth.middleware'

const enderecoRoutes = Router()

enderecoRoutes.post('/', authMiddleware, EnderecoController.store)
enderecoRoutes.get('/', authMiddleware, EnderecoController.index)

export default enderecoRoutes