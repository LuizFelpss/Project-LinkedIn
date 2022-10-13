import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import Navegador from './navRotas';
import PerfilLink from './ProfilePaste/perfilLekdin';
import Sidebar from './FeedPaste/sidebar';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
    <Sidebar/>   
     </div>
      <header>
      <Router>
      <Navegador/>
         <Routes>
           <Route path='/Perfil' element={<PerfilLink/>}/>
         </Routes>
       </Router>
      </header>
    </div>
  );
}

export default App;
