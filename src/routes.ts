import {Router, Request, Response, request} from 'express'


import { getUsuarios, getUsuario, saveUsuario, updateUsuario, deletarUsuario} from '../src/controller/UsuarioController'
const routes = Router()

routes.get('/',(request: Request, response: Response) => {
    return response.json({
        message:"Hello word!"
    })
})

routes.get('/usuarios', getUsuarios)
routes.get('/usuario/:id', getUsuario)
routes.post('/usuarios',saveUsuario)
routes.put('/usuarios/:id',updateUsuario)
routes.delete('/usuarios/:id',deletarUsuario)





export default routes