import './Category.css';
import { useContext } from 'react';
import { AcnhContext } from '../../contexts/acnhapi';

const Category = () => {
    const { branch } = useContext(AcnhContext);

    return (
        <div className="Category">
            Category Page for {branch}
        </div>
    );
}
 
export default Category;