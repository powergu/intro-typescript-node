import { Request, Response } from 'express'
import Endereco from '../../models/endereco.entity'

export default class EnderecoController {
  static async store (req: Request, res: Response) {
    const { rua, cidade,estado, cep } = req.body
    const { userId } = req.headers

    if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

    if (!rua) {
      return res.status(400).json({ error: 'A rua é obrigatória' })
    }

    const endereco = new Endereco()
    endereco.rua = rua
    endereco.cidade = cidade
    endereco.estado = estado
    endereco.userId = Number(userId)
    await endereco.save()

    return res.status(201).json(endereco)
  }

  static async index (req: Request, res: Response) {
    const { userId } = req.headers

    if (!userId) return res.status(401).json({ error: 'Usuário não autenticado' })

    const enderecos = await Endereco.find({where: { userId: Number(userId) }})
    return res.json(enderecos)
  }
}