// Hamburguer JS 

let burguerOpen = document.querySelector('.burguerOpen');
let blurModal = document.querySelector('.rightList');
let listItems = document.querySelector('.rightItems');

burguerOpen.addEventListener('click', function(e){
    e.preventDefault();
    let visibility = blurModal.getAttribute('data-visible');
    let burguerStatus = burguerOpen.getAttribute('data-collapse');
    if (visibility === "false") {
        blurModal.setAttribute('data-visible', true);
        burguerOpen.setAttribute('data-collapse', true)
    }else{
        blurModal.setAttribute('data-visible', false);
        burguerOpen.setAttribute('data-collapse', false)
    }
    // blurModal.style.transform = "translateX(0%)";
})

// burguerClose.addEventListener('click', function(e){
//     e.preventDefault();
//     blurModal.style.transform = 'translateX(100%)';
// })