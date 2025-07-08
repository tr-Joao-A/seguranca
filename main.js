const numeroSenha = document.querySelector('.parametro-senha__texto');
var tamanhoSenha = 12;
const letrasMaiusculas = 'QWERTYUIOPASDFGHJKLÇZXCVBNM'
const letrasMinusculas = 'qwetryuiopasdfghjklçzxcvbnm'
const numeros = '1234567890'
const simbolos = '!?@#%&_'
numeroSenha.textContent = tamanhoSenha;
const botoes = document.querySelectorAll('.parametro-senha__botao');
const campoSenha = document.querySelector('#campo-senha');
const checkbox = document.querySelectorAll(".checkbox")
const forcaSenha = document.querySelector('.forca')

botoes[0].onclick = diminuiTamanho;
botoes[1].onclick = aumentaTamanho;

function diminuiTamanho(){
    if (tamanhoSenha > 1) {
        tamanhoSenha --
        numeroSenha.textContent = tamanhoSenha;
    }
    gerar();
}

function aumentaTamanho(){
    tamanhoSenha ++;
    numeroSenha.textContent = tamanhoSenha;
    gerar();
}

for (i=0; i < checkbox.length;i++){
    checkbox[i].onclick = gerar;
}

gerar();

function gerar(){
    var alfabeto = ''
    if (checkbox[0].checked){
        alfabeto = alfabeto + letrasMaiusculas
    }
    if (checkbox[1].checked){
        alfabeto = alfabeto + letrasMinusculas
    }
    if (checkbox[2].checked){
        alfabeto = alfabeto + numeros
    }
    if (checkbox[3].checked){
        alfabeto = alfabeto + simbolos
    }
    var senha = ''
    for (var i = 0; i < tamanhoSenha;i++) {
        var numeroAleatorio = Math.random()*alfabeto.length;
        numeroAleatorio = Math.floor(numeroAleatorio)
        senha = senha + alfabeto[numeroAleatorio];
    }
    campoSenha.value = senha
    forca(alfabeto.length);
}

function forca(tamanhoAlfabeto){
    var entropia = tamanhoSenha * Math.log2(tamanhoAlfabeto)
    forcaSenha.classList.remove('fraca','media','forte')
    if (entropia > 57){
        forcaSenha.classList.add('forte')
    } else if (entropia > 35 && tamanhoSenha < 58) {
        forcaSenha.classList.add('media')
    } else {
        forcaSenha.classList.add('fraca')
    }
    const valorEntropia = document.querySelector('.entropia')
    valorEntropia.textContent = "UM computador leva até " +Math.floor(2**entropia/(100e6*60*60*24)) + " dias para descobrir sua senha"
}
