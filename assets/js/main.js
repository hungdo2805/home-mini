const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$('.product-tabs__item');
const panes = $$('.tab-pane');
const wishlists  = $$('.product-item__info-favourite');



tabs.forEach((tab,index) =>{

    const pane = panes[index];

    tab.onclick = function (){
        $('.product-tabs__item.tab--active').classList.remove('tab--active');
        $('.tab-pane.tab--active').classList.remove('tab--active');


        this.classList.add('tab--active');
        pane.classList.add('tab--active');
    }
});

wishlists.forEach((wishlist,index) =>{
    wishlist.onclick = function(){
        wishlist.innerHTML = `<i class="fas fa-heart"></i>`;
    };
});


let scrollTop = document.getElementById('scroll-top');

window.addEventListener('scroll',function(){
    let value = window.scrollY;
    if(value < 1200){
        scrollTop.style.display ='none';
    }
    if(value > 1200){
        scrollTop.style.display ='block';
    }
});

scrollTop.onclick = function(){
    window.scrollTo(0, 0);
}

