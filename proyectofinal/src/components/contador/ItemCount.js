import { useState, useEffect } from 'react';
// hooks

const ItemCount = () => {
    const [contador, setContador] = useState(1);


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
    }, []);

    function agregarAlContador() {
        setContador(contador + 1);
    }
    function restarAlContador() {

        if (contador <= 1) {
            setContador(1)
        } else {
            setContador(contador - 1)
        };
    }

    console.log('Contador listo para el render');

    return (
        <div>


            <div><button className='btn btn-primary' onClick={restarAlContador}>-</button>{contador}<button className='btn btn-primary' onClick={agregarAlContador}>+</button></div>



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