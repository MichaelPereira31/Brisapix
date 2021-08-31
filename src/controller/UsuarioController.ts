import { getRepository} from "typeorm"
import {Usuario} from '../entity/Usuarios'
import {request, Request, response, Response} from "express"

export const getUsuarios = async(request: Request, response:Response) => {
    const usuarios = await getRepository(Usuario).find()
    return response.json(usuarios)
}

export const getUsuario = async(request: Request, response:Response) => {
    const {id} = request.params
    const usuario = await getRepository(Usuario).findOne(id)
    return response.json(usuario)
}

export const saveUsuario = async(request: Request, response:Response) => {
    const usuario = await getRepository(Usuario).save(request.body)
    response.json(usuario)
}

export const updateUsuario =  async(request: Request, reponse: Response) => {
    const {id} = request.params
    const usuario = await getRepository(Usuario).update(id, request.body)

    if(usuario.affected == 1){
        const usuarioUpdated = await getRepository(Usuario).findOne(id)
        return response.json(usuarioUpdated)
    }
    return response.status(404).json({message:'Usuario não encontrado'})
}