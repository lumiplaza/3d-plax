

const ItemCount = ( { count, handleCount } ) => {

    return (
        <>
        <div>
            <button
                onClick={() => handleCount("min")}>
                -
            </button>
            <span id="counter">
                 {count}
            </span>
            <button
                onClick={() => handleCount("max")}>
                +
            </button>
        </div>
        </>
      )
    };

export default ItemCount;