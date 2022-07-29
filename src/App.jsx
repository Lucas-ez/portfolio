import './App.css';

import { Footer, Home, Header, Proyectos, Tecnologias, Redes } from './containers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Proyectos/>
      <Tecnologias/>
      <Redes/>
      <Footer/>
    </div>
  );
}

export default App;
