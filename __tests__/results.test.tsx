import {render, screen} from '@testing-library/react'
import {Provider} from "react-redux";
import {makeStore} from "../src/store";
import Results from "@/pages/results";
import Table from "@/components/Table";

jest.mock('next/router', () => require('next-router-mock'))

describe('Results', () => {

  let store: ReturnType<typeof makeStore>

  beforeEach(() => {
    store = makeStore({
      tool: {
        pairProgrammingTool: 'Pop'
      }
    })
  })

  it('has the tool that was selected', () => {
    render(<Provider store={store}><Results/></Provider>)

    screen.getByText(/You selected Pop/i)
  })


  it('has a table for pair programming tools', () => {
    render(<Provider store={store}><Table tools={[{
      "Name": "fakePairProgrammingTool",
      "Requires Good VPN": "N",
      "Requires Fast Network": "N",
      "Full Screen Sharing": "Y",
      "Each Person Has Own Cursor": "N",
      "Allows Annotation": "N",
      "Allows Control of Other Computer": "Y",
      "Can Be Installed On Site - Info Stays Within Corporate Network": "N",
      "Audio/Video/Screen Share": "Y",
      "General Category": [
        "Screen Sharing/Communication",
        "Not made for pairing",
        "No low latency remote control"
      ]
    }]}/></Provider>)

    const headers = screen.getByRole('headers').children
    expect(headers.length).toBe(10);
    expect(headers[0].textContent).toBe("Name");
    expect(headers[1].textContent).toBe("Requires Good VPN");
    expect(headers[2].textContent).toBe("Requires Fast Network");
    expect(headers[3].textContent).toBe("Full Screen Sharing");
    expect(headers[4].textContent).toBe("Each Person Has Own Cursor");
    expect(headers[5].textContent).toBe("Allows Annotation");
    expect(headers[6].textContent).toBe("Allows Control of Other Computer");
    expect(headers[7].textContent).toBe("Can Be Installed On Site - Info Stays Within Corporate Network");
    expect(headers[8].textContent).toBe("Audio/Video/Screen Share");
    expect(headers[9].textContent).toBe("General Category");

    const rows = screen.getByRole('column', {name: "fakePairProgrammingTool"}).children
    expect(rows.length).toBe(12);
    expect(rows[0].textContent).toBe("fakePairProgrammingTool");
    expect(rows[1].textContent).toBe("N");
    expect(rows[2].textContent).toBe("N")
    expect(rows[3].textContent).toBe("Y")
    expect(rows[4].textContent).toBe("N")
    expect(rows[5].textContent).toBe("N")
    expect(rows[6].textContent).toBe("Y")
    expect(rows[7].textContent).toBe("N")
    expect(rows[8].textContent).toBe("Y")
    expect(rows[9].textContent).toBe("Screen Sharing/Communication")
    expect(rows[10].textContent).toBe("Not made for pairing")
    expect(rows[11].textContent).toBe("No low latency remote control")
  })
})