//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeAmigo;
function adicionarAmigo() {
    nomeAmigo = document.getElementById('amigo').value;
          if (nomeAmigo == '') {
            alert('Adicione um nome à lista');
}              else {
                 amigos.push(nomeAmigo);
                 console.log(amigos);
                 limparCampo();

                  function adicionarLista() {
    listaDeAmigo = document.getElementById('listaAmigos');
    listaDeAmigo.innerHTML = '';
    listaDeAmigo.innerHTML = 'amigos';
}

}  
}  function adicionarLista() {
    listaDeAmigo = document.getElementById('listaAmigos');
    listaDeAmigo.innerHTML = '';
    listaDeAmigo.innerHTML = 'amigos';
}

function limparCampo() {
    listaNome = document.getElementById('amigo');
    listaNome.value = '';
}

console.log(amigos);