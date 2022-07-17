nomes =[
    "Pedro Zaquia Gualberto",
    "Ana Paula Mansur Zaquia",
    "Beatriz Mendes Mansur Zaquia",
    "Arthur Zaquia Gualberto",
    "Eduardo Gualberto",
    "Carlos Eduardo Mendes Mansur Zaquia",
    "Maria Clara Gabriel Mansur Zaquia",
]
images = [
    "eu.png",
    "ana.png",
    "bia.jpg",
    "tuta.png",
    "papo.png",
    "cadu.png",
    "vovis.png"
]
var i = 0;
function proximo() 
{
    i++
    if (i > 6) {
        i=0
    }
    var updatedImage = images[i]
    var updatedName = nomes[i]
    document.getElementById("imagem").src = updatedImage
    document.getElementById("nome").innerHTML = updatedName
}