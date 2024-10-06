
const filterBox = document.querySelectorAll('.item-box');

document.querySelector('.btn-box').addEventListener('click', event => {
    if (event.target.tagName !== 'BUTTON') return false;

    let filterClass = event.target.dataset['f'];
    console.log(filterClass); 

    filterBox.forEach(elem => {
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');
        } else {
            elem.classList.remove('hide'); 
        }
    });
});