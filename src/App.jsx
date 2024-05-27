
import './App.css'
import Navigation from "./components/Navigation/navigation";
import Button from './components/button/button';
import Contactform from './components/contactform/contactform';
import Contactheader from './contactheader/contactheader';

function App() {
  
  return (
    <div>
    <Navigation />
    <main className='maincontainer'>
    <Contactheader />
    <Contactform />
    </main>
   
  
    </div>
  )
}

export default App
