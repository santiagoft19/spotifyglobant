import {consumirAPI} from "./serviciosArtista.js"
import {pintarCanciones} from "./mostrarArtista.js"
import {generarTOKEN} from "./constantes.js"

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)

let listaArtista=document.getElementById("artista")
let cantantes=[
    {URI :"https://api.spotify.com/v1/artists/33ScadVnbm2X8kkUqOkC6Z/top-tracks?market=ES",IMG:'', nombre: "Don Omar"},
    {URI :"https://api.spotify.com/v1/artists/4q3ewBCX7sLwd24euuV69X/top-tracks?market=ES",IMG:'', nombre: "Bad Bunny"},
    {URI :"https://api.spotify.com/v1/artists/12vb80Km0Ew53ABfJOepVz/top-tracks?market=ES",IMG:'', nombre: "Ñengo Flow"},
    {URI :"https://api.spotify.com/v1/artists/7x5Slu7yTE5icZjNsc3OzW/top-tracks?market=ES",IMG:'', nombre: "Willie Colon"},
    {URI :"https://api.spotify.com/v1/artists/0B9fAbZMZTBXUyffDU2Mxj/top-tracks?market=ES",IMG:'', nombre: "Nelson Velasquez"}
]
let  TOKEN = await generarTOKEN()
let resultado= await consumirAPI(cantantes[0].URI, TOKEN)
pintarCanciones(resultado)
let imagen = document.getElementById("")
