import './App.scss';
import  Header  from './views/Header';
import  HeaderOP  from './views/HeaderOp';
import  Main  from './views/Main';
import  Footer  from './views/Footer';
import BarraSup from './views/BarraSup';
import Nosotros from './views/Nosotros';

function App() {
  return (
    <div className="App">
      
          <BarraSup></BarraSup>
          <Header></Header> 
        
              {/* <Main></Main>*/}
              <Footer></Footer> 
    
      
    </div>
  );
}

export default App;
