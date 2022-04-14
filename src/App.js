import logo from './logo.svg';
//import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';//この行
import { Button } from 'react-bootstrap';//この行
//インストールは npm react-bootstrap bootstrap 


function App() {
  return (
    <div className="App">
      <Button>TEST Button</Button>
    </div>
  );
}

export default App;
