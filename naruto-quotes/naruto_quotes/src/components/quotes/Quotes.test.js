import {render,screen,fireEvent} from "@testing-library/react";
import {Quotes} from "./Quotes";

const quote = 'test quote';
const speaker = 'random speaker';

test('renders received quote, speaker and a button',() => {

    render(<Quotes quote={quote} speaker={speaker}/>)

    const buttonEl = screen.getByRole('button');
    const quoteEl = screen.getByText(quote);
    const speakerEl = screen.getByText(`- ${speaker}`);

    expect(buttonEl).toBeInTheDocument();
    expect(quoteEl).toBeInTheDocument();
    expect(speakerEl).toBeInTheDocument();
  
})


test('calls a callback when button is pressed',() => {
    const callBack = jest.fn();

    render(<Quotes quote={quote} speaker={speaker} onUpdate={callBack}/>)
    const buttonEl = screen.getByRole('button')
    fireEvent.click(buttonEl);


    expect(callBack).toHaveBeenCalledTimes(1);
})
