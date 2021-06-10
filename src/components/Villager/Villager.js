import './Villager.css';

const Villager = ({ villagerData }) => {
    return (
        <div className="Villager">
            <div className='title'>
                <img className="icon" src={villagerData['icon_uri']} />
                <p className="name">{villagerData.name['name-USen']}</p>
            </div>
            {/* <div className="expanded-info">
                <div className="details">
                    <p className="detail-label">Species: </p>
                    <p className="detail" id="species">${villagerData.species}</p>
                    <p className="detail-label">Gender: </p>
                    <p className="detail" id="gender">${villagerData.gender}</p>
                    <p className="detail-label">Birthday: </p>
                    <p className="detail" id="birthday">${villagerData['birthday-string']}</p>
                    <p className="detail-label">Personality: </p>
                    <p className="detail" id="personality">${villagerData.personality}</p>
                    <p className="detail-label">Catchphrase: </p>
                    <p className="detail" id="catchphrase">"${villagerData['catch-phrase']}"</p>
                </div>
                <div className="img-section">
                    <img className="image" src={villagerData['image_uri']} />
                </div>
            </div> */}
        </div>
    );
}
 
export default Villager;