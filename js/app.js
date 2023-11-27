const cambiarTitulo = ()=> {
    const titulo = document.querySelector('h1');
    // const titulo = document.querySelector('#'); selector de id
    // const titulo = document.querySelector('.'); selector de clase
    // const parrafos = document.querySelectorAll('p');

    // const parrafos = document.getElementById('nuevoTitulo')
    // const parrafos = document.getElementsByClassName('nuevoTitulo')
    // const parrafos = document.getElementsByTagName('p')
    console.log(titulo);
    // titulo.innerText = 'Nuevo título desde JS'; no se pueden agregar etiquetas html
    titulo.innerHTML = 'Nuevo título desde <b>JS</b>';
    titulo.className =  'display-3 text-primary'
}