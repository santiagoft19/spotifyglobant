import {resultado} from "./serviciosArtista.js"
import {pintarCanciones} from "./mostrarArtista.js"

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

let listaArtista=document.getElementById("artista")
listaArtista=document.addEventListener("click",function(event){
    event.preventDefault()
    
})