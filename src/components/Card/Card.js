import './Card.css';

const Card = ({ data }) => {
    return (
        <div className="Card">
            <div className='title'>
                {data['icon_uri'] && <img className="icon" src={data['icon_uri']} />}
                
                {typeof(data) === 'object' ? <p className="name">{data.name['name-USen']}</p> : <p className="name">{data}</p> }
                
            </div>
        </div>
    );
}
 
export default Card;