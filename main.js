const exp_arrows = document.querySelectorAll('.exp_arrow');

exp_arrows.forEach(
    arrow => arrow.addEventListener('click', () => toggleList(arrow.getAttribute('value')))
);

function toggleList(listId) {

    console.log(listId)
    const list = document.querySelector(`#${listId}`);
    list.classList.toggle("collapsed");

}