import { getRepository} from 'typeorm'
import {Chaves} from '../entity/Chaves'
import {Response, Request, request} from 'express'


export const getChaves = async ( request: Request, response: Response) => {
    const chaves = await getRepository(Chaves).find({relations:['usuario']})
    
    /*while(chaves.length){
        console.log(chaves);
      }
    
    
        
    }*/
    for(var i in chaves){
        console.log(chaves[i])
    }
    return response.json(chaves)
}

export const saveChave = async (request:Request, response:Response) => {
    const novaChave = request.body
    var j = novaChave["usuario"]
    const chavesUsuario = await getRepository(Chaves).find({relations:['usuario']})
    //console.log(chavesUsuario[0]['usuario']["id"])
    
    for(var i in chavesUsuario){
        var k = chavesUsuario[i]['usuario']["id"]
        if(k == j){
            console.log("teste")
        }
        
    }
    
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