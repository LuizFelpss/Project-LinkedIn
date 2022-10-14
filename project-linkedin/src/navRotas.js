import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
import Sidebar from './FeedPaste/sidebar';
function  Navegador() {

    return (
        
            <div className="content">
                <div className="part1">

                    <nav>
                        <ul>
                            <Link to="/Perfil"></Link>
                        </ul>
                    </nav>
                </div>
            </div>
        
    )
    
}
export default Navegador