import React from 'react'
import { useAtom } from 'jotai'
import { cartListAtom } from '../store'

export default function Cart() {
  const [cartList, setCartList] = useAtom(cartListAtom)

  const removeFromCart = (index) => {
    const updatedCartList = cartList.filter((_, i) => i !== index)
    setCartList(updatedCartList)
  }

  return (
    <>
      <br />
      <ul>
        {cartList.map((product, index) => (
          <li key={index}>
            <img
              src={product.image}
              alt={product.title}
              style={{ maxWidth: '100px' }}
            />{' '}
            <br />
            <strong>{product.title}</strong>: {product.description}
            <br />
            <strong>${product.price.toFixed(2)}</strong>
            <br />
            <button onClick={() => removeFromCart(index)}>Remove</button>
            <br />
            <br />
          </li>
        ))}
      </ul>
      <hr />
      <ul>
        <li>
          <strong>
            Total: $
            {cartList.reduce((total, prod) => total + prod.price, 0).toFixed(2)}
          </strong>
        </li>
      </ul>
    </>
  )
}
