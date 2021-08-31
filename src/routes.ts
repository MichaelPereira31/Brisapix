import {Router, Request, Response, request} from 'express'


import { getUsuarios, getUsuario,saveUsuario, updateUsuario} from '../src/controller/UsuarioController'
const routes = Router()

routes.get('/',(request: Request, response: Response) => {
    return response.json({
        message:"Hello word!"
    })
})

routes.get('/usuarios',getUsuarios)
routes.get('/usuarios/:id',getUsuario)
routes.post('/usuarios',saveUsuario)
routes.put('/usuarios/:id',updateUsuario)


export default routes