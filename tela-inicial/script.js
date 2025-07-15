let PersonagemeEscolhido = 1;
const qtdPersonagem = 5;

// funcao para trocar de personagem
function trocarpersonagem(mudancapersonagem){
    PersonagemeEscolhido += mudancapersonagem
    if(PersonagemeEscolhido > qtdPersonagem ){
        PersonagemeEscolhido =1
    }else if(PersonagemeEscolhido < 1){
        PersonagemeEscolhido = qtdPersonagem

    }
    document.getElementById("personagem").src = `personagem${PersonagemeEscolhido}.png`;
}