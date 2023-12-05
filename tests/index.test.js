// index.test.js
import React from 'react'
import { render } from '@testing-library/react'
import { Hello, Mission } from '../components/Hello'

test('Renders Home function and Hello and Mission from components', () => {
  render(<Hello />)
  render(<Mission />)
})
