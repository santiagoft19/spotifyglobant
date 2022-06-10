export function pintarCanciones(resultado){
    let fila=document.getElementById("artista")
    
    resultado.tracks.forEach((tracks,index) => {
        let columna=document.createElement("div")
        columna.classList.add("flexy")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card")
        tarjeta.classList.add("h-100")

        let imagen=document.createElement("img")
        imagen.height= tracks.album.images[2].height
        imagen.width=tracks.album.images[2].width
        imagen.src=tracks.album.images[0].url

        let separador = document.createElement("hr")
        separador.classList.add("w-50")
        separador.classList.add("mx-auto")
        separador.classList.add("d-block")

        let cuadroTexto=document.createElement("div")
        cuadroTexto.classList.add("px-3")
        cuadroTexto.classList.add("text-center")

        let nombreCancion=document.createElement("h2")
        nombreCancion.textContent=tracks.name

        let audio=document.createElement("audio")
        audio.id= 'audio-player'
        audio.src=tracks.preview_url
        audio.type=tracks.type
        audio.setAttribute("controls","controls")

        cuadroTexto.appendChild(nombreCancion)
        cuadroTexto.appendChild(direccionCancion)

        tarjeta.appendChild(imagen)
        tarjeta.appendChild(separador)
        tarjeta.appendChild(cuadroTexto)

        columna.appendChild(tarjeta)
        fila.appendChild(columna)
    })
}