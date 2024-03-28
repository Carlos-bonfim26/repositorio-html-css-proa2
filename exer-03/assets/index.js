const btn_open = document.getElementById('open');
const btn_close = document.getElementById('close');
const menu_responsive = document.getElementById('navbar-responsive');

btn_open.addEventListener('click', () =>{
    btn_open.style.display = 'none'
    menu_responsive.style.display = 'flex'

});
btn_close.addEventListener('click', () =>{
    btn_open.style.display = 'flex'
    menu_responsive.style.display = 'none';
});