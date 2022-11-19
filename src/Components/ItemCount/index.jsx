import { useState, useEffect }  from 'react';

const ItemCount = ( { initial, stock, onAdd } ) => {

    const [contador, setContador] = useState(parseInt(initial));

    const sumarUno = () => {
        setContador(contador + 1)
    }

    const restarUno = () => {
        setContador(contador - 1)
    }

    useEffect(() => {setContador(parseInt(initial));
        }, [initial])


    return (
        <>
            <div>
                <button disabled={contador <= 1 } onClick={restarUno}> - </button>
                <span> {contador} </span>
                <button disabled={contador >= stock} onClick={sumarUno}> + </button>
                <div>
                    <button onClick={() => onAdd(contador)}>Agregar al carrito </button>
                </div>
            </div>
        </>
    )

}

export default ItemCount;