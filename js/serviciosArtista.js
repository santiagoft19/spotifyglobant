//import {URI,PARAMATROS_PETICION} from "./constantes.js"

export async function consumirAPI(URI,GenerarTOKEN){
    
    let paramatros = {
        method: "GET",
        headers: { Authorization: GenerarTOKEN }
    }
    let respuesta = await fetch(URI, await paramatros)
    let cancciones = respuesta.json()
    return cancciones
}

