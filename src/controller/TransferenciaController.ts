import { Request, Response } from 'express'
import { getRepository } from 'typeorm'
import {Transferencia } from '../entity/Transferencias'

export const pegarTranferencias = async( request: Request, response: Response) => {
     const tranferencias = await getRepository(Transferencia).find({relations:['usuarioEnvia'    ,'usuarioRecebe']})
     return response.json(tranferencias)
}

export const salvarTransferencia = async(request: Request, response: Response) => {
    const tranferencia = await getRepository(Transferencia).save(request.body)
    response.json(tranferencia)
}

