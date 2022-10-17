import PerfilLink from './ProfilePaste/perfilLekdin';
import Sidebar from './FeedPaste/sidebar';
import Feed from './FeedPaste/Feed';
import Widgets from './FeedPaste/Widgets';
import Header from './FeedPaste/Header';
import Navegador from './navRotas';

function Rotss() {
    return (
        <div className="App">
            <Navegador/>
                <Header/>
            <div className="wrapper">
                <Sidebar />
                <Feed />
                <Widgets />
            </div>
        </div>
    )
}
export default Rotss;