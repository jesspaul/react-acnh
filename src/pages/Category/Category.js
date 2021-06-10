import './Category.css';
import { useContext } from 'react';
import { AcnhContext } from '../../contexts/acnhapi';
import Villager from '../../components/Villager/Villager';

const Category = () => {
    const { branch, apiData } = useContext(AcnhContext);

    return (
        <div className="Category">
            Category Page for {branch}
            {
                branch === 'All' &&
                    apiData.villagers.map((villager, idx) => (
                        <Villager 
                            villagerData={villager}
                            key={idx}
                        />
                    ))
            }
        </div>
    );
}
 
export default Category;