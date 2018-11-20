export const goodTest = `
import React from 'react'
import {render, fireEvent} from 'react-testing-library'
import Accordion from '../accordion'

test('can open accordion items to see the contents', () => {
  const hats = {title: 'Favorite Hats', contents: 'Fedoras are classy'}
  const footware = {
    title: 'Favorite Footware',
    contents: 'Flipflops are the best',
  }
  const {getByText, queryByText} = render(
    <Accordion items={[hats, footware]} />,
  )

  expect(getByText(hats.contents)).toBeInTheDocument()
  expect(queryByText(footware.contents)).toBeNull()

  fireEvent.click(getByText(footware.title))
  
  expect(getByText(footware.contents)).toBeInTheDocument()
  expect(queryByText(hats.contents)).toBeNull()
})`.trim();