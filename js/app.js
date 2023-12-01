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

const verMas = () => {
    // traigo mi elemento padre
    const seccion = document.querySelector('#contenedorPadre');
    // condicion para q se oculte el texto
    if (btnVerMas[3].innerHTML === 'Ver mas') {

    console.log('desde la funcion ver mas');
    // crear un parrafo nuevo
    const parrafoNuevo = document.createElement('p');
    parrafoNuevo.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti consectetur libero commodi, magni eligendi laudantium vel optio repudiandae magnam tempora nulla asperiores delectus fugit ex facere quod culpa possimus voluptatem sed provident voluptates eos autem. Quis, repudiandae eligendi perspiciatis maiores neque, earum sit accusantium incidunt at dolorum quae voluptates nisi nulla nemo, culpa vitae. Reprehenderit, nam. Explicabo vero autem odit doloremque molestiae id error ducimus, facilis nobis, voluptates quidem pariatur sint! Beatae quisquam ipsum esse cumque, facilis modi quo omnis vero harum, earum nam atque architecto eligendi blanditiis fuga, culpa odit maxime minima. Ex eum quia illo doloremque assumenda nam quas? Deleniti voluptatibus quos velit magni ducimus dolor quam enim. Accusantium, in rerum. Libero et officia laboriosam non quae nam placeat, sit ipsum expedita dicta cum, debitis corporis quaerat! Et tempore rerum similique aspernatur placeat quaerat dolorem, culpa maiores necessitatibus! Enim modi repellendus, numquam dolorem distinctio officia nisi omnis nobis veniam natus, perspiciatis earum. Deserunt, necessitatibus eaque! Fugit nisi incidunt aliquam voluptate dolorum, fuga id, eveniet enim reiciendis voluptatum ea officiis earum ut deleniti quibusdam odio consequuntur. Dolorum temporibus vitae pariatur reprehenderit, atque velit nobis quisquam maiores aperiam facilis quos. Praesentium eos totam amet accusamus reiciendis, harum animi sed vel nostrum? Similique, quia. Consequatur nisi nulla aspernatur ad minus, nihil, voluptatem obcaecati quod sapiente quos repellat quidem, voluptatibus ipsum laboriosam suscipit cum dignissimos ducimus hic voluptates consectetur asperiores expedita. Veritatis neque aliquid vero tenetur cupiditate natus, expedita saepe quia voluptatem corporis odio nostrum autem alias ab ducimus deserunt illo explicabo!';
    parrafoNuevo.className = 'lead';

    // agregar un nodo hijo
    // seccion.appendChild(parrafoNuevo); // agrega nodo hijo al final
    // seccion.prepend(parrafoNuevo) // agrego nodo hijo al principio
    seccion.insertBefore(parrafoNuevo, btnVerMas[3]);

    // modificar texto del boton
    btnVerMas[3].innerHTML = 'Ocultar';
    btnVerMas[3].className = 'btn btn-danger my-3';
    } else {
        console.log(seccion.children[3]);
        seccion.removeChild(seccion.children[3]);
        btnVerMas[3].innerHTML = 'Ver mas';
        btnVerMas[3].className = 'btn btn-primary';
    }
}

const obtenerTexto = (e) => {
    e.preventDefault();
    const inputBusqueda = document.querySelector('#inputBusqueda');
    console.log(inputBusqueda.value);
}

const btnVerMas = document.getElementsByTagName('button');
console.log(btnVerMas[3]);
const formularioBusqueda = document.querySelector('form');

// sintaxis cuando la funcion tiene parametros (se crea una funcion anonima)
// btnVerMas[3].addEventListener('click', ()=>(verMas('das', 'asd', 33)));

btnVerMas[3].addEventListener('click', verMas);
formularioBusqueda.addEventListener('submit', obtenerTexto);



