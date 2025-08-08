
let amigos = [];
let nomeAmigo;
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
        adicionarLista();
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
function sortearAmigo() {
    let amigoResultado = document.getElementById('resultado');
    amigoResultado = '';
    if (amigos.length === 0) {
        alert('Não há nomes para serem sorteados!');
    }
    else {
        let amigoNumero = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[amigoNumero];
        let amigoResultado = document.getElementById('resultado');
        amigoResultado.innerHTML = amigoSorteado;
        amigos.splice(amigoNumero, 1);
        adicionarLista();
        console.log(amigos);
    } 
} 

function limparCampo() {
    listaNome = document.getElementById('amigo');
    listaNome.value = '';
}
function reiniciarSorteio() {
    let botao = document.createElement('button');
    botao.textContent = 'Reiniciar';
    botao.addEventListener('click', function() {
        location.reload();
    })
    document.body.appendChild(botao);
}
reiniciarSorteio();
console.log(amigos);

