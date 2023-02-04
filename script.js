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

// Coordenadas
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

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
 * Criar a comida
 */
function drawFood(){
    context.fillStyle = "red";
    context.fillRect(food.x, food.y, box, box);
}


/**
 * Criar um evento de escuta (pegar evento de click), com addEventListener
 * Detectar e chamar uma função
 */
document.addEventListener('keydown', update);

/**
 * Controle das direções, atraves da captura das teclas: 37, 38, 39 e 40
 */
function update(event) {
    if (event.keyCode == 37 && direction != 'right') direction = 'left';
    if (event.keyCode == 38 && direction != 'down') direction = 'up';
    if (event.keyCode == 39 && direction != 'left') direction = 'right';
    if (event.keyCode == 40 && direction != 'up') direction = 'down';

}

/**
 * Criar função que atualiza jogo
 */

function iniciarJogo(){
    
    // impedir que a cobrinha se esconda "suma"
    if(snake[0].x > 15*box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15*box && direction == "down") snake[0].y = 0;
    if(snake[0].y > 0 && direction == "up") snake[0].y = 16 * box;
    
    criarBG(); // cria backgroud
    criarCobrinha(); // cria a cobrinha
    drawFood(); // cria comida

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
    // método unshitf, adiciona como primeiro quadradinho da cobrinha
    snake.unshift(newHead);

}

/**
 * Utilizar a função setInterval, para iniciar e atualizar o jogoa a ada 100 ms
 */
let jogo = setInterval(iniciarJogo, 100);
