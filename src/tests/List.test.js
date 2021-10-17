import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import { render } from '@testing-library/react'
import List from '../components/List'

test('renders content', () => {
  const todo = {content: 'Component testing is done with react-testing-library'}
  
  const component = render(
        <List todo={todo.content}/>
  )

  component.debug()

  const div = component.container.querySelector('.todo')

  expect(div).toHaveTextContent(
    'Component testing is done with react-testing-library'
  )
})