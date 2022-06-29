import React, { useState, useEffect, useMemo } from 'react'
import CardItem from '../../components/carditem'
import Modal from '../../components/modal'

import { listData } from '../../config/mockup'

const Homepage = () => {
    const [shoppingList, setShoppingList] = useState([])
    const [open, setOpen] = useState(false)
    const [curInd, setCurInd] = useState(-1)

    const totalQuantity = useMemo(() => {
        return shoppingList.reduce((val, item) => val + item.quantity, 0)
    }, [shoppingList])

    const totalPrice = useMemo(() => {
        return shoppingList.reduce((val, item) => val + item.price * item.quantity, 0)
    }, [shoppingList])

    const handleClearCart = () => {
        setShoppingList([])
    }

    const handleRemoveItem = (ind) => {
        setShoppingList(prev => {
            const temp = prev.map(i => i)
            temp.splice(ind, 1)
            return temp
        })
    }

    const onChangeQuantity = (quantity) => {
        setShoppingList(prev => {
            const temp = prev.map(i => i) 
            temp[curInd].quantity = quantity
            return 
        })
    }

    const handleChangeQuantity = (ind) => {
        setCurInd(ind)
        setOpen(true)
    }

    useEffect(() => {
        setShoppingList(listData)
    }, [])

    return (
        <main>
            <p>Total Quantity: {totalQuantity}</p>
            <p>Total Price: {totalPrice}</p>
            <button disabled={!totalQuantity} onClick={handleClearCart}> Clear shoping cart </button>
            <div style={{
                display:'grid', 
                gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
                gap: '10px'
                }}
            >
            {
                shoppingList?.map((item, ind) => 
                    <CardItem 
                        {...item} 
                        handleRemove={() => handleRemoveItem(ind)}
                        handleChange={() => handleChangeQuantity(ind)}
                        key={`card_item_${ind}`} 
                    />
                )
            }
            </div>

            <Modal 
                open={open} 
                data={shoppingList[curInd]} 
                onClose={() => setOpen(false)} 
                handleUpdate={(p) => onChangeQuantity(p)}
            />
        </main>
    )
}

export default Homepage