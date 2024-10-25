document.querySelector('.parametro-senha__botao');
console.log(botoes);
console.log(botoes);
function diminuiTamanho(){
}
const numeroSenha = document.querySelector('.parametro-senha__texto');
let tamanhoSenha = 12;
function diminuiTamanho(){
    tamanhoSenha = tamanhoSenha - 1;
    numeroSenha.textContent = tamanhoSenha
    }
    botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;
function aumentaTamanho() {
    if (tamanhoSenha < 20)
    tamanhoSenha = tamanhoSenha + 1;
    numeroSenha.textContent = tamanhoSenha;
    }
    function diminuiTamanho() {
        if (tamanhoSenha > 1)
        tamanhoSenha = tamanhoSenha - 1;
        numeroSenha.textContent = tamanhoSenha;
        }