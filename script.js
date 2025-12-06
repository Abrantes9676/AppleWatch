const imagemVisualizacao = document.querySelector("#visualizacao img");  
const tituloProduto = document.querySelector("h1");
const nomeCorSelecionada = document.querySelector("#nome-cor-selecionada");
const imagemMiniatura0 = document.querySelector('[for="0-imagem"] img');
const imagemMiniatura1 = document.querySelector('[for="1-imagem"] img');
const imagemMiniatura2 = document.querySelector('[for="2-imagem"] img');
const opcoesTamanho = ['41 mm' , '45 mm'];
const opcoesCores = ["Verde-cipreste", "Azul-inverno", "Meia-noite", "Estelar", "Rosa-claro"];

let numImagemSelecionada = 1;
let numTamanhoSelecionado = 1;
let numCorSelecionada = 1;

 function atualizarCorSelecionada () {
    
    const opcaoCorSelecionadaString = document.querySelector('[name="opcao-cor"]:checked').id.charAt(0);
    numCorSelecionada = Number(opcaoCorSelecionadaString);
    const nomeCor = opcoesCores[numCorSelecionada];
    const nomeCorNaPasta = nomeCor.toLowerCase();
    nomeCorSelecionada.innerText = 'Cor - ' + nomeCor;
    
    
    tituloProduto.innerText = "Pulseira loop esportiva " + 
    nomeCor.toLowerCase() + " para caixa de " 
    + opcoesTamanho[numTamanhoSelecionado]; 

  
    imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + nomeCorNaPasta + "/imagem-" + numImagemSelecionada + ".jpeg";
    imagemMiniatura0.src = "./imagens/opcoes-cores/imagens-" + nomeCorNaPasta + "/imagem-0.jpeg";
    imagemMiniatura1.src = "./imagens/opcoes-cores/imagens-" + nomeCorNaPasta + "/imagem-1.jpeg";
    imagemMiniatura2.src = "./imagens/opcoes-cores/imagens-" + nomeCorNaPasta + "/imagem-2.jpeg"; 
}

function atualizarTamanho() {
    const opcaoTamanhoSelecionadoString = document.querySelector ('[name="opcao-tamanho"]:checked').id.charAt(0);
    numTamanhoSelecionado = Number(opcaoTamanhoSelecionadoString);
    const tamanhoCaixa = opcoesTamanho[numTamanhoSelecionado]; 
        
    console.log (tamanhoCaixa);
    
    
    tituloProduto.innerText = "Pulseira loop esportiva "+ opcoesCores[numCorSelecionada].toLowerCase() +" para caixa de " + tamanhoCaixa

    if (tamanhoCaixa === '41 mm') {
        imagemVisualizacao.classList.add('imagem-pequena'); 
    } else {
        imagemVisualizacao.classList.remove('imagem-pequena');
    } 
}

function atualizarImagemSelecionada () {
    const opcaoImagemSelecionada = document.querySelector(
        '[name="opcao-imagem"]:checked').id.charAt(0);

        numImagemSelecionada= opcaoImagemSelecionada;
        imagemVisualizacao.src = "./imagens/opcoes-cores/imagens-" + opcoesCores[numCorSelecionada].toLowerCase() + "/imagem-" + numImagemSelecionada + ".jpeg";
}



