import { getRepository} from 'typeorm'
import {Chaves} from '../entity/Chaves'
import {Response, Request, request} from 'express'


export const getChaves = async ( request: Request, response: Response) => {
    const chaves = await getRepository(Chaves).find({relations:['usuario']})
    return response.json(chaves)
}

export const saveChave = async (request:Request, response:Response) => {
    const novaChave = request.body
    console.log(novaChave["usuario"]['id'])
    const chavesUsuario = await getRepository(Chaves).find({relations:['usuario']})
    //console.log(chavesUsuario[0]['usuario']["id"])
    var n = 0
    
    while(n <= chavesUsuario.length){
        if(chavesUsuario[n]['usuario']['id'] == novaChave["usuario"]['id']){
            console.log("ok")
        }
        n++
    }/*
    for(var i in chavesUsuario){
        console.log(chavesUsuario[i]['usuario']['id'])
    }*/
    
    response.json({message:"ok"})
/*
    
    const usuario = await getRepository(Chaves).save(request.body)
    response.json(usuario)*/
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