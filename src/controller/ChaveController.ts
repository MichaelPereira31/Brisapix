import { getRepository} from 'typeorm'
import {Chaves} from '../entity/Chaves'
import {Response, Request} from 'express'


export const pegarChaves = async ( request: Request, response: Response) => {
    const chaves = await getRepository(Chaves).find({relations:['usuario']})
    return response.json(chaves)
}

export const salvarChave = async (request:Request, response:Response) => {
    const novaChave = request.body
    const chavesUsuario = await getRepository(Chaves).find({relations:['usuario']})
    
    const qtdeId = chavesUsuario.filter((chave) =>{
        return chave.usuario.id === novaChave.usuario.id
    }).length
    
    if(qtdeId < 3){
        const usuario = await getRepository(Chaves).save(request.body)
        response.json(usuario)
    }else{
        response.json({message:"Voce atingiu limite máximo de chvaes"})
    }
}

export const atualizarChave = async( request: Request, response: Response) =>{
    const {id} = request.params
    const chave = await getRepository(Chaves).update(id, request.body)

    if(chave.affected == 1){
        const chaveAtualizada = await getRepository(Chaves).findOne(id)
        return response.json(chaveAtualizada)
    }
    return response.status(404).json({message:'Chave não encontrada'})
}