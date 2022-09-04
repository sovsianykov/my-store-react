import Button from "../../Button/index";
import {render, screen} from "@testing-library/react";


describe("BUTTON TEST",()=>{
    const buttonProps = {
        onClick : ()=> null,
        children: "Test title"
    }
    // eslint-disable-next-line testing-library/no-node-access
    it('render the button',() =>{

        // eslint-disable-next-line testing-library/no-node-access
        render(<Button onClick={buttonProps.onClick} children={buttonProps.children} />)
        const el = screen.getByText(/Test title/i)
        expect(el).toBeInTheDocument()

    })
})
