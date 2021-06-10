import './Card.css';

const Card = ({ data }) => {
    return (
        <div className="Card">
            <div className='title'>
                <img className="icon" src={data['icon_uri']} />
                <p className="name">{data.name['name-USen']}</p>
            </div>
        </div>
    );
}
 
export default Card;