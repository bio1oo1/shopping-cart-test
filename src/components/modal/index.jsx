import React, { useState, useEffect } from 'react'

const Modal = (props) => {
    const {open, data, handleUpdate, onClose} = props

    const [quantity, setQuantity] = useState(0)

    useEffect(() => {
        setQuantity(data?.quantity)
    }, [props]) //eslint-disable-line

    const handleSave = () => {
        handleUpdate(quantity)
        onClose()
    }

    return (
        <>
        {
            open && (<div style={{
                        position: 'absolute', 
                        background: 'rgba(0, 0, 0, .3)', 
                        width: '100vw', 
                        height:'100vh', 
                        left: '0', 
                        top: '0',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: '2'
                    }}>
                <div style={{width: '50vw', height: 'auto', padding: '10px', background: 'white'}}>
                <p>Total Price: {data?.quantity * data?.price}</p>
                <input value={quantity} onChange={(e) => setQuantity(Number(e.target.value))} />
                <button onClick={() => setQuantity(prev => prev + 1)}>Add one</button>
                <button disabled={!quantity} onClick={() => setQuantity(prev => prev - 1)}>Remove one</button>
                <button onClick={handleSave} disabled={quantity === data?.quantity}>Save</button>
                </div>
            </div>)
        }
        </>
    )
}

export default Modal