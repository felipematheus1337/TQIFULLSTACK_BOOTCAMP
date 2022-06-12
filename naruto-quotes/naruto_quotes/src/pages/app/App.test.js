import { render,screen,fireEvent } from "@testing-library/react";
import {rest} from 'msw';
import { setupServer } from 'msw/node';

import { App } from "./App";

const response = { speaker: 'Speaker', quote: 'test quote'}

const server = setupServer(
    rest.get(process.env.REACT_APP_API,(req,res,ctx) => {
        return res(ctx.json(response));
    })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test('renders the app, with a button, a quote and a text', () => {
    render(<App/>);

  
    const imageEl = screen.getByRole('img');
    const buttonEl = screen.getByRole('button');
    const textEl = screen.getByText('/Speaker/');

    expect(imageEl).toBeInTheDocument();
    expect(buttonEl).toBeInTheDocument();
    expect(textEl).toBeInTheDocument();


    
});


test('calls api on button click and update its text', async () => {
 render (<App/>);

 const buttonEl = screen.getByRole('button');

 fireEvent.click(buttonEl);

 const quoteEl  = await screen.findByText(response.quote)
 expect(quoteEl).toBeInTheDocument();

});

test('calls api on startup and renders it response', async () => {
    render (<App/>);

    const quoteEl  = await screen.findByText(response.quote)
    expect(quoteEl).toBeInTheDocument();


})