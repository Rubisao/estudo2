let imagemDaEstrada;
let imagemAtor;
let imagemCarro1;

//function 
let xCarro = 600;
let yCarro = 40;

//Ator
let yAtor = 366;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemAtor = loadImage("Imagens/ator-1.png")
  imagemCarro1 = loadImage("Imagens/carro-1.png")
}

function setup() {
  createCanvas(500, 400);
}

function draw() {
  background(imagemDaEstrada);
  mostraAtor();
  mostraCarro();
  movimentaCarro();
  movimentoAtor();
}

//Funções
function mostraAtor(){
    image(imagemAtor, 100, yAtor, 30, 30);
}

function mostraCarro(){
    image(imagemCarro1, xCarro, yCarro, 50, 40);
}

function movimentaCarro(){
  xCarro -= 2;
}

function movimentoAtor(){
  if (keyIsDown(UP_ARROW)){
    yAtor -= 3;
  }
  if (keyIsDown(DOWN_ARROW))
    yAtor += 3;
  }
