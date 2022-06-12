import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import narutoImage from "../../images/naruto.png"
import { Quotes } from "../../components/quotes"
import { getQuote, getQuotes } from "../../services";
import jutsoSound from "../../sounds/jutso.mp3";

const audio  = new Audio(jutsoSound);

export function   App() {
  const [quoteState,setQuoteState] = useState({quote:'ok',speaker:'speaker'});

  const onUpdate = async () => {
    const quote = await getQuote();
    setQuoteState(quote);
    audio.play();
  };

  useEffect(() => {
   onUpdate();
  },[])

    return (
    <Content>
     <Quotes {...quoteState} onUpdate={onUpdate}/>
     <NarutoImg src={narutoImage} alt="Naruto with a kunai"/>
    </Content>
  
  );

}




const Content = styled.div`
height:100vh;
padding: 0 45px;
display: flex;
justify-content: center;
align-items: center;
`
const NarutoImg = styled.img`
max-width: 50vw;
align-self: flex-end;
`
