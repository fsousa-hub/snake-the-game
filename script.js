/** 
* Criar elemento que irá rodar o jogo
* Canvas: getElementById "snake" 
*/
let canvas = document.getElementById("snake");

/**
 * Criar o contexto, e renderizar em formato 2d
 * Context: getContext "2d"
 */
let context = canvas.getContext("2d");
let box = 32;

/**
* criar o backgroud, com a funcão criarBG
* definir uma cor com fillStyle
* desenhar retângulo  com fillRect setando x e y, e largura e a altura 
*/
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

criarBG();
