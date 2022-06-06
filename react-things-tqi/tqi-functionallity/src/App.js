import logo from './logo.svg';
import './App.css';
import Eventos from './Eventos';

const buttonA = <button>Histórico dos Clientes</button>
const buttonB = <button>Cadastrar Clientes</button>
const hasCustomer  = false;



const listCustomer = [
  {
    id:1,
    name:'Felipe Matheus',
    skills:['React ','NodeJS ','CSS ','Webpack']
  }
  ,
  {
    id:2,
    name:'Mariana Cardoso',
    skills:['TQI ','HTML ','Canvas ','GO ']
  }
  ,
  {
    id:3,
    name:'Tereza Davila ',
    skills:['FrontEnd Engineer ','Angular ','Vue ']
  }
  ,
  {
    id:4,
    name:'Antonio Davila',
    skills:['.NET']
  }
  ,
]

/*
to put on App()
<ul>
       {listCustomer.map(renderCustomers)}
       </ul>
*/



function App() {
  const renderCustomers = (customer,index) => {
  return (
    <div>
      <li key={`${customer.id}`}>
          {customer.name}
          <br/>
       </li>      
       {customer.skills.map(renderSkills)}
    </div>
   ) 
  }

  const renderSkills = (skill,index) => {
    return (
      <div style={{paddingLeft: '10px'}}>
      <li key={`skill -${index}`}>{skill}</li>
      </div>
    )
    
  }

  


  return (
    <div className="App">
      <header className="App-header">
       <p>Digital Innovation</p>
       <p>Aula Renderização Condicional</p>
        <Eventos/>
      </header>
    
    </div>
  );
}

export default App;
