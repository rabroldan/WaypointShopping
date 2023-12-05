import React, { useState, useEffect } from 'react'
import Modal from '@/components/Modal'
import { useAtom } from 'jotai'
import { cartListAtom } from '../store'

export default function ProductDetails() {
  const apiUrl = 'https://fakestoreapi.com/products'
  const [products, setProducts] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [modalProduct, setModalProduct] = useState(null)
  const [number, setNumber] = useState(0)

  const [cartList, setCartList] = useAtom(cartListAtom)

  function addToCart(product) {
    setCartList([...cartList, product])
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  async function fetchProducts() {
    try {
      const response = await fetch(apiUrl)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error('Error fetching product data:', error)
    }
  }

  function productModal(product) {
    setModalProduct(product)
  }

  function filterProducts() {
    return products.filter((product) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase()),
    )
  }

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault()
          fetchProducts()
        }}
      >
        <input
          type="text"
          placeholder="Search Item"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{ width: '300px', height: '30px', fontSize: '16px' }}
        />
        <button style={{ height: '30px', fontSize: '16px' }} type="submit">
          Search
        </button>
      </form>

      <Modal
        isOpen={modalProduct !== null}
        closeModal={() => setModalProduct(null)}
        product={modalProduct}
      />
      <br />
      <h1>Product List</h1>
      <br />
      <br />
      <table>
        <thead>
          <tr style={{ width: '300px', height: '30px', fontSize: '30px' }}>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Description</th>
            <th>Image</th>
            <th>Category</th>
            <th>Add</th>
          </tr>
        </thead>
        <tbody>
          {filterProducts().map((product) => (
            <tr key={product.id} onClick={() => productModal(product)}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td>{product.description}</td>
              <td>
                <img
                  src={product.image}
                  alt={product.title}
                  style={{ maxWidth: '100px' }}
                />
              </td>
              <td>{product.category}</td>
              <td>
                <button onClick={(e) => addToCart(product)}>Add to Cart</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
