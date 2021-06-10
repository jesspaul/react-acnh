import './Header.css';
import logo from '../../img/acnh-logo.png';

const Header = () => {
    return (
        <div className="Header">
            <img id="logo" src={logo} alt="Animal Crossing: New Horizons" />
            <div className='heading-section'>
                <div className="navbar">
                    <div className="subnav">
                        <a className="nav-link" href="./index.html">Home</a>
                    </div>

                    <div className="subnav">
                        <a href="#" className="nav-link subnavbtn">Villagers <i className="fa fa-caret-down"></i></a>
                        <div className="subnav-content">
                            <a href="#" className="nav-link" id='all-link'>All</a>
                            <a href="#" className="nav-link" id='species-link'>Species</a>
                            <a href="#" className="nav-link" id='gender-link'>Gender</a>
                            <a href="#" className="nav-link" id='personality-link'>Personality</a>
                        </div>
                    </div>

                    <div className="subnav">
                        <a href="#" className="nav-link subnavbtn">Critters <i className="fa fa-caret-down"></i></a>
                        <div className="subnav-content">
                            <a href="#" className="nav-link" id="bug-link">Bugs</a>
                            <a href="#" className="nav-link" id='fish-link'>Fish</a>
                            <a href="#" className="nav-link" id='sea-link'>Sea</a>
                        </div>
                    </div>

                    <div className="subnav">
                        <a href="#" className="nav-link subnavbtn">Collectibles <i className="fa fa-caret-down"></i></a>
                        <div className="subnav-content">
                            <a href="#" className="nav-link" id="art-link">Art</a>
                            <a href="#" className="nav-link" id='fossil-link'>Fossils</a>
                            <a href="#" className="nav-link" id='songs-link'>Songs</a>
                        </div>
                    </div>
                </div>

                <form>
                    <input type="text" id="search-input" placeholder="search..." />
                    <button id='search-button'><i className="fas fa-search"></i></button>
                </form>

            </div>
        </div>
    );
}
 
export default Header;