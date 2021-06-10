import poster from '../../img/acnh-poster.jpg';
import './Home.css';

const Home = () => {
    return (
        <div className="Home">
            <h1>Animal Crossing: New Horizons</h1>
            <img id="poster" src={poster} />
        </div>
    );
}
 
export default Home;