import {render, screen} from '@testing-library/react'
import Home from '@/pages/index'
import {Provider} from "react-redux";
import store from "../src/store";

jest.mock('next/router', () => require('next-router-mock'))

describe('Home', () => {

  it('has a title', () => {
    render(<Provider store={store}><Home/></Provider>)
    screen.getByText(/Hello World/i)
  })
})
