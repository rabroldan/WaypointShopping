import React from 'react'
export function Hello() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <div style={containerStyle}>
      <img src="./compass.png" alt="Intro Logo" />
      <h1>INTRODUCTION</h1>
      <br />
      <p>
        Welcome to our online store! Discover a world of unique products that
        cater to your every need. <br />
        At our shop, you'll find a wide range of carefully curated items
        designed to enhance your lifestyle. <br />
        Whether you're looking for fashionable clothing, trendy accessories, or
        the latest gadgets, we have it all.
      </p>
    </div>
  )
}

export function Mission() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }

  return (
    <div style={containerStyle}>
      <h1>Mission Statement</h1>
      <br />
      <p>
        To provides a seamless shopping experience, ensuring clients can focus
        on finding the perfect items without any distractions. <br />
        Just like how Waypoint simplifies journaling, our shop streamlines your
        shopping process, making it easy to explore, choose, and purchase the
        products you love.
      </p>
      <br /> <br />
      <a href="/products">
        <u>
          <h1>CLICK FOR PRODUCT BROWSING</h1>
        </u>{' '}
      </a>
    </div>
  )
}
