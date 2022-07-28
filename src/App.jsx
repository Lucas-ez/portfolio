import './App.css';

import { Footer, Home, Header, Proyectos, Tecnologias } from './containers';

function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Proyectos/>
      <Tecnologias/>
      <Footer/>
    </div>
  );
}

export default App;
