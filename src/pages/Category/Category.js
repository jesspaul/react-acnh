import './Category.css';
import { useContext } from 'react';
import { AcnhContext } from '../../contexts/acnhapi';
import Card from '../../components/Card/Card';

const Category = () => {
    const { branch, apiData } = useContext(AcnhContext);
    return (
        <div className="Category">
            Category Page for {branch}
            {
                apiData[branch.charAt(0).toLowerCase() + branch.slice(1)].map((data, idx) => (
                    <Card 
                        data={data}
                        key={idx}
                    />
                ))
            }
        </div>
    );
}
 
export default Category;