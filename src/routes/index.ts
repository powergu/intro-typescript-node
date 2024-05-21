import { Router } from 'express'
import taskRoutes from './task/task.routes'
import authRoutes from './auth/auth.routes'
import enderecoRoutes from './endereco/endereco.routes'

const routes = Router()

routes.use('/task', taskRoutes)
routes.use('/auth', authRoutes)
routes.use('/endereco', enderecoRoutes)

export default routes