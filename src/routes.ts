import {Router, Request, Response, request} from 'express'
import { pegarUsuarios, pegarUsuario, salvarUsuario, atualizarUsuario} from '../src/controller/UsuarioController'
import { pegarChaves, salvarChave,atualizarChave} from '../src/controller/ChaveController'
import { pegarTranferencias, salvarTransferencia} from '../src/controller/TransferenciaController'
const routes = Router()

routes.get('/',(request: Request, response: Response) => {
    return response.json({
        message:"Hello word!"
    })
})

routes.get('/usuarios', pegarUsuarios)
routes.get('/usuario/:id', pegarUsuario)
routes.post('/usuarios',salvarUsuario)
routes.put('/usuarios/:id',atualizarUsuario)

routes.get('/chaves/',pegarChaves)
routes.post('/chaves/',salvarChave)
routes.put('/chaves/',atualizarChave)

routes.get('/transferencias/', pegarTranferencias)
routes.post('/transferencias/', salvarTransferencia)

export default routes