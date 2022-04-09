import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';

function App() {

  const [name, setName] = useState("")
  const [peperoni, setPeperoni] = useState(false)
  const [sausage, setSausage] = useState(false)
  const [peppers, setPeppers] = useState(false)
  const [onions, setOnions] = useState(false)

  return (
    <div className="App">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        
        <Card>
          <h1>
          Pizza Order
        </h1>
        <form>
          <label>
            Name:
            <input 
              value={name} 
              onChange={(e) => setName(e.target.value)}>
            </input>
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={peperoni}
              onChange={() => setPeperoni(!peperoni)}
            /> 
            Peperoni
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={sausage}
              onChange={() => setSausage(!sausage)}
            />
            Sausage 
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={peppers}
              onChange={() => setPeppers(!peppers)}
            /> 
            Peppers
          </label>
          <br></br>
          <label>
            <input
              type="checkbox"
              checked={onions}
              onChange={() => setOnions(!onions)}
            /> 
            Onions
          </label>
        </form>
        </Card>

      <Card>
        <h3>Order</h3>
        <h3>{name}</h3>
        {peperoni && <p>Peperoni</p>}
        {sausage && <p>Sausage</p>}
        {peppers && <p>Peppers</p>}
        {onions && <p>Onions</p>}
      </Card>
    </div>
  );
}

export default App;
