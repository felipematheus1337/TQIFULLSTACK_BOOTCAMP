import React,{useState,useEffect} from 'react';
import { ThemeContex,themes } from './Theme';
import Card from './Card'
function App() {
  const [token,setToken] = useState()

  useEffect(() => {
   setTimeout(() => {
     setToken('32312msadmsamd')
   },4000)
  },[setToken])
  return (
    <ThemeContex.Provider value={{ ...themes.primary,token}}>
     <Card/>
    </ThemeContex.Provider>

  )
}


export default App;