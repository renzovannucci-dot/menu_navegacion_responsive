/*const navLinks = document.querySelectorAll('.navegacion__link');
const btnAbrirCerrar = document.querySelector('.boton__abrir');

btnAbrirCerrar.addEventListener('click', () => {
    
    if(btnAbrirCerrar.textContent === 'Abrir') {
        btnAbrirCerrar.textContent = 'Cerrar';
        navLinks.forEach(link => {
            link.classList.add('visible');
        });
       

    } else {
        btnAbrirCerrar.textContent = 'Abrir';
        navLinks.forEach(link => {
            link.classList.remove('visible');
        });
    }
})
*/

document.querySelector('.menu__toggle').addEventListener('click', function() {
    const nav = document.querySelector('.navegacion__contenedor');
    nav.classList.toggle('visible');
    this.querySelector('i').classList.toggle('bi-list');
    this.querySelector('i').classList.toggle('bi-x');
});



/*const isVisible =  nav.classList.toggle('visible');
    this.setAttribute('aria-expanded', isVisible);


*/


