import {act, render, screen} from '@testing-library/react'
import Home from '@/pages/index'
import {Provider} from "react-redux";
import store from "../src/store";
import singletonRouter from 'next/router';

jest.mock('next/router', () => require('next-router-mock'))

describe('Home', () => {


  it('has options for pair programming tools', () => {

    render(<Provider store={store}><Home/></Provider>)

    screen.getByText(/For each question, select all that apply/i)

    screen.getByText(/What do your engineering teams use for pair programming?/i)

    screen.getByText(/Teams/)
    screen.getByText(/Zoom/i)
    screen.getByText(/Tuple/i)
    screen.getByText(/Pop/i)
    screen.getByText(/Drovio/i)
    screen.getByText(/LiveShare\/VS Code/i)
    screen.getByText(/CodeWithMe\/Jetbrains/i)
    screen.getByText(/VNC\/BuiltInScreenSharing/i)
    screen.getByText(/Other/i)

    screen.getByText(/Continue/i)
  })

  it('can select a tool and continue', () => {

    render(<Provider store={store}><Home/></Provider>)

    const zoom = screen.getByRole('checkbox', {name: "Zoom"})
    act(() => {
      zoom.click()
    })

    const continueButton = screen.getByRole('button', {name: "Continue"})
    act(() => {
      continueButton.click()
    })

    expect(singletonRouter).toMatchObject({
      asPath: '/results',
    })
  })
})
