const CardItem = (props) => {
    const {price, quantity, name, handleRemove, handleChange} = props

    return (
        <div style={{ border: '1px solid gray', padding: '5px'}}>
            <h3>{name}</h3>
            <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <p>{price}</p>
                <p>{quantity} Items</p>
            </div>
            <p>TotalPrice: {price*quantity}</p>
            <button onClick={handleRemove}>Remove</button>
            <button onClick={handleChange}>Change Quantity</button>
        </div>
    )

}

export default CardItem