// crio uma variavel chamada h1 e acho a tag html h1, na sua primeira
// visualizacao, a posição 0, dentro do arquivo.html
let h1 = window.document.getElementsByTagName('h1')[0];
h1.style.color = '#EEEEEE';


let corpo = window.document.body;
corpo.style.background = '#090040';


function mudarCor(){
    let div = document.getElementById('minhaDiv');

    if(div.style.backgroundColor == 'blue'){
        div.style.backgroundColor = 'red'

    } else {
        div.style.backgroundColor = 'blue'
    }
}