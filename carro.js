let yCarros = [40, 96, 150]
let velocidadeCarros = [3, 4, 5];
let xCarros = [600, 600, 600]

function mostraCarro(){
  for ( let i = 0; i < imagemCarros.length; i = i + 1){
    image(imagemCarros[i], xCarros[i], yCarros[i], 50, 40);
  }
}

function movimentaCarro(){
  for (let i = 0; i < imagemCarros.length; i = i + 1){
    xCarros[i] -= velocidadeCarros[i];
  }
}

function voltaInicioCarro(){
  for ( let i = 0; i < imagemCarros.length; i = i +1){
    if (passouTodaTela(xCarros[i])){
      xCarros[i] = 600;
    }
  }
}

function passouTodaTela(xCarros){
  return xCarros < -50;
}
