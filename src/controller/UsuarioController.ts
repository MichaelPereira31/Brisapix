import { getRepository } from 'typeorm'
import { Usuarios } from '../entity/Usuarios'
import { Request, Response } from 'express'

export const pegarUsuarios = async (request: Request, response: Response) => {
    const usuarios = await getRepository(Usuarios).find()
    return response.json(usuarios)
};

export const pegarUsuario = async(request: Request, response:Response) => {
    const {id} = request.params
    const usuario = await getRepository(Usuarios).findOne(id)
    return response.json(usuario)
};

export const salvarUsuario = async(request: Request, response:Response) => {
    const usuario = await getRepository(Usuarios).save(request.body)
    return response.json(usuario)
};

export const atualizarUsuario =  async(request: Request, response: Response) => {
    const {id} = request.params
    const usuario = await getRepository(Usuarios).update(id, request.body)

    if(usuario.affected == 1){
        const usuarioUpdated = await getRepository(Usuarios).findOne(id)
        return response.json(usuarioUpdated)
    }
    return response.status(404).json({message:'Usuario não encontrado'})
}