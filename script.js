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
 * Criar a cobrinha como lista, já que ela vai ser uma série de coordenadas.
 * Que quando pintadas, criam os quadradinhos.
 * */ 
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";




/**
* Criar o backgroud, com a funcão criarBG
* definir uma cor com fillStyle
* desenhar retângulo  com fillRect setando x e y, e largura e a altura 
*/
function criarBG(){
    context.fillStyle = "lightgreen";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

/**
 * Criar a cobrinha, com a função criarCobrinha
 */
function criarCobrinha(){
    for (i = 0; i < snake.length; i++){
        context.fillStyle = "green";
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

/**
 * Criar função que atualiza jogo
 */

function iniciarJogo(){
    criarBG();
    criarCobrinha();

    // variaveis array x e y
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // direcoes
    if (direction == "right") snakeX += box;
    if (direction == "left") snakeX -= box;
    if (direction == "up") snakeY -= box;
    if (direction == "down") snakeY += box;

    snake.pop();

    let newHead = {
        x: snakeX,
        y: snakeY
    }
    snake.unshift(newHead);

}

/**
 * Utilizar a função setInterval, para iniciar e atualizar o jogoa a ada 100 ms
 */
let jogo = setInterval(iniciarJogo, 100);
