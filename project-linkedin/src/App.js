import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import Navegador from './navRotas';
import PerfilLink from './ProfilePaste/perfilLekdin';
import Sidebar from './FeedPaste/sidebar';
import Feed from './FeedPaste/Feed';
import Widgets from './FeedPaste/Widgets';
import Header from './FeedPaste/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className="wrapper">
      <Sidebar/>
      <Feed/>
      <Widgets/>
      </div>
      <div><Router>
      <Navegador/>
         <Routes>
           <Route path='/Perfil' element={<PerfilLink/>}/>
         </Routes>
       </Router>
       </div>
    </div>
  );
}

export default App;
