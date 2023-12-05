import React from 'react'

export default function Modal({ isOpen, closeModal, product }) {
  if (!isOpen) return null

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  }

  return (
    <div className="modal-overlay">
      <div className="modal-content" style={containerStyle}>
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <img
          src={product.image}
          alt={product.title}
          style={{ maxWidth: '20%' }}
        />
        <br></br>
        <button onClick={closeModal}>Close</button>
      </div>
    </div>
  )
}
