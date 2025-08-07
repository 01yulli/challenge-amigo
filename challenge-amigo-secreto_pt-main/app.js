
//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = [];
let nomeAmigo;
listaDeAmigo = document.getElementById('listaAmigos');
listaDeAmigo.innerHTML = '';
listaDeAmigo = document.getElementById('listaAmigos');
listaDeAmigo.innerHTML = '';
function adicionarAmigo() {
    nomeAmigo = document.getElementById('amigo').value;
    if (nomeAmigo == '') {
        alert('Adicione um nome à lista');
    }
    else {
        amigos.push(nomeAmigo);
        console.log(amigos);
        adicionarNaLista(nomeAmigo);
        limparCampo();
    }
}
function adicionarNaLista(nomeAmigo) {
    li = document.createElement('li');
    li.textContent = nomeAmigo;
    listaDeAmigo.appendChild(li);

}

function adicionarLista() {
    listaDeAmigo.innerHTML = '';
    amigos.forEach(amigos => {
        let li = document.createElement('li');
        li.textContent = amigos;
        listaDeAmigo.appendChild(li);
    });
}

function limparCampo() {
    listaNome = document.getElementById('amigo');
    listaNome.value = '';
}

console.log(amigos);

