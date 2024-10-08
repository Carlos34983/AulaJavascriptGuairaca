//selecionar por ID

function puxarElementoPorId() {
    const subtitulo = document.getElementById('subtitulo');
    return console.log(subtitulo);
}

puxarElementoPorId();

//selecionar por classe

function puxarPorClasse(){
    const titulo = document.getElementsByClassName('titulo');
    return console.log(titulo);
}

puxarPorClasse();

//selecionar por tag

function puxarPorTag() {
    const tags = document.getElementsByTagName('p');
    return console.log(tags);
}

puxarPorTag();

//funcao para modificar texto

function setText() {
    const subtitulo = document.getElementById('meuTitulo');
    subtitulo.textContent = "agora vai!";
}

