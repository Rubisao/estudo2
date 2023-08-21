let imagemDaEstrada;
let imagemAtor;
let imagemCarro1;
let imagemCarro2;
let imagemCarro3;

let trilhaSonora;
let somColisao;
let somPontos;

function preload(){
  imagemDaEstrada = loadImage("Imagens/estrada.png")
  imagemAtor = loadImage("Imagens/ator-1.png")
  imagemCarro1 = loadImage("Imagens/carro-1.png")
  imagemCarro2 = loadImage("Imagens/carro-2.png")
  imagemCarro3 = loadImage("Imagens/carro-3.png")
  imagemCarros = [imagemCarro1, imagemCarro2, imagemCarro3, imagemCarro1, imagemCarro2, imagemCarro3]
  
  trilhaSonora = loadSound("Sons/trilha.mp3");
  somColisao = loadSound("Sons/colidiu.mp3");
  somPontos = loadSound("Sons/pontos.wav");
}
