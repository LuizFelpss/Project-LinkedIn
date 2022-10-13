import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom' 
function  Navegador() {

    return (
        <header>
            <div className="content">
                <div className="part1">

                    <nav>
                        <ul>
                            <li><Link to="/Perfil">PerfilLink</Link></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
    
}
export default Navegador