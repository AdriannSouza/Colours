const list_itens = document.querySelectorAll('div.skills_list > li')
console.log(list_itens);

const exp_arrow = document.querySelectorAll('div.list_header > img.exp_arrow');
console.log(exp_arrow);

exp_arrow.forEach( (e) => {
    e.addEventListener('click', exibirLista(e))
} )

function exibirLista() {

}