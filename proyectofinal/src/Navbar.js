import React from 'react'
import ReactDOM from 'react-dom/client'

const contenedorApp = document.querySelector('#root')

const midiv = < div id="nav-container" >
    <nav>
        <ul>
            <li>Inicio</li>
            <li>Sobre Nosotros</li>
            <li>Contacto</li>
        </ul>
    </nav>
</div >;

const reactAppDom = ReactDOM.createRoot(contenedorApp);
reactAppDom.render(midiv)

