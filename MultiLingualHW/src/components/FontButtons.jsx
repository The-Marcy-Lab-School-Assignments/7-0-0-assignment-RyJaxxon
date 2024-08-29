const FontButtons = ({ setFont }) => {
    return (
        <>
            <button onClick={()=> setFont((curr) => curr + 0.1)}>+</button>
            <button onClick={()=> setFont((curr) => curr - 0.1)}>-</button> 
        </>
    )
}

export default FontButtons;