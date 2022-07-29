import { useState, useEffect } from 'react';
// hooks

function ItemCount() {
    const [contador, setContador] = useState(0);
    const [contador2, setContador2] = useState(0);

    useEffect(() => {
        console.log('%c    Renderizado Siempre', 'color: #38761d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    });
    useEffect(() => {
        console.log('%c    >>>>> Renderizado Contador', 'color: #00761d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    }, [contador]);
    useEffect(() => {
        console.log('%c    >>>>> Renderizado contador2', 'color: #38001d');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    }, [contador2]);
    useEffect(() => {
        console.log('>>>>> Contador mounted!');
        return () => {
            console.log('Contador listo para ser cleanup!');
        }
    }, []);

    function agregarAlContador() {
        setContador(contador + 1);
    }
    function restarAlContador() {
        setContador(contador - 1);
    }

    console.log('Contador listo para el render');

    return (
        <div>


            <div><button onClick={restarAlContador}>-</button>{contador}<button onClick={agregarAlContador}>+</button></div>



        </div>
    );
}
/*
1. MONTADO / MOUNT - renderiza el componente
2. Actualizacion / Update
    a. espera alguna modifacion o cambio en el estado
    b. cuando detecta cambio en el estado entonces procesa el cambio 
    c. re-renderiza y muestra el nuevo layout (con el nuevo estado)
3. DESMONTAR / UNMOUNT
*/

export default ItemCount;