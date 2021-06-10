import './Header.css';
import logo from '../../img/acnh-logo.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AcnhContext } from '../../contexts/acnhapi';

const Header = () => {
    const { setBranch } = useContext(AcnhContext);
    return (
        <div className="Header">
            <img id="logo" src={logo} alt="Animal Crossing: New Horizons" />
            <div className='heading-section'>
                <div className="navbar">
                    <div className="subnav">
                        <Link className='nav-link' to='/'>Home</Link>
                    </div>

                    <div className="subnav">
                        <a href="#" className="nav-link subnavbtn">Villagers <i className="fa fa-caret-down"></i></a>
                        <div className="subnav-content">
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Villagers')}>All</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Species')}>Species</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Gender')}>Gender</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Personality')}>Personality</Link>
                        </div>
                    </div>

                    <div className="subnav">
                        <a href="#" className="nav-link subnavbtn">Critters <i className="fa fa-caret-down"></i></a>
                        <div className="subnav-content">
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Bugs')}>Bugs</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Fish')}>Fish</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Sea')}>Sea</Link>
                        </div>
                    </div>

                    <div className="subnav">
                        <a href="#" className="nav-link subnavbtn">Collectibles <i className="fa fa-caret-down"></i></a>
                        <div className="subnav-content">
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Art')}>Art</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Fossils')}>Fossils</Link>
                            <Link className="nav-link" to='/category' onClick={() => setBranch('Songs')}>Songs</Link>
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